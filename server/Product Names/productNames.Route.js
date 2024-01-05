var Router = require("express");
var productNamesController = require("./productNamesController");

const routes = new Router();


routes.get("/get_all_products_names", productNamesController.getAllProductNames);


module.exports = routes;