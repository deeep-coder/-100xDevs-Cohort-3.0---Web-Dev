const express=require("express");
const app = express();

// ##Types of 


// 1)Application-Level
//app.use(middleware)

// 2)Route-Level
// app.get('/route', middleware, handler);

// 3)Error-Handling
//app.use(err, req, res, next) => return error


function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;          
    if (age>=15){
        next();     
    }else{
        res.json({
            msg:"Sorry you are underage !"
        })
    }
}

app.use(isOldEnoughMiddleware);  // below this all request use middleware

app.get("/ride1", function(req, res) {
    res.json({
        msg: "Ride 1 booked successfully"
    })
});

app.get("/ride2", function(req, res) {
    res.json({
        msg: "Ride 2 booked successfully"
    })
});

app.listen(3000);