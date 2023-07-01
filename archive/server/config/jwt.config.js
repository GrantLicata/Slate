const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY

module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
    if (err) { 
        console.log('Authentication error', err)
        res.status(401).json({verified: false});
    } else {
        console.log('Authenticated!')
        next();
    }
  });
}

// function verifyToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(403);
//   jwt.verify(token, "secret_key", (err, user) => {
//   if (err) return res.sendStatus(404);
//   req.user = user;
//   next();
//   });
//   }

// module.exports.authenticate = (req, res, next) => {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     if (token == null) return res.sendStatus(403);
//     jwt.verify(token, "secret_key", (err, user) => {
//     if (err) return res.sendStatus(404);
//     req.user = user;
//     next();
//   });
// }