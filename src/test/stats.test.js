const request = require("supertest");
const app = require("../app");

describe("EatSmart Server", () => {
    it("Get the total number of diet plans of a given user", () => {
      return request(app)
        .post("/stats/alldietplans")
        .send({
          user_Id: "6360cf9f0ebc552ba5863f87",
        })
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the most occuring food items in the active diet plan of a given user", () => {
      return request(app)
        .post("/stats/maxcountfoodsinDP")
        .send({
          user_Id: "6360cf9f0ebc552ba5863f87",
        })
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the calory percentage given to each category of the food pyramid in the active diet plan of a given user", () => {
      return request(app)
        .post("/stats/calorypercentagebycateory")
        .send({
          user_Id: "6360cf9f0ebc552ba5863f87",
        })
        .expect(200);
    });
  });
  
  
  describe("EatSmart Server", () => {
    it("Get the calory percentage given to each category of the food pyramid in the active diet plan of a given INVALID user", () => {
      return request(app)
        .post("/stats/calorypercentagebycateory")
        .send({
          user_Id: "6367e0cefda7350721c9e969",
        })
        .expect(400);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of users in the system", () => {
      return request(app)
        .get("/stats/getcountofusers")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of diet plans generated by the system", () => {
      return request(app)
        .get("/stats/getcountofdiets")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of quizes taken by the users of the system", () => {
      return request(app)
        .get("/stats/getcountofdietplans")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of foods in the system", () => {
      return request(app)
        .get("/stats/getcountoffoods")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of users with an active diet plan in the system", () => {
      return request(app)
        .get("/stats/getcountofADPusers")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of users with an multiple diet plans in the system", () => {
      return request(app)
        .get("/stats/getcountofMDPusers")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of total number of foods in each category according to the food pyramid in the system", () => {
      return request(app)
        .get("/stats/countfoodbycateory")
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the count of most preffered foods by all users of the system", () => {
      return request(app)
        .get("/stats/mostprefferedfoods")
        .expect(200);
    });
  });
  