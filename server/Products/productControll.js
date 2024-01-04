var db = require("../databaseConnection");
var constatnt = require("../config/constatnt")



module.exports.addProduct = async (req,res) => {

  try{

    if( 
      !!req.body.ProductType &&
      !!req.body.ProductName &&
      !!req.body.SupplierName &&
      !!req.body.SellingPrice &&
      !!req.body.CostPrice &&
      !!req.body.Quantity &&
      !!req.body.StoreLocation &&
      !!req.body.StockKeepingUnit &&
      !!req.body.Discount &&
      !!req.body.TaxInformation
      ){
    }else{

    }

  }catch (e) {
    return res.status(400).json(e);
  }
}

module.exports.getAllProduct = async (req,res) => {
    console.log("come to controller");
    try {
        await db.query(constatnt.GET_ALL_PRODUCTS, (err, rows) => {
          if (err) {
            return res.status(400).json({ error: err.message });
          } else {
            return res.status(200).json({
              message: "Success",
              data: rows,
            });
          }
        });
      } catch (e) {
        return res.status(400).json(e);
      }
}

module.exports.getByIdProduct = async (req,res) => {
    
}

module.exports.editProduct = async (req,res) => {
    
}
module.exports.deleteProduct = async (req,res) => {
    
}