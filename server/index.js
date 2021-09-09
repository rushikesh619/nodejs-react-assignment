const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const api = require("./apis");
const app = express();

mongoose
  .connect(process.env.DB_CONNECT)
  .then((success) => {
    console.log("MongoDB Connected!!!", process.env.DB_CONNECT);
  })
  .catch((err) => {
    console.log("MongoDB failed!!!", err);
  });

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('*.*', express.static(__dirname + './../client/build'));

api(app);

app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: __dirname + './../client/build' });
});

const port = process.env.PORT || 3002;

app.listen(port, function (err) {
  if (err) {
    console.log("error in server setup");
  } else {
    console.log("server listening on port", port);
  }
});
