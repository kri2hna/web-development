import express from "express";


export const courseRoute = express.Router();


courseRoute.post("/courses",(req,res) => {
    res.send(`signIn page`);
});

courseRoute.post("/purchase",(req,res) => {
    res.send(`signIn page`);
});



