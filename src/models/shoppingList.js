const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const shoppingListSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            required: true,
        },
        dietPlanId: {
            type: ObjectId,
            required: true,
        },
        foodList: [{
            foodId: ObjectId,
            amount: Number,
        }],
    },
    {timestamps:true}
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);