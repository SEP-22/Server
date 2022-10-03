const request = require("supertest");
const app = require("./app");

describe("EatSmart Server", () => {
  it("signIn", () => {
    return request(app)
      .post("/user/signUp")
      .send({
        name: "kivydecilu@mailinator.com",
        email: "jehlpoee@mailinator.com",
        phone: "+1 (164) 737-4739",
        password: "Pa$$w0rd!",
        role:"user"
      })
      .expect(201);
  });

  it("getFood", () => {
    return request(app)
      .get("/food/allfoods")
      .expect(200);
  });

});
