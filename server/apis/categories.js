const router = require("express").Router();
const categoriesServcices = require("../services/categories");
const Categories = require("../models/categories");

router.get("/getAllCategories", async (req, res) => {
  try {
    const result = await categoriesServcices.getAllCategories();
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

router.post("/addCategori", async (req, res) => {
    try {
        console.log("we are here");
      let categories = new Categories({
        categorieName: req.body.name
      })
      console.log(categories);
      categories = await categories.save();
      res.status(200).json({ result: categories });
    } catch (ex) {
      console.log(ex);
      res.status(400).json(ex);
    }
  });

module.exports = router;
