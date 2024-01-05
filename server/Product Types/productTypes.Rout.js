var Router = require("express");
var productTypeController = require("./productTypesController");

const routes = new Router();


routes.get("/get_all_products_types", productTypeController.getAllProductTypes);


module.exports = routes;