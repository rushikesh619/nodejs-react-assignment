const SubCategories = require("../models/subCategories");
const mongoose = require("mongoose");

const getAllSubcategories = async () => {
  try {
    let subCategories = await SubCategories.find({});
    return subCategories;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

const getSubcategoriesForCategory = async (doc) => {
  try {
    categorieId = mongoose.Types.ObjectId(doc);
    const output = await SubCategories.aggregate([
      { $match: { categorie: categorieId } },
      {
        $lookup: {
          from: "categories",
          localField: "categorie",
          foreignField: "_id",
          as: "Subcategories",
        },
      },
      { $unwind: "$Subcategories" },
      {
        $project: {
          subCategoriesName: 1,
          categorieName: "$Subcategories.categorieName",
        },
      },
    ]);
    console.log(output);
    return output;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

module.exports = {
  getAllSubcategories,
  getSubcategoriesForCategory,
};
