/*
Assignment-

1.create a backend server in nodejs that return the endpoint
2.wtite an html file that hits the backend server using the ferch api
*/

import express from 'express'
import cors from 'cors'


const app = express();
const port = 3000;



// Enable CORS
app.use(cors()) //this is allow all frontend to send req to your backend


app.use(express.json())

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname, '/index.html');
});

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(req.body);


    res.json({ ans: a + b })
})



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);

})

/*
Notes:

- If we want to allow all frontend to send the request then we will write it as :
        - app.use(cors())
- if we want that ki sirf frontend se request ana chahiye then we will specify that :
      -app.use(cors({
            Domain:["https://google.com", "https://hdfcbank.com"]
        }))

# NOte => by default node.js mein CORS disabled hota hai.


 cors (Cross origin resource sharing): 
        - It is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. 
        - It's a crucial mechanism for managing `cross-origin` requests and ensuring secure interactions between `different origins` on the web.
        - cors is used to connect the frontend and backend which had different url/domain but if the backend and the frontend is deployed in the same domain then this cors is not required.

*/

