var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Login" });
});

router.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (email === "admin@example.com" && password === "123456") {
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

module.exports = router;
