const express = require("express");
const SabzlearnShopDB = require("./../db/SabzLearnShop");

const productsRouter = express.Router();

// routes

productsRouter.get("/", (req, res) => {
  console.log('get products');
  let selectAllProductsQuery = `SELECT * FROM Products`;
  SabzlearnShopDB.query(selectAllProductsQuery, (err, result) => {
    console.log('get products query');
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      console.log('get products query result');
      res.send(result);
    }
  });
});

productsRouter.delete("/:productID", (req, res) => {
  let productID = req.params.productID;
  let deleteProductQuery = `DELETE FROM Products WHERE id = ${productID}`;

  SabzlearnShopDB.query(deleteProductQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

productsRouter.put("/:productID", (req, res) => {
  let body = req.body;
  let productID = req.params.productID;

  let updateProductQuery = `UPDATE Products SET title="${body.title}", price=${body.price}, count=${body.count} ,img="${body.img}",popularity=${body.popularity},sale=${body.sale},colors=${body.colors} WHERE id = ${productID}`;
  SabzlearnShopDB.query(updateProductQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

productsRouter.post("/", (req, res) => {
  let body = req.body;
  let addNewProductQuery = `INSERT INTO Products VALUES (NULL, "${body.title}", ${body.price}, ${body.count}, "${body.img}", ${body.popularity}, ${body.sale}, ${body.colors})`;

  SabzlearnShopDB.query(addNewProductQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = productsRouter;
