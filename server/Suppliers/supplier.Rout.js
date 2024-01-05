var Router = require("express");
var supplierController = require("./supplierController");

const routes = new Router();


routes.get("/get_all_supplier", supplierController.getAllSuppliers);


module.exports = routes;