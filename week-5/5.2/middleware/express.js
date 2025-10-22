const express = require("express");



app.use(express.json())

app.post("/sum", function  sumHandler(req, res) {

    console.log(req.body);          //This will show output as UNDEFINED but jaise hi yeh external middleware use krenge then yeh body ka value  hum postman app pe jakr body mein add krenge toh woh dikhayega 

    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    
    res.json({
        ans: a+b
    });
});

app.listen(3000)



/*
Notes: 
When we know that  ki  user JSON data input dene wale hai then you have to parse the JSON data
This is done using - 
        i. app.use(express.json())      -- Yeh external middleware hai
        ii. body-parser                 -- Yeh library hai jo ki external middleware ka kaam krti hai
                 Syntax - 
                    const parser = require("body-parser")
                    app.use(parser.json())


         Note - Dono ka kaam ek hi hai.... express.json under the hood yeh body-parser library ko hi use krta


Usage: Example-
- Suppose we have created a post route instead of get aur uspe hmlg ko add krna hai two number so we cant provide the input in the url 
- So here solution is hmlog postman mein jyenge udhar se body mein json data add krenge because we all know https request hmlog jab bhi server mein bhejte hai toh we send some meta data in that too.. so hm input ispe bhej sakte hai 
- But problem yeh ayega ki json data ko parse nhi kr pyega jisse error ayega 
- So for this external middleware is used - app.use(express.json()) 
- Yeh express.json() json data ko parse krne pe help krega and phir we will not get any error. */