const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const tempShoppingListSchema = new mongoose.Schema(
    {
        dietPlanId: {
            type: ObjectId,
            required: true,
            ref: "DietPlan"
        },
        foodList:[
            {
                type:Array,
                required:true,
            },
        ],
    },
    {timestamps:true}
);

module.exports = mongoose.model("TempShoppingList", tempShoppingListSchema);