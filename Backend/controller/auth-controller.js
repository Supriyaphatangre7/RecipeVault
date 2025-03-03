import User from "../models/user-model.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Validation: Check if all required fields are present
      if (!username || !email || !password) {
        return res.status(422).json({ message: "All fields are required!" });
      }
  
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.status(200).json({ message: "Email already exists" });
      }
  
      const salt = 10;
      const hash = await bcrypt.hash(password, salt);
      const userCreated = await User.create({ username, email, password: hash });
  
      return res.status(200).json({
        message: "User registered successfully",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.log(error);
    }
  };
  

export const login=async(req,res)=>{
    try {
         const {email,password}=req.body;

         const userExist=await User.findOne({email:email})
         if(!userExist)
            {
                 return res.status(400).json({message:"Invalid Credentials!!!"});
            }

         const user=await bcrypt.compare(password,userExist.password);

         if(user)
         {
            res.status(200).json({ message: "user login successfully" ,token:await userExist.generateToken(),userId:userExist._id.toString()});
         }
   
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const user=async(req,res)=>{
    try {
        const userData = req.user;
      console.log(userData);
    return res.status(200).json({ message: userData });

    } catch (error) {
        console.log(`error from user route ${error}`);
    }
}

export default {register,login,user};