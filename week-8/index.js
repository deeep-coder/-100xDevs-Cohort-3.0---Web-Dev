const express =require("express");
const mongoose =require("mongoose");
const app=express();
const port =3300;

const {userRouter} = require("./routes/user");
const {courseRouter}= require("./routes/course");
const {adminRouter} = require("./routes/admin");




app.use("/api/v1/user",userRouter);  // routing 
app.use("api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://deepdetrojawork_db_user:Zy5CzBKrhLwcVhAK@cluster0.5ts2cbc.mongodb.net/course-selling")

    app.listen(port,()=>{
        console.log(`Example app is running on port ${port}`)
    });
}

main();



