const request = require("supertest");
const app = require("../app");

describe("EatSmart Server", () => {
  it("CreateShoppingList", () => {
    return request(app)
      .post("/shoppingList/createsl")
      .send({
        userId: "6335d3657e7aaea82d5e3650",
        dietPlanId: "63526d0b8dceb61e22b1da5e",
        foodList: [
          {
            foodId: "63358224b5a5faef42bbc199",
            amount: 500,
          },
          {
            foodId: "633587c1b5a5faef42bbc306",
            amount: 200,
          },
          {
            foodId: "63358976b5a5faef42bbc330",
            amount: 2000,
          },
          {
            foodId: "633594ebb5a5faef42bbc34c",
            amount: 500,
          },
          {
            foodId: "633583a2b5a5faef42bbc1c1",
            amount: 100,
          },
        ],
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("GetShoppingList", () => {
    return request(app).get("/shoppingList/getShoppingList").expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Create Temporary ShoppingList", () => {
    return request(app)
      .post("/shoppingList/createTempSL")
      .send({
        dietPlanId: "636ccb15486e8c1f72168b59",
        foodList: [
          [
            "Potato",
            1198,
            1320,
            "https://nix-tag-images.s3.amazonaws.com/752_highres.jpg",
          ],
          [
            "Rice",
            1898,
            1480,
            "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
          ],
          [
            "Chicken",
            926,
            430,
            "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
          ],
          [
            "Yogurt",
            238,
            380,
            "https://balidirectstore.com/wp-content/uploads/2017/11/yoghurt-bali-alm-bali-direct-store-480.jpg",
          ],
          [
            "Fish",
            1475,
            1160,
            "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
          ],
          [
            "Bread",
            1693,
            660,
            "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
          ],
          [
            "Beet",
            1198,
            2720,
            "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
          ],
          [
            "Butter",
            238,
            40,
            "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
          ],
          [
            "Carrot",
            1198,
            3400,
            "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
          ],
          [
            "Ice Cream",
            357,
            150,
            "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
          ],
          [
            "Apple",
            599,
            1160,
            "https://nix-tag-images.s3.amazonaws.com/384_highres.jpg",
          ],
        ],
      })
      .expect(200);
  });
});

describe("EatSmart Server", () => {
  it("Create and Save the ShoppingList", () => {
    return request(app)
      .post("/shoppingList/createAndSaveShoppingList")
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
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 1,
            breakfast: [
              [
                "633588cab5a5faef42bbc322",
                "410.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
                "Beet",
              ],
              [
                "6335946ab5a5faef42bbc33e",
                "60.0 cal",
                "154 g",
                "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
                "Bread",
              ],
              [
                "633594ebb5a5faef42bbc34c",
                "50.0 cal",
                "103 g",
                "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
                "Chicken",
              ],
              [
                "633596fcb5a5faef42bbc376",
                "10.0 cal",
                "51 g",
                "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
                "Butter",
              ],
            ],
            lunch: [
              [
                "633588cab5a5faef42bbc322",
                "540.0 cal",
                "239 g",
                "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
                "Beet",
              ],
              [
                "6335946ab5a5faef42bbc33e",
                "80.0 cal",
                "205 g",
                "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
                "Bread",
              ],
              [
                "633595c8b5a5faef42bbc35a",
                "110.0 cal",
                "137 g",
                "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
                "Fish",
              ],
              [
                "633596fcb5a5faef42bbc376",
                "10.0 cal",
                "68 g",
                "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
                "Butter",
              ],
            ],
            dinner: [
              [
                "633588cab5a5faef42bbc322",
                "410.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
                "Beet",
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
            ],
          },
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 2,
            breakfast: [
              [
                "635fd2ad9d05c7f5b1e6690a",
                "510.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
                "Carrot",
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
              [
                "63359847b5a5faef42bbc392",
                "20.0 cal",
                "51 g",
                "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
                "Ice Cream",
              ],
            ],
            lunch: [
              [
                "635fd2ad9d05c7f5b1e6690a",
                "680.0 cal",
                "239 g",
                "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
                "Carrot",
              ],
              [
                "6335946ab5a5faef42bbc33e",
                "80.0 cal",
                "205 g",
                "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
                "Bread",
              ],
              [
                "633594ebb5a5faef42bbc34c",
                "60.0 cal",
                "137 g",
                "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
                "Chicken",
              ],
              [
                "63359847b5a5faef42bbc392",
                "30.0 cal",
                "68 g",
                "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
                "Ice Cream",
              ],
            ],
            dinner: [
              [
                "635fd2ad9d05c7f5b1e6690a",
                "510.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
                "Carrot",
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
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 3,
            breakfast: [
              [
                "635fd2ad9d05c7f5b1e6690a",
                "510.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
                "Carrot",
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
              [
                "63359847b5a5faef42bbc392",
                "20.0 cal",
                "51 g",
                "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
                "Ice Cream",
              ],
            ],
            lunch: [
              [
                "635fd2ad9d05c7f5b1e6690a",
                "680.0 cal",
                "239 g",
                "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
                "Carrot",
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
                "63359847b5a5faef42bbc392",
                "30.0 cal",
                "68 g",
                "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
                "Ice Cream",
              ],
            ],
            dinner: [
              [
                "635fd2ad9d05c7f5b1e6690a",
                "510.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/452_highres.jpg",
                "Carrot",
              ],
              [
                "63358976b5a5faef42bbc330",
                "120.0 cal",
                "154 g",
                "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
                "Rice",
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
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 4,
            breakfast: [
              [
                "633587c1b5a5faef42bbc306",
                "350.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/384_highres.jpg",
                "Apple",
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
                "633587c1b5a5faef42bbc306",
                "460.0 cal",
                "239 g",
                "https://nix-tag-images.s3.amazonaws.com/384_highres.jpg",
                "Apple",
              ],
              [
                "6335946ab5a5faef42bbc33e",
                "80.0 cal",
                "205 g",
                "https://www.hi5mart.com/image/cache/catalog/bakery%20and%20snacks/Others/sliced%20white%20bread-750x750.jpg",
                "Bread",
              ],
              [
                "633594ebb5a5faef42bbc34c",
                "60.0 cal",
                "137 g",
                "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
                "Chicken",
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
                "633587c1b5a5faef42bbc306",
                "350.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/384_highres.jpg",
                "Apple",
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
            ],
          },
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 5,
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
                "633595c8b5a5faef42bbc35a",
                "80.0 cal",
                "103 g",
                "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
                "Fish",
              ],
              [
                "633596fcb5a5faef42bbc376",
                "10.0 cal",
                "51 g",
                "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
                "Butter",
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
                "633596fcb5a5faef42bbc376",
                "10.0 cal",
                "68 g",
                "https://cdn.shopify.com/s/files/1/0364/8831/5011/products/butter_1000x1000.jpg?v=1591197119",
                "Butter",
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
                "633594ebb5a5faef42bbc34c",
                "50.0 cal",
                "103 g",
                "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
                "Chicken",
              ],
            ],
          },
          {
            dietPlan_Id: "63526d0b8dceb61e22b1da5e",
            id: 6,
            breakfast: [
              [
                "633588cab5a5faef42bbc322",
                "410.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
                "Beet",
              ],
              [
                "63358976b5a5faef42bbc330",
                "120.0 cal",
                "154 g",
                "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
                "Rice",
              ],
              [
                "633595c8b5a5faef42bbc35a",
                "80.0 cal",
                "103 g",
                "https://nix-tag-images.s3.amazonaws.com/10_highres.jpg",
                "Fish",
              ],
              [
                "63359847b5a5faef42bbc392",
                "20.0 cal",
                "51 g",
                "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
                "Ice Cream",
              ],
            ],
            lunch: [
              [
                "633588cab5a5faef42bbc322",
                "540.0 cal",
                "239 g",
                "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
                "Beet",
              ],
              [
                "63358976b5a5faef42bbc330",
                "160.0 cal",
                "205 g",
                "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
                "Rice",
              ],
              [
                "633594ebb5a5faef42bbc34c",
                "60.0 cal",
                "137 g",
                "https://nix-tag-images.s3.amazonaws.com/9_highres.jpg",
                "Chicken",
              ],
              [
                "63359847b5a5faef42bbc392",
                "30.0 cal",
                "68 g",
                "https://media.istockphoto.com/photos/vanilla-frozen-yogurt-in-takeaway-cup-picture-id497905280?k=20&m=497905280&s=612x612&w=0&h=ibIiTLCs41Cof2kAgovkevAumyUHYmc48j2WhWYbkaY=",
                "Ice Cream",
              ],
            ],
            dinner: [
              [
                "633588cab5a5faef42bbc322",
                "410.0 cal",
                "180 g",
                "https://nix-tag-images.s3.amazonaws.com/9323_highres.jpg",
                "Beet",
              ],
              [
                "63358976b5a5faef42bbc330",
                "120.0 cal",
                "154 g",
                "https://nix-tag-images.s3.amazonaws.com/784_highres.jpg",
                "Rice",
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
  it("Get Shopping List from a given user ID", () => {
    return request(app)
      .get("/shoppingList/getShoppingListsFromUserId/6360cf9f0ebc552ba5863f87")
      .expect(200);
  });
});
