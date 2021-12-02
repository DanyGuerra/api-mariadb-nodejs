// authetication.js
const { response } = require("express");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  // console.log(token);

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) res.status(401).json({ message: "Unauthorized" });

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authenticate;
