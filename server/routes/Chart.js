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

router.put("/addCnt/:id", function (req, res) {
  const id = parseInt(req.params.id);
  console.log(id);
  req.app.db
    .collection("music")
    .updateOne({ id: id }, { $inc: { cnt: 1 } }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("결과", result);
      }
    });
});

module.exports = router;
