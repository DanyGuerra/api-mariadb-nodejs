// authetication.js
const { response } = require("express");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  // console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    req.userId = decoded.userId;
    // console.log(decoded);
    next();
  });
};

module.exports = authenticate;
