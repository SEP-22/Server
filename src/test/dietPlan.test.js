const request = require("supertest");
const app = require("../app");

describe("EatSmart Server", () => {
  it("GetDietPlanbyID", () => {
    return request(app).get("/dietPlan/636fb007f6f9dcff5221676c").expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Try to get a diet plan giving an invalid ID", () => {
    return request(app).get("/dietPlan/6335946ab5a5faef42bbc33e").expect(404);
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
        name: "AppTesting",
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GenerateDietPlan", () => {
    return request(app)
      .post("/dietPlan/generatedietplan")
      .send({
        dietPlan_Id: "63713faff5bc4e00c2e0cc94",
      })
      .expect(200);
  }, 20000);
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
  it("Get all DietPlans", () => {
    return request(app).get("/dietPlan/getplans/getDietPlans").expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get diet plans by user ID", () => {
    return request(app)
      .get("/dietPlan/getUserDietPlans/6360cf9f0ebc552ba5863f87")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get diet plans by user giving an INVALID ID", () => {
    return request(app)
      .get("/dietPlan/getUserDietPlans/6335946ab5a5faef42bbc33e")
      .expect(404);
  });
});

describe("EatSmart Server", () => {
  it("Get non active diet plans by user ID", () => {
    return request(app)
      .get("/dietPlan/getuserplans/nonactive/6360cf9f0ebc552ba5863f87")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get active diet plans by user ID", () => {
    return request(app)
      .get("/dietPlan/getuserplans/active/6360cf9f0ebc552ba5863f87")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get weekly active diet plan by user ID", () => {
    return request(app)
      .get("/dietPlan/getWeeklyDietPlan/active/6360cf9f0ebc552ba5863f87")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get weekly non active diet plan by user ID", () => {
    return request(app)
      .get("/dietPlan/getWeeklyDietPlan/nonactive/63713faff5bc4e00c2e0cc94")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get all names of all diet plans and their status of active or non active by Diet Plan ID", () => {
    return request(app)
      .get("/dietPlan/getAllPlanNamesAndStateByUserId/63713faff5bc4e00c2e0cc94")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Get weekly diet plan by Diet Plan ID", () => {
    return request(app)
      .get("/dietPlan/getWeeklyDietPlanById/63713faff5bc4e00c2e0cc94")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Delete a diet Plan", () => {
    return request(app)
      .delete("/dietPlan/deleteDietPlan/6370842b68d1fc41027cbd07")
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Update details of the active diet plan", () => {
    return request(app)
      .post("/dietPlan/updateactiveplan/636e0e799667497b2a0f4426")
      .send(
        {
          dob: "2000-4-13",
          gender: "female",
          activity: "verylight",
          intention: "gain",
          height: "151",
          weight: "44",
          diabetics: 0,
          cholesterol: 1,
          bloodpressure: 0,
          name: "Sisters Plan"
        }
      )
      .expect(200);
  });
});

//ERRORRRRRR

// describe("EatSmart Server", () => {
//   it("Generate shopping list from diet plan", () => {
//     return request(app)
//       .post("/dietPlan/generateShoppingList")
//       .send(
//         {
//           plans : [
//             {
//                 "_id": "636cdea3b9d10f522e4d62dc",
//                 "dietPlan_Id": "636cde9ab9d10f522e4d62d6",
//                 "breakfast": [
//                     [
//                         "635fd2ad9d05c7f5b1e6690a",
//                         "780.0 cal",
//                         "275 g",
//                         "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
//                         "Carrot"
//                     ],
//                     [
//                         "63358976b5a5faef42bbc330",
//                         "180.0 cal",
//                         "235 g",
//                         "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
//                         "Rice"
//                     ],
//                     [
//                         "633595c8b5a5faef42bbc35a",
//                         "120.0 cal",
//                         "157 g",
//                         "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
//                         "Fish"
//                     ],
//                     [
//                         "633596fcb5a5faef42bbc376",
//                         "10.0 cal",
//                         "78 g",
//                         "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
//                         "Butter"
//                     ],
//                     [
//                         "633583a2b5a5faef42bbc1c1",
//                         "10.0 cal",
//                         "39 g",
//                         "https://nix-tag-images.s3.amazonaws.com/268_highres.jpg",
//                         "Chocolate"
//                     ]
//                 ],
//                 "lunch": [
//                     [
//                         "6367df1277fc7561fa9845a8",
//                         "104.0 cal",
//                         "366 g",
//                         "/src/assets/images/foods/apple.jpg",
//                         "Carrot"
//                     ],
//                     [
//                         "6335946ab5a5faef42bbc33e",
//                         "120.0 cal",
//                         "314 g",
//                         "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
//                         "Bread"
//                     ],
//                     [
//                         "633594ebb5a5faef42bbc34c",
//                         "100.0 cal",
//                         "209 g",
//                         "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
//                         "Chicken"
//                     ],
//                     [
//                         "633596fcb5a5faef42bbc376",
//                         "10.0 cal",
//                         "105 g",
//                         "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
//                         "Butter"
//                     ],
//                     [
//                         "63673cd00e801c1015f8e759",
//                         "20.0 cal",
//                         "52 g",
//                         "https://img.freepik.com/premium-photo/strawberry-jam-glass-jar-berry-strawberry-isolated-white-background_423299-1202.jpg?w=2000",
//                         "Jam"
//                     ]
//                 ],
//                 "dinner": [
//                     [
//                         "6367dee1a8ea64053e719ea8",
//                         "785.0 cal",
//                         "275 g",
//                         "/src/assets/images/foods/apple.jpg",
//                         "Carrot"
//                     ],
//                     [
//                         "63358976b5a5faef42bbc330",
//                         "180.0 cal",
//                         "235 g",
//                         "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
//                         "Rice"
//                     ],
//                     [
//                         "633594ebb5a5faef42bbc34c",
//                         "70.0 cal",
//                         "157 g",
//                         "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
//                         "Chicken"
//                     ],
//                     [
//                         "633596fcb5a5faef42bbc376",
//                         "10.0 cal",
//                         "78 g",
//                         "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
//                         "Butter"
//                     ]
//                 ],
//                 "__v": 0,
//                 "createdAt": "2022-11-10T11:21:07.791Z",
//                 "updatedAt": "2022-11-10T11:21:07.791Z"
//             },
//             {
//                 "_id": "636cdea3b9d10f522e4d62dc",
//                 "dietPlan_Id": "636cde9ab9d10f522e4d62d6",
//                 "breakfast": [
//                     [
//                         "635fd2ad9d05c7f5b1e6690a",
//                         "781.0 cal",
//                         "275 g",
//                         "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
//                         "Carrot"
//                     ],
//                     [
//                         "63358976b5a5faef42bbc330",
//                         "180.0 cal",
//                         "235 g",
//                         "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
//                         "Rice"
//                     ],
//                     [
//                         "633595c8b5a5faef42bbc35a",
//                         "120.0 cal",
//                         "157 g",
//                         "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
//                         "Fish"
//                     ],
//                     [
//                         "633596fcb5a5faef42bbc376",
//                         "10.0 cal",
//                         "78 g",
//                         "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
//                         "Butter"
//                     ],
//                     [
//                         "633583a2b5a5faef42bbc1c1",
//                         "10.0 cal",
//                         "39 g",
//                         "https://nix-tag-images.s3.amazonaws.com/268_highres.jpg",
//                         "Chocolate"
//                     ]
//                 ],
//                 "lunch": [
//                     [
//                         "6367df1277fc7561fa9845a8",
//                         "104.0 cal",
//                         "366 g",
//                         "/src/assets/images/foods/apple.jpg",
//                         "Carrot"
//                     ],
//                     [
//                         "6335946ab5a5faef42bbc33e",
//                         "120.0 cal",
//                         "314 g",
//                         "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
//                         "Bread"
//                     ],
//                     [
//                         "633594ebb5a5faef42bbc34c",
//                         "100.0 cal",
//                         "209 g",
//                         "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
//                         "Chicken"
//                     ],
//                     [
//                         "633596fcb5a5faef42bbc376",
//                         "10.0 cal",
//                         "105 g",
//                         "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
//                         "Butter"
//                     ],
//                     [
//                         "63673cd00e801c1015f8e759",
//                         "20.0 cal",
//                         "52 g",
//                         "https://img.freepik.com/premium-photo/strawberry-jam-glass-jar-berry-strawberry-isolated-white-background_423299-1202.jpg?w=2000",
//                         "Jam"
//                     ]
//                 ],
//                 "dinner": [
//                     [
//                         "6367dee1a8ea64053e719ea8",
//                         "785.0 cal",
//                         "275 g",
//                         "/src/assets/images/foods/apple.jpg",
//                         "Carrot"
//                     ],
//                     [
//                         "63358976b5a5faef42bbc330",
//                         "180.0 cal",
//                         "235 g",
//                         "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
//                         "Rice"
//                     ],
//                     [
//                         "633594ebb5a5faef42bbc34c",
//                         "70.0 cal",
//                         "157 g",
//                         "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
//                         "Chicken"
//                     ],
//                     [
//                         "633596fcb5a5faef42bbc376",
//                         "10.0 cal",
//                         "78 g",
//                         "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
//                         "Butter"
//                     ]
//                 ],
//                 "__v": 0,
//                 "createdAt": "2022-11-10T11:21:07.791Z",
//                 "updatedAt": "2022-11-10T11:21:07.791Z"}
//         ]
//         }
//       )
//       .expect(200);
//   });
// });
