const express = require("express");
const path = require("path");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

let db;

MongoClient.connect(process.env.DB_URL, function (error, client) {
  if (error) return console.log(error);
  db = client.db("tingleP");
  app.listen(process.env.PORT, function () {
    console.log("Listening on 8080");
  });
});

app.get("/chartList100", function (req, res) {
  db.collection("music")
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

app.get("/chartList", function (req, res) {
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
  db.collection("music")
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
app.get("/searchList/title", function (req, res) {
  console.log("받은" + req.query.value);
  db.collection("music")
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

app.get("/searchList/artist", function (req, res) {
  console.log("받은" + req.query.value);
  db.collection("music")
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

app.get("/searchList/album", function (req, res) {
  console.log("받은" + req.query.value);
  db.collection("music")
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
// app.get("/searchList/lyrics", function (req, res) {
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

app.get("/recommendList", function (req, res) {
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
    { $sample: { size: 5 } },
  ];
  db.collection("music")
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

app.get("/detailList/artist", function (req, res) {
  console.log("받은" + req.query.value);
  db.collection("music")
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
app.get("/detailList/album", function (req, res) {
  console.log("받은" + req.query.value);
  db.collection("music")
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

app.get("/helpCenter", function (req, res) {
  db.collection("board")
    .find({ type: { $regex: req.query.type, $options: "i" } })
    .toArray(function (error, result) {
      if (error) {
        console.log(error);
      } else {
        res.json(result);
      }
    });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
