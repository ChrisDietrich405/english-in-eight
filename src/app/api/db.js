const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret",
  database: "english_in_eight",
});

module.exports = connection;