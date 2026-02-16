const { Router } =require('express');

const userRouter=Router();

userRouter.post("/signup",(req,res)=>{
    res.json("")
})

userRouter.post("/signin",(req,res)=>{
    res.json("")
})

userRouter.post("/purchases",(req,res)=>{
    res.json("")
})

module.exports = {
  userRouter:userRouter
}
