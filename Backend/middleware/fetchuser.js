var jwt = require("jsonwebtoken");
const jwtsecret = "Prateekisbadboy";
const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  console.log("the value of token is => ", token);
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  }

  try {
    const data = jwt.verify(token, jwtsecret);
    req.user = data.user;
    next();
  } catch (error) {
    console.log("error");
    console.log(error.message);
    console.log(error);
    res.status(401).send({ error: "Please authenticate using valid token" });
  }
};

module.exports = fetchuser;
