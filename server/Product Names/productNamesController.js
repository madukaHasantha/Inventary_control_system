
var db = require("../databaseConnection");
var constatnt = require("../config/constatnt");

module.exports.getAllProductNames = async (req, res) => {
    console.log("come to ProductNames controller");
    try {
      await db.query(constatnt.GET_ALL_PRODUCT_NAME, (err, rows) => {
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