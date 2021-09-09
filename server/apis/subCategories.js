const router = require("express").Router();
const mongoose = require("mongoose");
const SubCategories = require("../models/subCategories");
const subCategoriesServcices = require("../services/subCategories");

router.get("/getAllSubcategories", async (req, res) => {
  try {
    const result = await subCategoriesServcices.getAllSubcategories();
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

router.get("/getSubcategoriesForCategory/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const result = await subCategoriesServcices.getSubcategoriesForCategory(id);
    console.log(result);
    res.status(200).json({ result: result });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});


router.post("/addSubcategorie", async (req, res) => {
    try {
        console.log("we are here");
      let subCategorie = new SubCategories({
        subCategoriesName: req.body.name,
        categorie: mongoose.Types.ObjectId(req.body.categorie)
      })
      console.log(subCategorie);
      subCategorie = await subCategorie.save();
      res.status(200).json({ result: subCategorie });
    } catch (ex) {
      console.log(ex);
      res.status(400).json(ex);
    }
  });

module.exports = router;