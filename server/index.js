var productRouts = require("./Products/product.routs");

module.exports = function (app) {

    
    app.use("/ICMS/productsRouts", productRouts)
};