const express = require("express");
const path = require("path");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const bodyParser = require("body-parser");

let db;

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static(path.join(__dirname, "client/dist")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

MongoClient.connect(process.env.DB_URL, function (error, client) {
  if (error) return console.log(error);
  db = client.db("tingleP");
  app.db = db;
  app.listen(process.env.PORT, function () {
    console.log("Listening on 8080");
  });
});

app.use("/", require("./routes/Recommend.js"));
app.use("/", require("./routes/Chart.js"));
app.use("/detailList", require("./routes/Detail.js"));
app.use("/", require("./routes/HelpCenter.js"));
app.use("/searchList", require("./routes/Search.js"));
app.use("/", require("./routes/register.js"));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});
