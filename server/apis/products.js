const router = require("express").Router();
const mongoose = require("mongoose");
const Products = require("../models/products");
const productsServcices =require('../services/products')

router.get("/getAllProducts", async (req, res) => {
  try {
    const result = await productsServcices.getAllProducts();
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

router.get("/getProductsForCategory/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const result = await productsServcices.getProductsForCategory(id);
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

router.get("/getProductsForSubCategory/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const result = await productsServcices.getProductsForSubCategory(id);
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

router.post("/addNewProduct", async (req, res) => {
  try {
    const data = req.body;
    console.log(id)
    const result = await productsServcices.addNewProduct(data);
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

router.post("/addProducts", async (req, res) => {
    try {
        console.log("we are here");
      let products = new Products({
        productName: req.body.name,
        subCategorie: mongoose.Types.ObjectId(req.body.subCategorie),
        categorie: mongoose.Types.ObjectId(req.body.categorie)
      })
      console.log(products);
      products = await products.save();
      res.status(200).json({ result: products });
    } catch (ex) {
      console.log(ex);
      res.status(400).json(ex);
    }
  });

module.exports = router;