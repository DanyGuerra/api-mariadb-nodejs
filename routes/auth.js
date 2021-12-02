const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
const User = require("../db/models").User;

router.post("/", async (req, res, next) => {
  const body = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
    }

    if (!user.validPassword(body.password)) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a token
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
      expiresIn: 36000,
    });

    res.json({
      message: "Authenticated sucessfully",
      token,
    });

    // next();
  } catch (error) {
    console.log(error);
  }
});

router.post("/signup", (req, res) => {
  // TODO: Add logic for register a new user
});

module.exports = router;
