const request = require("supertest");
const app = require("./app");

describe("EatSmart Server", () => {
  it("signUp", () => {
    return request(app)
      .post("/user/signUp")
      .send({
        name: "kivydecilu@mailinator.com",
        email: "testzzz@gmail.com",
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

describe("EatSmart Server", () => {
  it("AddNewFood", () => {
    return request(app)
      .post("/food/newFood")
      .send({
        name: "Carrots",
        cal_per_gram: 0.0035,
        diabetics: false,
        cholesterol: false,
        bloodpressure: true,
        category: "Fruits and Vegetables",
        protein: 0,
        fat: 0,
        fiber: 6,
        carbs: 1,
        image: "/src/assets/images/foods/apple.jpg"
})
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("EditFood", () => {
    return request(app)
      .patch("/food/editFood/6367e0901a9c7ed65930c81f")
      .send({
        fat: 10,
})
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("DeleteFood", () => {
    return request(app)
      .delete("/food/deleteFood/6367e0cefda7350721c9e969")
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
          name: "Admin123"
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
        phone: "0712223332"
    })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("EditEmailNumber", () => {
    return request(app)
      .post("/user/editEmail")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        email: "gihello12@gmail.com"
    })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("EditPasswordNumber", () => {
    return request(app)
      .post("/user/editPassword")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        password: "gihellffodcom"
    })
      .expect(200);
  });
});


describe("EatSmart Server", () => {
  it("GetDietPlanbyID", () => {
    return request(app).get("/dietPlan/63526d0b8dceb61e22b1da5e").expect(200);
  });
});

describe("EatSmart Server", () => {
  it("SaveDietPlanInputs", () => {
    return request(app)
      .post("/dietPlan/quiz")
      .send({
        user_Id: "6333e004e19aa18ac6e06aec",
        dob: "2002-09-28",
        gender: "male",
        activity: "moderate",
        intention: "maintain",
        height: 140,
        weight: 50,
        diabetics: 1,
        cholesterol: 1,
        bloodpressure: 1,
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GenerateDietPlan", () => {
    return request(app)
      .post("/dietPlan/generatedietplan")
      .send({
        dietPlan_Id: "63526d0b8dceb61e22b1da5e",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("SaveDietPlans", () => {
    return request(app)
      .post("/dietPlan/savedietplan")
      .send({
        plans: [
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 0,
            breakfast: [
              [
                "63358224b5a5faef42bbc199",
                "200.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/752_highres.jpg",
                "Potato",
              ],
              [
                "63358976b5a5faef42bbc330",
                "120.0 cal",
                "154 g",
                "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
                "Rice",
              ],
              [
                "633594ebb5a5faef42bbc34c",
                "50.0 cal",
                "103 g",
                "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
                "Chicken",
              ],
              [
                "633597b7b5a5faef42bbc384",
                "80.0 cal",
                "51 g",
                "https://balidirectstore.com/wp-content/uploads/2017/11/yoghurt-bali-alm-bali-direct-store-480.jpg",
                "Yogurt",
              ],
            ],
            lunch: [
              [
                "63358224b5a5faef42bbc199",
                "260.0 cal",
                "239 g",
                "https://nix-tag-images.s3.amazonaws.com/752_highres.jpg",
                "Potato",
              ],
              [
                "63358976b5a5faef42bbc330",
                "160.0 cal",
                "205 g",
                "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
                "Rice",
              ],
              [
                "633595c8b5a5faef42bbc35a",
                "110.0 cal",
                "137 g",
                "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
                "Fish",
              ],
              [
                "633597b7b5a5faef42bbc384",
                "110.0 cal",
                "68 g",
                "https://balidirectstore.com/wp-content/uploads/2017/11/yoghurt-bali-alm-bali-direct-store-480.jpg",
                "Yogurt",
              ],
            ],
            dinner: [
              [
                "63358224b5a5faef42bbc199",
                "200.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/752_highres.jpg",
                "Potato",
              ],
              [
                "6335946ab5a5faef42bbc33e",
                "60.0 cal",
                "154 g",
                "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
                "Bread",
              ],
              [
                "633595c8b5a5faef42bbc35a",
                "80.0 cal",
                "103 g",
                "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
                "Fish",
              ],
            ],
          },
        ],
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("CreateShoppingList", () => {
    return request(app)
      .post("/shoppingList/createsl")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        dietPlanId: "63526d0b8dceb61e22b1da5e",
        foodList: [
            {
                "foodId": "63358224b5a5faef42bbc199",
                "amount": 500
            },
            {
                "foodId": "633587c1b5a5faef42bbc306",
                "amount": 200
            },
            {
                "foodId": "63358976b5a5faef42bbc330",
                "amount": 2000
            },
            {
                "foodId": "633594ebb5a5faef42bbc34c",
                "amount": 500
            },
            {
                "foodId": "633583a2b5a5faef42bbc1c1",
                "amount": 100}]
    })
      .expect(200);
  });
});


describe("EatSmart Server", () => {
  it("GetShoppingList", () => {
    return request(app)
      .get("/shoppingList/getShoppingList")
      .expect(200);
  });
});
