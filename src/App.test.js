const request = require("supertest");
const app = require("./app");

describe("EatSmart Server", () => {
  it("signUp", () => {
    return request(app)
      .post("/user/signUp")
      .send({
        name: "kivydecilu@mailinator.com",
        email: "testz@gmail.com",
        phone: "+1 (164) 737-4739",
        password: "Pa$$w0rd!",
        role:"user"
      })
      .expect(201);
  });

});

describe("EatSmart Server", () => {
  it("signIn", () => {
    return request(app)
      .post("/user/signIn")
      .send({
        username: "gimhanravi@gmail.com",
        password: "12345678",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GetAllFoods", () => {
    return request(app)
      .get("/food/allfoods")
      .expect(200);
  });
});
