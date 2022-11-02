const mongoose = require("mongoose");

const shoppingListSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true,
        },
        dietPlanId: {
            type: Number,
            required: true,
        },
        foodList: [{
            foodId: Number,
            amount: Number,
        }],
    },
    {timestamps:true}
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);