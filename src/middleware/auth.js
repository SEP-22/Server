const jwt = require("jsonwebtoken");
const User = require("../models/user");

const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
const JWT_AT_ET = process.env.JWT_AT_ET;

const auth = async (req, res, next) => {
  try {
    let refreshTokenHeader = req.headers["x-refresh-token"];
    let accessTokenHeader = req.headers["x-access-token"];
    if (refreshTokenHeader == undefined && accessTokenHeader == undefined) {
      return res.status(404).json({ message: "auth token not found" });
    } else {
      let refreshToken = refreshTokenHeader && refreshTokenHeader.split(" ")[1]; //TODO:check whether bearer is there to split
      let accessToken = accessTokenHeader && accessTokenHeader.split(" ")[1];

      if (accessToken) {
        const atStatus = accessTokenVerify(
          accessToken,
          ACCESS_TOKEN_SECRET_KEY
        );
        console.log(atStatus);
        if (atStatus.status === "success") {
          res.header("x-access-token", atStatus.newToken);
          req.user = atStatus.message;
          return next();
        } else {
          const rtStatus = await refreshTokenVerify(
            refreshToken,
            REFRESH_TOKEN_SECRET_KEY,
            ACCESS_TOKEN_SECRET_KEY
          );
          if (rtStatus.status === "success") {
            res.header("x-access-token", rtStatus.newToken);
            req.user = rtStatus.message;
            return next();
          } else {
            return res.status(401).send(rtStatus.message);
          }
        }
      } else {
        const rtStatus = await refreshTokenVerify(
          refreshToken,
          REFRESH_TOKEN_SECRET_KEY,
          ACCESS_TOKEN_SECRET_KEY
        );
        if (rtStatus.status === "success") {
          res.header("x-access-token", rtStatus.newToken);

          req.user = rtStatus.message;
          return next();
        } else {
          return res.status(401).send(rtStatus.message);
        }
      }
    }
  } catch (error) {
    res.status(401).send({ error: "Internal Error" });
  }
};

const accessTokenVerify = (token, key) => {
  try {
    const value = jwt.verify(token, key);
    const user = {
      id: value.id,
      username: value.email,
    };
    const newAT = jwt.sign(user, key, { expiresIn: JWT_AT_ET });
    return { status: "success", message: value, newToken: newAT };
  } catch (error) {
    return { status: "error", message: { error: "token expired" } };
  }
};

const refreshTokenVerify = async (token, key, atKey) => {
  try {
    //Chenges
    const user = await User.findOne({ refreshToken: token });
    if (user) {
      const value = jwt.verify(token, key);
      console.log(user);
      if (value.id === user.id) {
        const user = {
          id: value.id,
          username: value.email,
        };
        const newRT = jwt.sign(user, atKey, { expiresIn: JWT_AT_ET });
        return { status: "success", message: value, newToken: newRT };
      } else {
        
        return { status: "error", message: "Not valid token" };
      }
    } else {
      console.log("s")
      return { status: "error", message: "Not valid token" };
    }
  } catch (error) {
    return { status: "error", message: { error: "token expired" } };
  }
};

module.exports = auth;
