const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

//GETTİNG USERS
router.get("/", async (req, res) => {
  try {
    const user = await User.find({}, (err, result) => {
      if (err) return res.send(err);
      res.status(200).send(result);
    });
  } catch (err) {
    res.status(500);
  }
});

//GETTİNG ONE USER
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (user === null) return res.send("User cannot find").status(404);
    res.send(user).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

//CREATİNG USER
router.post("/", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  try {
    await user.save();
    res.status(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
