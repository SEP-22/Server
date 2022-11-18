const request = require("supertest");
const app = require("../app");


describe("EatSmart Server", () => {
    it("GetAllFoods", () => {
      return request(app).get("/food/allfoods").expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("GetFoodbyCateory", () => {
      return request(app).get("/food/foodbycategory").expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("GetFoodsforBloodPressue", () => {
      return request(app).get("/food/foodforbloodpressure").expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("GetFoodsforDiabetics", () => {
      return request(app).get("/food/foodfordiabetics").expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("GetFoodsforCholesterol", () => {
      return request(app).get("/food/foodforcholesterol").expect(200);
    });
  });
  
  describe("EatSmart Server", () => {
    it("GetFoodsbyID", () => {
      return request(app)
        .get("/food/foodById/63358224b5a5faef42bbc199")
        .expect(200);
    });
  });
  
  // describe("EatSmart Server", () => {
  //   it("AddNewFood", () => {
  //     return request(app)
  //       .post("/food/newFood")
  //       .send({
  //         name: "Carrots",
  //         cal_per_gram: 0.0035,
  //         diabetics: false,
  //         cholesterol: false,
  //         bloodpressure: true,
  //         category: "Vegetables",
  //         protein: 0,
  //         fat: 0,
  //         fiber: 6,
  //         carbs: 1,
  //         image: "/src/assets/images/foods/carrot.jpg",
  //       })
  //       .expect(200);
  //   });
  // });
  
  // describe("EatSmart Server", () => {
  //   it("EditFood", () => {
  //     return request(app)
  //       .patch("/food/editFood/6367e0901a9c7ed65930c81f")
  //       .send({
  //         fat: 10,
  //       })
  //       .expect(200);
  //   });
  // });
  
  // describe("EatSmart Server", () => {
  //   it("DeleteFood", () => {
  //     return request(app)
  //       .delete("/food/deleteFood/6367e0cefda7350721c9e969")
  //       .expect(200);
  //   });
  // });
  
  describe("EatSmart Server", () => {
    it("Edit Food which is not available", () => {
      return request(app)
        .patch("/food/editFood/6367e0901a9c7ed65930c81f")
        .send({
          fat: 10,
        })
        .expect(400);
    });
  });
  
  describe("EatSmart Server", () => {
    it("Delet eFood which is not available", () => {
      return request(app)
        .delete("/food/deleteFood/6367e0cefda7350721c9e969")
        .expect(400);
    });
  });