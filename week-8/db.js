
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://deepdetrojawork_db_user:Zy5CzBKrhLwcVhAK@cluster0.5ts2cbc.mongodb.net/course-selling")


const ObjectId = mongoose.ObjectId;

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
  });

const courseSchema=new Schema({
    title:String,
    discription:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}