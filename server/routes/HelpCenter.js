const router = require("express").Router();

router.get("/helpCenter", function (req, res) {
  req.app.db
    .collection("board")
    .find({ type: { $regex: req.query.type, $options: "i" } })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        res.json(result);
      }
    });
});
module.exports = router;
