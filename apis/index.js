// const subCategories = require("./categories");
const categories = require("./categories");
const subCategories = require("./subCategories");
const products = require("./products")

module.exports = (app) => {
    console.log("we are in apis")
    app.use("/api/categories", categories);
    app.use("/api/subCategories", subCategories);
    app.use("/api/products",products);
}