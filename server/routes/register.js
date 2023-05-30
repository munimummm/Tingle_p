const router = require("express").Router();

router.post("/register", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log("받은" + req.body);
  req.app.db
    .collection("user")
    .insert({ username: username, email: email, pw: password });
});
// router.post("/login", function (req, res) {
//   const password = req.body.password;
//   const email = req.body.email;
//   console.log("받은" + req.body);
//   req.app.db.collection("user").find({ email: email, pw: password });
// });
module.exports = router;
