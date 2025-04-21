import express from "express";


export const userRoute = express.Router();


userRoute.post("/signin",(req,res) => {
    res.send(`signIn page`);
});

userRoute.post("/login",(req,res) => {
    res.send(`login page`);
});

userRoute.post("/mypurchases",(req,res) => {
    res.send(`purchases page`);
});

userRoute.post("/logout",(req,res) => {
    res.send(`logout page`);
});