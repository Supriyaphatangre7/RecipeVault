import {z} from "zod"

export const loginSchema=z.object({
    email:z.string({required_error:"email is required"}).trim().email({message:"invalid email"}).min(3,{message:"email atleast 3 characters"}).max(255,{message:"email must not more than 255 character"}),
    password:z.string({required_error:"password is required"}).trim().min(3,{message:"password  must be altleast 3 character"}).max(255,{message:"password must not more than 255 character"}),
});

export const signupSchema=loginSchema.extend({
    username:z.string({required_error:"Name is required"}).trim().min(3,{message:"Name  must be altleast 3 character"}).max(255,{message:"Name must not more than 255 character"}),
});


export default{loginSchema,signupSchema}

