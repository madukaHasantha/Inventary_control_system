var db = require("../databaseConnection");
var constatnt = require("../config/constatnt");



module.exports.getAllProductTypes = async (req, res) => {
    console.log("come to ProductTypes controller");
    try {
      await db.query(constatnt.GET_ALL_PRODUCT_TYPE, (err, rows) => {
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