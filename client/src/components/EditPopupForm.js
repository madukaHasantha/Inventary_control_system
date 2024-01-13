import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productUpdateDataList } from "../Redux/Product/productAction";


const EditPopupForm = ({ onClose }) => {
  const dispatch = useDispatch();

  let productNameData = useSelector(
    (state) => state.produtctNameGetDataReducer
  );
  console.log("Product Name data in EditPopupForm component", productNameData);

  let productTypeData = useSelector(
    (state) => state.produtctTypeGetDataReducer
  );
  console.log("Product type data in EditPopupForm component", productTypeData);

  let supplierData = useSelector((state) => state.supplierGetDataReducer);
  console.log("Supplier data in EditPopupForm component", supplierData);

  let productData = useSelector((state) => state.produtctReducerData);
  console.log("product data in EditPopupForm component", productData);

  let editFormReducerData = useSelector((state) => state.editFormReducerData);
  console.log("edit form data in EditPopupForm component", editFormReducerData);

  const [editformData, setEditFormData] = useState({
    ProductId: editFormReducerData.product_id,
    ProductName: editFormReducerData.product_name,
    ProductType: editFormReducerData.product_type_name,
    SupplierName: editFormReducerData.supplier_name,
    SellingPrice: editFormReducerData.selling_price,
    CostPrice: editFormReducerData.cost_price,
    Quantity: editFormReducerData.quantity,
    StoreLocation: editFormReducerData.location_in_the_store,
    Discount: editFormReducerData.discount,
    TaxInformation: editFormReducerData.tax_information,
    StorekeepingUnit: editFormReducerData.Stock_keeping_unit,
    Weight: editFormReducerData.weight,
    Flavor: editFormReducerData.flavor,
    PowerConsumption: editFormReducerData.power_consumption,
    Size: editFormReducerData.size,
    Material: editFormReducerData.material,
    Color: editFormReducerData.color,
  });

  console.log("Edit Main form data:", editformData);

  const editHandleChange = (e) => {
    const { name, value, type, files } = e.target;
    setEditFormData({
      ...editformData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const editHandleSubmit = async (e) => {
    e.preventDefault();

    
    let selectedProductTypeId = null;

    if (editFormReducerData.product_type_name === editformData.ProductType) {
      selectedProductTypeId = editFormReducerData.product_type_id;
    } else {
      selectedProductTypeId = parseInt(editformData.ProductType, 10);
    }

    let selectedProductNameId = null;

    if (editFormReducerData.product_name === editformData.ProductName) {
      selectedProductNameId = editFormReducerData.product_name_id;
    } else {
      selectedProductNameId = parseInt(editformData.ProductName, 10);
    }

    let selectedSupplierNameId = null;

    if (editFormReducerData.supplier_name === editformData.SupplierName) {
      selectedSupplierNameId = editFormReducerData.supplier_name_id;
    } else {
      selectedSupplierNameId = parseInt(editformData.SupplierName, 10);
    }

   await setEditFormData({
        ...editformData,
        ProductId: editformData.ProductId,
        ProductType: selectedProductTypeId,
        ProductName: selectedProductNameId,
        SupplierName: selectedSupplierNameId,
        SellingPrice: editformData.SellingPrice,
        CostPrice: editformData.CostPrice,
        Quantity: editformData.Quantity,
        StoreLocation: editformData.StoreLocation,
        Discount: editformData.Discount,
        TaxInformation: editformData.TaxInformation,
        StorekeepingUnit: editformData.StorekeepingUnit,
        Weight: editformData.Weight,
        Flavor: editformData.Flavor,
        PowerConsumption: editformData.PowerConsumption,
        Size: editformData.Size,
        Material: editformData.Material,
        Color: editformData.Color,
      });

    await dispatch(productUpdateDataList(editformData))

    // onClose();
  };

  

  return (
    <>
      <div className="product-adding-card pt-[50px] m-7">
        <div className="w-[800px] fixed max-w-full p-6 p-10 mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow top-1/2 left-1/2 col-md-12 dark:bg-gray-800 dark:border-gray-700">
          <button onClick={onClose} className="ml-[720px] ">
            <img src="image/Close-icon.png" />
          </button>
          <h1 className="text-[20px] text-center -mt-[30px] text-green-500">
            Edit Product
          </h1>
          <form>
            <div className="flex flex-wrap mt-10 -mx-2">
              {/*Product type*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="ProductType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Type
                </label>
                <select
                  id="ProductType"
                  name="ProductType"
                  value={editformData.value}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">{editformData.ProductType}</option>
                  {productTypeData.map((productType) => (
                    <option key={productType.id} value={productType.id}>
                      {productType.product_type_name}
                    </option>
                  ))}
                </select>
              </div>
              {/*Product name*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="ProductName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <select
                  id="ProductName"
                  name="ProductName"
                  value={editformData.value}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">{editformData.ProductName}</option>
                  {productNameData.map((productName) => (
                    <option key={productName.id} value={productName.id}>
                      {productName.product_name}
                    </option>
                  ))}
                </select>
              </div>

              {/*Supplier Name*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="SupplierName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Supplier Name
                </label>
                <select
                  id="SupplierName"
                  name="SupplierName"
                  value={editformData.value}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">{editformData.SupplierName}</option>
                  {supplierData.map((supplier) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.supplier_name}
                    </option>
                  ))}
                </select>
              </div>
              {/*Quantity*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Quantity
                </label>
                <input
                  type="number"
                  id="Quantity"
                  name="Quantity"
                  value={editformData.Quantity}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/*Selling Price*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="SellingPrice"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Selling Price
                </label>
                <input
                  type="number"
                  id="SellingPrice"
                  name="SellingPrice"
                  value={editformData.SellingPrice}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/*Cost Price*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="CostPrice"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cost Price
                </label>
                <input
                  type="number"
                  id="CostPrice"
                  name="CostPrice"
                  value={editformData.CostPrice}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Discount*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Discount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Discount
                </label>
                <input
                  type="number"
                  id="Discount"
                  name="Discount"
                  value={editformData.Discount}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Tax*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="TaxInformation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Tax
                </label>
                <input
                  type="number"
                  id="TaxInformation"
                  name="TaxInformation"
                  value={editformData.TaxInformation}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Location in the store*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="StoreLocation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Store Location
                </label>
                <input
                  type="text"
                  id="StoreLocation"
                  name="StoreLocation"
                  value={editformData.StoreLocation}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Store keeping Unit*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="StorekeepingUnit"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Store keeping Unit
                </label>
                <input
                  type="text"
                  id="StorekeepingUnit"
                  name="StorekeepingUnit"
                  value={editformData.StorekeepingUnit}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Product Image*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="ProductImage"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="ProductImage"
                  name="ProductImage"
                  onChange={editHandleChange}
                  accept="image/*"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Product Brand*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Brand
                </label>
                <input
                  type="text"
                  id="Brand"
                  name="Brand"
                  value={editformData.Brand}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Product Color*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Color
                </label>
                <input
                  type="text"
                  id="Color"
                  name="Color"
                  value={editformData.Color}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Flaver*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="flavor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Flavor
                </label>
                <input
                  type="text"
                  id="Flavor"
                  name="Flavor"
                  value={editformData.Flavor}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Material*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Material"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Material
                </label>
                <input
                  type="text"
                  id="Material"
                  name="Material"
                  value={editformData.Material}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Power Consumption*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="PowerConsumption"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Power Consumption
                </label>
                <input
                  type="text"
                  id="PowerConsumption"
                  name="PowerConsumption"
                  value={editformData.PowerConsumption}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Product Size*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Size"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Size
                </label>
                <input
                  type="text"
                  id="Size"
                  name="Size"
                  value={editformData.Size}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/*Product Weight*/}
              <div className="w-full px-2 mb-4 md:w-1/3">
                <label
                  htmlFor="Weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Weight
                </label>
                <input
                  type="text"
                  id="Weight"
                  name="Weight"
                  value={editformData.Weight}
                  onChange={editHandleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Add other form fields here */}
            </div>

            <div className="pt-7">
              <div className="mx-auto">
                <button
                  type="submit"
                  onClick={editHandleSubmit}
                  className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Update
                </button>

                {/* {errorMessage && (
                      <PopupMessage
                        message={errorMessage}
                        onClose={() => setErrorMessage("")}
                      />
                    )} */}

                {/* {data && <div>{JSON.stringify(data)}</div>}
                    {error && <div>{error}</div>} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPopupForm;
