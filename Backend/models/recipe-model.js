import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
   
    },
    ingredients: {
        type: [String],
        required: true
    },
    steps: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["breakfast", "vegan", "meat", "drinks-smoothies","dessert","snacks","lunch","soup"], 
        default: "other"
      },

      notes:{
        type:String,
      }
   
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;