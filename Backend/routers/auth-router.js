import express from "express";
import {register,login,user} from "../controller/auth-controller.js";
import { loginSchema,signupSchema } from "../validator/auth-validator.js";
import validate from "../middleware/validate-middleware.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router=express.Router();

router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(validate(loginSchema),login);

router.route("/user").get(authMiddleware,user);

export default router;