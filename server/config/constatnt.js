
module.exports = {

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

`
}