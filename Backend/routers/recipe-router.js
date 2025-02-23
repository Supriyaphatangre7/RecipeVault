import express from "express"
import { recipe, getRecipeById } from "../controller/recipe-controller.js";

const router = express.Router();

router.route("/recipe").get(recipe);
router.route("/recipe/:id").get(getRecipeById);

export default router;