const router = require("express").Router();

router.get("/artist", function (req, res) {
  console.log("받은" + req.query.value);
  req.app.db
    .collection("music")
    .find({ artist: { $regex: req.query.value, $options: "i" } })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log("아티스트" + result.length);
        res.json(result);
      }
    });
});

router.get("/album", function (req, res) {
  console.log("받은" + req.query.value);
  req.app.db
    .collection("music")
    .find({ album: { $regex: req.query.value, $options: "i" } })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log("앨범" + result.length);
        res.json(result);
      }
    });
});

module.exports = router;
