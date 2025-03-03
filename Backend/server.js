import express from "express"
import router from "./routers/auth-router.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv"
import cors from "cors"
import recipeRouter from "./routers/recipe-router.js"
import errorMiddleware from "./middleware/error-middleware.js";



dotenv.config();

const app=express();


const corsOptions={
   origin:"http://localhost:5173",
   methods:"GET ,POST,PUT,DELETE,PATCH,HEAD",
   credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(router);
app.use(recipeRouter);
app.use(errorMiddleware);
app.use(express.json({ 
    limit: '50mb',
    extended: true,
    parameterLimit: 100000
  }));
  app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 100000
  }));


const PORT=3000;

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`);
    });
});
  
  
  