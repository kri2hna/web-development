import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to Db`);
    }
    catch(err){
        console.log(`Failed to connect Db`,err);
    }
}

export default connectDb;