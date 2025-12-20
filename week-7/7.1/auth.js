import jwt from 'jsonwebtoken'
 const JWT_SECRET = "jdahbjncwihfk"                      //need to export individually both secret key and function

 function auth(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if (decoded) {
        req.userId = decoded.id
        next()
    } else {
        res.status(403).json({
            msg: "Incorrect credentials"
        })
    }
}

export{
    auth,JWT_SECRET
};

// export default auth