const router = require("express").Router();

router.get("/title", function (req, res) {
  console.log("받은" + req.query.value);
  req.app.db
    .collection("music")
    .find({ title: { $regex: req.query.value, $options: "i" } })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result.length);
        res.json(result);
      }
    });
});

router.get("/artist", function (req, res) {
  console.log("받은" + req.query.value);
  req.app.db
    .collection("music")
    .find({ artist: { $regex: req.query.value, $options: "i" } })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        const resultarr = result.reduce((acc, v) => {
          return acc.find((x) => x.artist_no === v.artist_no)
            ? acc
            : [...acc, v];
        }, []);
        console.log("아티스트" + resultarr.length);
        res.json(resultarr);
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
        const resultarr = result.reduce((acc, v) => {
          return acc.find((x) => x.artist_no === v.artist_no)
            ? acc
            : [...acc, v];
        }, []);
        console.log("앨범" + resultarr.length);
        res.json(resultarr);
      }
    });
});
// router.get("/lyrics", function (req, res) {
//   console.log("받은" + req.query.value);
//   db.collection("music")
//     .find({ lyrics: { $regex: req.query.value, $options: "i" } })
//     .limit(5)
//     .toArray(function (error, result) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(result);
//         res.json(result);
//       }
//     });
// });
module.exports = router;
