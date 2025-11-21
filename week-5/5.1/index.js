// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. http://localhost:3000/sum?a=1&b=2
// 3. http://localhost:3000/divide?a=1&b=2
// 4. http://localhost:3000/subtract?a=1&b=2

// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)
// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)


const express = require("express");
const app = express();


const port = 3000;

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    res.json({
        ans : a*b
    })

})
app.get("/sum", function(req, res) {
    const a = paresInt(req.query.a);
    const b = paresInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    res.json({
        ans : a+b
    })

})
app.get("/divide", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    res.json({
        ans : a/b
    })

})

app.get("/substract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid query" })
    }
    res.json({
        ans : a-b
    })

})


app.listen(port, () => {
    console.log(`Server is listening at port:  ${port}`);

})

// <-----------------------------                     ----------------------------->


// Same code using dynamic parameters

/*
const express = require("express");

const expressapp = express();

expressapp.get("/sum/:a/:b", function(req, res) {          //dynamic parameters - means colon ke bad jo bhi hoga that will be the parameters 
    const a = parseInt(req.params.a)                //idhar query ke jagh param likhna pdega 
    const b = parseInt(req.params.b)
    res.json({
        ans: a+b
    })

});

expressapp.get("/multiply/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)           
    const b = parseInt(req.params.b)
    res.json({
        ans: a*b
    })
    
});

expressapp.get("/divide/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)    
    const b = parseInt(req.params.b)
    res.json({
        ans: a/b
    })    

});

expressapp.get("/subtract/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)    
    const b = parseInt(req.params.b)
    res.json({
        ans: a-b
    })

});


expressapp.listen(3000); */