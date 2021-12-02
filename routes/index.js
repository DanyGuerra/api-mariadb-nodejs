var express = require("express");
var router = express.Router();
var users = require("./users");
var auth = require("./auth");
var restricted = require("./restricted.js");
var authentication = require("../middlewares/authentication");
var products = require("./products");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express ♥️" });
});

router.use("/users", users);
router.use("/login", auth);
router.use("/restricted", authentication, products);

module.exports = router;
