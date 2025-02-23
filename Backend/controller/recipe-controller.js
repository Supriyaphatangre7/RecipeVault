import Recipe from "../models/recipe-model.js";


export const recipe=async(req,res)=>{
    try {
        const response=await Recipe.find();
        if(!response)
        {
            return res.status(200).json({message:"no recipe found"});
        }
        return res.status(200).json({message:" recipe found",data:response});
    } catch (error) {
        console.log(error);
        return res.status(500).json("internal server error"); 
    }
};


export const getRecipeById = async (req, res) => {
  try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
          return res.status(404).json({ message: "Recipe not found" });
      }
      res.status(200).json({ data: recipe });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
  }
};

export default {recipe,getRecipeById};