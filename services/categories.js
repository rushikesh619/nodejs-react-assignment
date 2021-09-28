const Categories = require("../models/categories");

const getAllCategories = async () => {
    try {
      let categories = await Categories.find({});
      return categories;
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  };

  module.exports = {
    getAllCategories,
  };