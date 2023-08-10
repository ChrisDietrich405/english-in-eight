const express = require("express");
const app = express();

const connection = require("./db");

const port = 5000;
// const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.static("public"));

app.get(`/simple-past`, (req, res) => {
  connection.query(
    "SELECT * FROM `simple_past`",

    function (err, results) {
      console.log(err);
      res.json(results);
    }
  );
});

app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});
