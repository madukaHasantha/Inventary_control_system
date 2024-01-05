var productRouts = require("./Products/product.routs");
var productTypeRoutes = require("./Product Types/productTypes.Rout")
var productNameRoutes = require("./Product Names/productNames.Route")
var supplierRoutes = require("./Suppliers/supplier.Rout")

module.exports = function (app) {

    
    app.use("/ICMS/productsRouts", productRouts)
    app.use("/ICMS/productsTypeRouts", productTypeRoutes)
    app.use("/ICMS/productsNameRouts", productNameRoutes)
    app.use("/ICMS/supplierRouts", supplierRoutes)
};