const router = require("express").Router();

router.get("/chartList100", function (req, res) {
  req.app.db
    .collection("music")
    .find({})
    .sort({ cnt: -1 })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.json(result);
      }
    });
});

router.get("/chartList", function (req, res) {
  let con = [
    {
      $search: {
        index: "search",
        text: {
          query: req.query.genre,
          path: "genre",
        },
      },
    },
    { $sort: { cnt: -1 } },
  ];
  req.app.db
    .collection("music")
    .aggregate(con)
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.json(result);
      }
    });
});
module.exports = router;
