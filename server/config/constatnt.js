module.exports = {
  GET_ALL_PRODUCT_TYPE: `SELECT* FROM product_type`,
  GET_ALL_PRODUCT_NAME: `SELECT* FROM product_name`,
  GET_ALL_SUPPLIER: `SELECT* FROM supplier`,

  ADD_PRODUCT: `INSERT INTO product(
        id, PRODUCT_TYPE_id, PRODUCT_NAME_id, SUPPLIER_id, cost_price,
        selling_price, quantity, reorder_quantity, reorder_point,
        expiration_date, maximum_stock_level, minimum_stock_level,
        location_in_the_store, product_images, discount, tax_information,
        Stock_keeping_unit, color, size, weight, power_consumption, flavor,
        material, brand,product_date, soft_delete, is_available ) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`,
  GET_ALL_PRODUCTS: `SELECT
    P.id AS product_id,
    PT.product_type_name,
    PT.id AS product_type_id,
    PN.product_name,
    PN.id AS product_name_id,
    S.supplier_name,
    S.id AS supplier_name_id,
    P.cost_price,
    P.selling_price,
    P.quantity,
    P.reorder_quantity,
    P.reorder_point,
    P.expiration_date,
    P.maximum_stock_level,
    P.minimum_stock_level,
    P.location_in_the_store,
    P.product_images,
    P.discount,
    P.tax_information,
    P.Stock_keeping_unit,
    P.color,
    P.size,
    P.weight,
    P.power_consumption,
    P.flavor,
    P.material,
    P.brand
FROM
    product P
JOIN
    PRODUCT_TYPE PT ON P.PRODUCT_TYPE_id = PT.id
JOIN
    PRODUCT_NAME PN ON P.PRODUCT_NAME_id = PN.id
JOIN
    SUPPLIER S ON P.SUPPLIER_id = S.id;

`,
  GET_PRODUCT_BY_PRODUCTID_AND_SUPPLIERID: `SELECT * FROM product WHERE PRODUCT_NAME_id=? AND SUPPLIER_id=?`,
  GET_PRODUCT_BY_PRODUCTID: `SELECT * FROM product WHERE id=?`,
  UPDATE_PRODUCT: `UPDATE product SET id=?, PRODUCT_TYPE_id=?, PRODUCT_NAME_id=?, SUPPLIER_id=?, cost_price=?,
                selling_price=?, quantity=?, location_in_the_store=?, product_images=?, discount=?, tax_information=?,
                 Stock_keeping_unit=?, color=?, size=?, weight=?, power_consumption=?, flavor=?, material=?
                 WHERE id=?`
};
