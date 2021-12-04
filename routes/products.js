// products.js
const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const permission = require("../middlewares/authorization");

const { ADMIN_TYPE, USER_TYPE } = require("../constants/user-types");

// Get all products
router.get("/", permission(ADMIN_TYPE, USER_TYPE), async (req, res) => {
  res.send("Este contenido lo puede ver el cliente y administrador");
});

router.post("/", permission(ADMIN_TYPE), async (req, res) => {
  res.send("Este contenido solo es para admin");
});

module.exports = router;
