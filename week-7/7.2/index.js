const express = require("express")
const { UserModel, TodoModel } = require("./db");

const JWT_SECRET = "s3cret";

const app =express();

app.use(express.json());

app.post("/signup",async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

   await UserModel.create({
    email: email,
    password: password,
    name: name
    });

    res.json({
       message: "You are signed up"
    })


})

app.post("/signin",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        })

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
})

app.post("/me",async(req,res)=>{
 consy
})

app.listen(4000);

