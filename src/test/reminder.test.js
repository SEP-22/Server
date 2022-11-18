const request = require("supertest");
const app = require("../app");

describe("EatSmart Server", () => {
    it("Add default reminder for a user when a user id is given", () => {
      return request(app)
        .post("/reminder/newreminder")
        .send(
          {user_Id : "6335f2db21296ffe484e4da8"}
        )
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Update the breakfast reminder", () => {
      return request(app)
        .post("/reminder/updatebreakfast")
        .send(
          {
            _id: "6375e55d21f7c04a6b75cb3b",
            breakfastMinute:25,
            breakfastHour:7,
            breakfastOn:true
        }
        )
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Update the lunch reminder", () => {
      return request(app)
        .post("/reminder/updatelunch")
        .send(
          {
            _id: "6375e55d21f7c04a6b75cb3b",
            lunchMinute:33,
            lunchHour:14,
            lunchOn:true
        }
        )
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Update the dinner reminder", () => {
      return request(app)
        .post("/reminder/updatedinner")
        .send(
          {
            _id: "6375e55d21f7c04a6b75cb3b",
            dinnerMinute:51,
            dinnerHour:21,
            dinnerOn:true
        }
        )
        .expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Get the reminders of a given user", () => {
      return request(app)
        .post("/reminder/getreminder")
        .send(
          {user_Id : "633601573507a646fb339d94"}
        )
        .expect(200);
    });
  });
  