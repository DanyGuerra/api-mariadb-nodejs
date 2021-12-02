const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Todo este contenido es restringido");
});

module.exports = router;
