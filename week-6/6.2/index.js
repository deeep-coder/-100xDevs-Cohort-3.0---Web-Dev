const express =require("express");
const jwt =require("jsonwebtoken");
const app=express();

const JWT_SECRET="Deep2505"; // this password is used to varify the username but for decoding anyone can decode without JWT_SECRET


app.use(express.json());


const users=[];

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.passwaord;

    users.push({
        username:username,
        password:password
    });

    res.json({
        message : "You are signedup !"
    })
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.passwaord;
    
    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].passwaord===password){
            foundUser=users[i];
        }
    }
    if(!foundUser){
        res.json({
            message : "credential invalid"
        })
        
    }
    else{
         const token =jwt.sign({
            username
         },JWT_SECRET);

        res.json({
            token: token
        })
    }
})


function auth(req,res,next){
    const token =req.header.token;
    const decodedData=jwt.verify(token,JWT_SECRET);

    if (decodedData.username){
        req.username=decodedData.username;
        next();
    }
    else{
        res.json({
            message :"You are not logged in"
        })
    }
}


 
app.get("/me",auth,(req,res)=>{

    
        let foundUser=null;
        for(let i=0;i<users.length;i++){
            if(users[i].username===req.username ){
                foundUser=users[i];
            }
        }
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })

})

app.listen(4400);