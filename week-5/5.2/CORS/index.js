
const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.post("/sum", function  sumHandler(req, res) {       

    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    
    res.json({
        ans: a+b
    });
});

app.listen(3001)

/*
Notes:
- To use CORS first we have to do npm install cors
- Then we write the second line
- If we want to allow all frontend to send the request then we will write it as :
        - app.use(cors())
- if we want that ki sirf frontend se request ana chahiye then we will specify that :
      -app.use(cors({
            Domain:["https://google.com", "https://hdfcbank.com"]
        }))




1. Why do we need CORS (Cross Origin Resource Sharing)?
Ans:    - Every website has its frontend and backend part, frontend part like - https//google.com and backend part like - https//api.google.com
        - frontend part includes html,css,js react,js codes.
        - and backend part includes the server side code like the node.js , express codes
        - as a developer we want that google.com ka frontend, google ke backend api.google.com ko connect na ki google.com kisi aur suppose api.hdfcbank.com ko connect kare 
        - for this CORS is required and by default node.js mein CORS disabled hota hai.


2. cors (Cross origin resource sharing): 
        - It is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. 
        - It's a crucial mechanism for managing `cross-origin` requests and ensuring secure interactions between `different origins` on the web.
        - cors is used to connect the frontend and backend which had different url/domain but if the backend and the frontend is deployed in the same domain then this cors is not required.

*/

