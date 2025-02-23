import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongodbURI)
        console.log("database connection successful ");
    } catch (error) {
        console.error("database connection fail");
        console.log(error)
        process.exit(0);

    }
}

export default connectDB;