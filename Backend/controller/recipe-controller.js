import Recipe from "../models/recipe-model.js";


export const recipe = async (req, res) => {
    try {
      const { category } = req.query;
      const filter = {};
  
      if (category) {
        filter.category = { $regex: new RegExp(category, 'i') };
      }
  
      const recipes = await Recipe.find(filter);
      
      res.status(200).json({ 
        success: true,
        data: recipes
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
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


export const uploadrecipe = async (req, res) => {
  try {
    const { title, ingredients, steps, category ,notes} = req.body;
    const parsedIngredients = JSON.parse(ingredients);
    const parsedSteps = JSON.parse(steps);

    // Case-insensitive duplicate check
    const recipeExist = await Recipe.findOne({ 
      title: { $regex: new RegExp(`^${title}$`, 'i') } 
    });

    if(recipeExist) {
      return res.status(400).json({ message: "Recipe already exists" });
    }

    // Convert image to base64
    const imageBase64 = req.file ? 
      `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}` : 
      null;

    const recipeCreated = await Recipe.create({
      title,
      image: imageBase64,
      ingredients: parsedIngredients,
      steps: parsedSteps,
      category,
      notes,
    });

    return res.status(201).json({
      message: "Recipe created successfully",
      data: recipeCreated
    });

  } catch (error) {
    console.error("Upload Error:", error);
    return res.status(500).json({ 
      message: error.message || "Error uploading recipe"
    });
  }
};

export default {recipe,getRecipeById,uploadrecipe};