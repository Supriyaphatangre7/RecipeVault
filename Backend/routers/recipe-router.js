import express from "express"
import { recipe, getRecipeById,  uploadrecipe } from "../controller/recipe-controller.js";
import multer from "multer";

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');  // Directory where the files will be stored
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);  // Create a unique suffix for the filename
//       cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);  // Combine fieldname, uniqueSuffix, and the original filename
//     }
//   });

  const storage=multer.memoryStorage();
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },  
  });

const router = express.Router();

router.route("/recipe").get(recipe).post(upload.single('image'), uploadrecipe);
router.route("/recipe/:id").get(getRecipeById);



export default router;