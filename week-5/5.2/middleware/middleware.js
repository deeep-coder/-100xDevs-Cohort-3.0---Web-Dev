const express = require("express");

const app = express();

let reqCount = 0;

function reIncreaser(req, res,next){
    reqCount = reqCount + 1;
    console.log("Total no. of requests" +reqCount );
    next();             
    res.json({
        msg:"Error"        //else we have to add this to threo an error
     })
    
}

function  sumHandler(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a+b
    })
}
function  multiplyHandler(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a*b
    })
}

app.get("/sum",reIncreaser,sumHandler);        // here we use middleware     

app.get("/multiply",multiplyHandler);           // hrer we are not use middleware    

app.listen(3000);


/*
we can also write this code in easy syntax
    
        app.use(reIncreaser)
        app.get("/sum", sumHandler);
        app.get("/multiply", multiplyHandler);

    
         Jo bhi route is app.use ke upar hoga woh sb ke pass yeh middle ware ka access nhi hoga..so this order of writing app.use is very important & it should be kept in mind while writing this code.
*/

