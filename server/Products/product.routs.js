var Router = require("express");
var productController = require("./productControll");


const routes = new Router();


 


routes.post("/add_products", productController.addProduct);
routes.get("/get_all_products", productController.getAllProduct);
routes.post("/get_products_by_id_and_supplierId", productController.getProductByIdAndSuppierId);
routes.post("/get_by_Id_products", productController.getByIdProduct);
routes.patch("/edit_products", productController.editProduct);
routes.delete("/delete_products", productController.deleteProduct);

module.exports = routes;