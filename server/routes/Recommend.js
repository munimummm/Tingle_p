const router = require("express").Router();

router.get("/recommendList", function (req, res) {
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
    { $sort: { cnt: 1 } },
    { $limit: 5 },
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
