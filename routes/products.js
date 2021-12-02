// products.js
const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const permission = require("../middlewares/authorization");

// Get all products
router.get("/", permission("admin", "client"), async (req, res) => {
  res.send("Este contenido lo puede ver el cliente y admin");
});

router.post("/", permission("admin"), async (req, res) => {
  res.send("Este contenido solo es para admin");
});

module.exports = router;
