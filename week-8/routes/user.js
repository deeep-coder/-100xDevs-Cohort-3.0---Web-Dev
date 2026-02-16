const { Router } =require('express');
const userRouter=Router();

userRouter.post("/signup",(req,res)=>{
    res.json({
        message: "Signup endpoint"
    })
})

userRouter.post("/signin",(req,res)=>{
    res.json({
        message: "Signin endpoint"
    })
})

userRouter.post("/purchases",(req,res)=>{
    res.json({
        message: "purchase endpoint"
    })
})

module.exports = {
    userRouter:userRouter
  };