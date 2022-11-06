const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const shoppingListSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            required: true,
            ref: "User"
        },
        dietPlanId: {
            type: ObjectId,
            required: true,
            ref: "DietPlan"
        },
        foodList: [{
            foodId: {type: ObjectId, ref: 'Food'},
            amount: Number,
        }],
    },
    {timestamps:true}
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);