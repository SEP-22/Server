const request = require("supertest");
const app = require("../app");

// describe("EatSmart Server", () => {
//   it("signUp", () => {
//     return request(app)
//       .post("/user/signUp")
//       .send({
//         name: "kivydecilu@mailinator.com",
//         email: "testzzz@gmail.com",
//         phone: "+1 (164) 737-4739",
//         password: "Pa$$w0rd!",
//         role: "user",
//       })
//       .expect(201);
//   });
// });

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
  it("CheckActiveDietPlan", () => {
    return request(app)
      .post("/user/activeplan")
      .send({
        user_Id: "633601573507a646fb339d94",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("UpdateActiveDietPlan", () => {
    return request(app)
      .post("/user/updateactiveplan")
      .send({
        user_Id: "633601573507a646fb339d94",
        activeDietPlan: "63526d0b8dceb61e22b1da5e",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GetPreferredFoods", () => {
    return request(app)
      .post("/user/getpreferedfoods")
      .send({
        user_Id: "633601573507a646fb339d94",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get Preferred Foods for a user id which is not available", () => {
    return request(app)
      .post("/user/getpreferedfoods")
      .send({
        user_Id: "6367e0cefda7350721c9e969",
      })
      .expect(400);
  });
});

describe("EatSmart Server", () => {
  it("SetPreferredFoods", () => {
    return request(app)
      .post("/user/preferedfoods")
      .send({
        user_Id: "633601573507a646fb339d94",
        foods: [
          "63358224b5a5faef42bbc199",
          "633587c1b5a5faef42bbc306",
          "63358976b5a5faef42bbc330",
          "6335946ab5a5faef42bbc33e",
          "633594ebb5a5faef42bbc34c",
          "633595c8b5a5faef42bbc35a",
        ],
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GetUserbyID", () => {
    return request(app)
      .get("/user/single/633601573507a646fb339d94")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GetUserProfilebyID", () => {
    return request(app)
      .get("/user/profileDetails/633601573507a646fb339d94")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("EditUserName", () => {
    return request(app)
      .post("/user/editName")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        name: "Admin123",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("EditPhoneNumber", () => {
    return request(app)
      .post("/user/editName")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        phone: "0712223332",
      })
      .expect(200);
  });
});

// describe("EatSmart Server", () => {
//   it("EditEmail", () => {
//     return request(app)
//       .post("/user/editEmail")
//       .send({
//         userId: "6335d3657e7aaea82d5e3650",
//         email: "gihello12@gmail.com",
//       })
//       .expect(200);
//   });
// });

describe("EatSmart Server", () => {
  it("EditPasswordNumber", () => {
    return request(app)
      .post("/user/editPassword")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        password: "gihellffodcom",
      })
      .expect(200);
  });
});









