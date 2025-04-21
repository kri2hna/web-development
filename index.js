import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/database/db.js";
import { userRoute } from "./src/routes/user.routes.js";
import { courseRoute } from "./src/routes/courses.routes.js";


const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.post("/api/v1/user",userRoute);
app.post("/api/v1/courses",courseRoute);




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