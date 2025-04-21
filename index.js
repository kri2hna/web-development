import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/database/db.js";


const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/register",(req,res) =>{
    res.send(`registration page`);
});




const server = async () => {
    try{
        await connectDb();
        app.listen(port,() => {
            console.log(`server started at port ${port}`);
        });
    }
    catch(err){
        console.log(`Server not started`);
    }
};

server();