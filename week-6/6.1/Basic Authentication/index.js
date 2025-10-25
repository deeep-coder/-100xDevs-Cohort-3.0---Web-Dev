const express =require("express");

const app =express();


app.use(express.json());

const users =[];  //in memory variable or also known as empty global array for storing the username, password, token


function generateToken() {  //a function called generateToken that generates a random long string for token generation
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];  //idhar se woh ek random token create krega 32 bits k 
    }
    return token;
}


app.post("/signup",function(req,res){

    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"You are signed up"
    })
    
})

app.post("/signin",function(req,res){


    const username=req.body.username;
    const password=req.body.password;

    /*
    
    const foundUser=users.find(function(u){
        if(u.username==username && u.password==password){ //here we check if the user who hits the sign in port is already present in users array,with provided password ?
            // here u.username = users array ke andar ka username and username = name provided durig signin process 
            return true;
        }
        else{
            return false;
        }
    })
    */

    //we can write above function in easy syntax also 
    
    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i];
        }
    }
    if(foundUser){
        const token=generateToken();
        foundUser.token=token;  //foundUser array me latest token ko  username and password ke sath  store karenge 

        res.json({
            token: token
        })  
    }
    else{                                           //aur username ya password  found nahi  hua toh invalid bta dega
        res.status(403).send({
            message:"Invalid username or password"
        })
    }  
        
})


app.get("/me", function(req,res){               //Created an authenticated EndPoint which  returns the user information only if they send their token
    const token = req.headers.token              //Jo meta data mein hmlg kuch kuch cookies send krte hai wahi header ke andar hoga woh token bhi jyega 
    let foundUser = null;

    // Searches the users array for a user whose token matches the token from the request header. If a match found, that user object is stored in foundUser
    for (let i = 0; i < users.length; i++) {
        if(users[i].token == token){
            foundUser =users[i]
        }            
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message:"Token Invalid"
        })
    }

});
    


app.listen(3000);

/*
Notes:
- Phle postman mein jayenge udhar localhost:3000/signup mein post req se do teen input denge username password ka body mein json object ke andar..
- Phir localhost:3000/signin mein jaynge aur post req krke uspe post req pe jo input diye gye username password jo diye hai usse usko snd req krenge toh ek token milega 
- phir localhost:3000/me mein jaynge aur then headers pe jayenge aur add krenge token ko aur jo token generate kiye hue hai usko copy paste kr denge headers mein token mein aur req send krenge jisse woh jis bhi username oassword ka token hai woh mko output mein return krega 
*/