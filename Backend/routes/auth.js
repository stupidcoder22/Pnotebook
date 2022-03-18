const express = require("express");
const router = express.Router();
const User = require("../models/User");

//create a user using Post : "/api/auth"

router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save();
  res.send(req.body);
  console.log(req.body);
});

module.exports = router;
