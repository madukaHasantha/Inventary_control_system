var db = require("../databaseConnection");
var constatnt = require("../config/constatnt");
const { DateTime } = require("luxon");
const uuid = require("uuid");
const fs = require("fs");
const { error } = require("console");

module.exports.addProduct = async (req, res) => {
  try {
    console.log("body keys and values: ", req.body);

    if (
      req.body.ProductType !== null &&
      req.body.ProductName !== null &&
      req.body.SupplierName !== null &&
      req.body.SellingPrice !== null &&
      req.body.CostPrice !== null &&
      req.body.Quantity !== null &&
      req.body.StoreLocation !== null &&
      req.body.StockKeepingUnit !== null &&
      req.body.Discount !== null &&
      req.body.TaxInformation !== null
    ) {
      const colomboDateTime = DateTime.local().setZone("Asia/Colombo");
      const FormattedColomboTime = colomboDateTime.toFormat(
        "yyyy-MM-dd HH:mm:ss"
      );
      const IsAvailable = true;
      const SoftDelete = false;
      const ReorderPoint = 0;
      const ExpirationDate = FormattedColomboTime;
      const Brand = "Branded";
      const ReorderQuantity = 0;
      const maximumStockLevel = 0;
      const minimumStockLevel = 0;

      const productNameID = req.body.ProductName;
      const supplierID = req.body.SupplierName;
      const productId = uuid.v4();
      console.log("Genarated product Id: ", productId);

      var errors = [];
      await db.query(
        constatnt.GET_PRODUCT_BY_PRODUCTID_AND_SUPPLIERID,
        [productNameID, supplierID],
        (err, rows) => {
          if (rows.length == 0) {
            if (err) {
              return res.status(400).json({ error: err.message });
            } else {

              console.log("no Product details found this producttypeID and supplierID");
              // return res.status(200).json({
              //   message: "Success got a Product details",
              //   data: rows,
              // });
              function readLastUsedID() {
                try {
                  const data = fs.readFileSync("lastUsedID.txt", "utf8");
                  return parseInt(data.trim());
                } catch (err) {
                  // Handle file read error or return a default value
                  console.error("Error reading last used ID:", err.message);
                  return 0;
                }
              }

              function writeNewID(newID) {
                fs.writeFileSync("lastUsedID.txt", newID.toString());
              }

              const lastUsedID = readLastUsedID();
              const newID = lastUsedID + 1;
              writeNewID(newID);
              console.log("new Product ID", newID);

              const data = {
                id: newID,
                PRODUCT_TYPE_id: req.body.ProductType,
                PRODUCT_NAME_id: req.body.ProductName,
                SUPPLIER_id: req.body.SupplierName,
                cost_price: req.body.CostPrice,
                selling_price: req.body.SellingPrice,
                quantity: req.body.Quantity,
                reorder_quantity: ReorderQuantity,
                reorder_point: ReorderPoint,
                expiration_date: ExpirationDate,
                maximum_stock_level: maximumStockLevel,
                minimum_stock_level: minimumStockLevel,
                location_in_the_store: req.body.StoreLocation,
                product_images: null,
                discount: req.body.Discount,
                tax_information: req.body.TaxInformation,
                Stock_keeping_unit: req.body.StorekeepingUnit,
                color: req.body.Color,
                size: req.body.Size,
                weight: req.body.Weight,
                power_consumption: req.body.PowerConsumption,
                flavor: req.body.Flavor,
                material: req.body.Material,
                brand: Brand,
                product_date: FormattedColomboTime,
                soft_delete: SoftDelete,
                is_available: IsAvailable,
              };

              if (errors.length == 0) {
                var params = [
                  data.id,
                  data.PRODUCT_TYPE_id,
                  data.PRODUCT_NAME_id,
                  data.SUPPLIER_id,
                  data.cost_price,
                  data.selling_price,
                  data.quantity,
                  data.reorder_quantity,
                  data.reorder_point,
                  data.expiration_date,
                  data.maximum_stock_level,
                  data.minimum_stock_level,
                  data.location_in_the_store,
                  data.product_images,
                  data.discount,
                  data.tax_information,
                  data.Stock_keeping_unit,
                  data.color,
                  data.size,
                  data.weight,
                  data.power_consumption,
                  data.flavor,
                  data.material,
                  data.brand,
                  data.product_date,
                  data.soft_delete,
                  data.is_available,
                ];

                db.query(constatnt.ADD_PRODUCT, params, (err, result) => {
                  if (err) {

                    console.log("The Product adding fail!", err);
                    return res.status(400).json({
                      error: err.message,
                      message: "The Product adding fail!",
                    });
                  } else {
                    console.log("The Product successfully added!");
                    return res.status(200).json({
                      message: "The Product successfully added!",
                      data: data,
                    });
                  }
                });
              } else {

                console.log("Error Adding product data!");
                return res.status(400).json({
                  message: errors[0],
                });
              }
            }
          } else {
            console.log("This product exist of this name and supplier");
            return res.status(400).json({
              message: "This product exist of this name and supplier",
              data: rows,
            });
          }
        }
      );
    } else {
      console.log("Please enter All the fields!");
      return res.status(200).json({
        message: "Please enter All the fields!!",
      });
    }
  }catch (e) {
    console.log("Error in try-catch block:", e.message);
    return res.status(400).json(e);
  }
};

module.exports.getAllProduct = async (req, res) => {
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
};

module.exports.getProductByIdAndSuppierId = async (req, res) => {
  try {
    const productID = req.body.ProductName;
    const supplierID = req.body.SupplierName;

    await db.query(
      constatnt.GET_PRODUCT_BY_PRODUCTID_AND_SUPPLIERID,
      [productID, supplierID],
      (err, rows) => {
        if (rows.length != 0) {
          if (err) {
            return res.status(400).json({ error: err.message });
          } else {
            return res.status(200).json({
              message: "Success got a Product details",
              data: rows,
            });
          }
        } else {
          return res.status(400).json({
            message: "There is no any product in this id",
            data: rows,
          });
        }
      }
    );
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports.getByIdProduct = async (req, res) => {};
module.exports.editProduct = async (req, res) => {};
module.exports.deleteProduct = async (req, res) => {};
