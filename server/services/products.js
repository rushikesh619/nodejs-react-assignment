const mongoose = require('mongoose');
const Products = require('../models/products');

const getAllProducts = async () => {
    try {
        const output = await Products.aggregate([
            {
              $lookup: {
                from: "subcategories",
                localField: "subCategorie",
                foreignField: "_id",
                as: "SubCategorie",
              },
            },
            { $unwind: "$SubCategorie" },
            {
                $lookup: {
                  from: "categories",
                  localField: "categorie",
                  foreignField: "_id",
                  as: "Categories",
                },
            },
            { $unwind: "$Categories" },
            {
              $project: {
                productName: 1,
                categorieName: "$Categories.categorieName",
                subCategoriesName: "$SubCategorie.subCategoriesName",
              },
            },
          ]);
      return output;
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  };

const getProductsForCategory = async (doc) => {
    try {
      categorieId = mongoose.Types.ObjectId(doc);
      const output = await Products.aggregate([
        { $match: { categorie: categorieId } },
        {
          $lookup: {
            from: "categories",
            localField: "categorie",
            foreignField: "_id",
            as: "Categories",
          },
        },
        { $unwind: "$Categories" },
        {
          $project: {
            productName: 1,
            categorieName: "$Categories.categorieName",
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

  const getProductsForSubCategory = async (doc) => {
    try {
      subCategorieId = mongoose.Types.ObjectId(doc);
      const output = await Products.aggregate([
        { $match: { subCategorie: subCategorieId } },
        {
          $lookup: {
            from: "subcategories",
            localField: "subCategorie",
            foreignField: "_id",
            as: "SubCategorie",
          },
        },
        { $unwind: "$SubCategorie" },
        {
          $project: {
            productName: 1,
            categorieName: "$SubCategorie.subCategoriesName",
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

  const addNewProduct = (doc) =>{
      try{

      }catch(ex){
        console.log(ex);
        throw ex;
      }
  }


module.exports = {
    getAllProducts,
    getProductsForCategory,
    getProductsForSubCategory,
    addNewProduct
};
  