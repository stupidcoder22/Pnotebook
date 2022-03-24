const express = require("express");
const router = express.Router();
const User = require("../models/User");
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const jwtsecret = "Prateekisbadboy";

//Route 1:create a user using Post : "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    //check whether user email already exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ success, errors: "Email already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      let secpass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, jwtsecret);
      success = true;
      res.send({ success, authtoken });
    } catch (error) {
      console.log(error);
      res.status(500).send("some error occured");
    }
  }
);

//Route 2:Authenticate a user using Post : "/api/auth/logins". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credential",
        });
      }
      const passcompare = await bcrypt.compare(password, user.password);
      if (!passcompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credential",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, jwtsecret);
      success = true;
      res.send({ success, authtoken });
    } catch (error) {
      console.log(error);
      res.status(500).send("some error occured");
    }
  }
);

//Route 3:Authenticate a user using Post : "/api/auth/getuser". No login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("some error occured");
  }
});
module.exports = router;
