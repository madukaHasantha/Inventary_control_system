var Router = require("express");
var productController = require("./productControll");

const routes = new Router();

routes.post("/add_products", productController.addProduct);
routes.post("/get_all_products", productController.getAllProduct);
routes.post("/get_by_Id_products", productController.getByIdProduct);
routes.post("/edit_products", productController.editProduct);
routes.post("/delete_products", productController.deleteProduct);

module.exports = routes;