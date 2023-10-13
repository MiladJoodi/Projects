const mysql = require("mysql");

const SabzlearnShopDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sabzlearn_shop",
});

module.exports = SabzlearnShopDB;
