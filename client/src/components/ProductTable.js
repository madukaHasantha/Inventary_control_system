import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Product/productAction";
import { productUpdateDataList } from "../Redux/Product/productAction";

const ProductTable = () => {
  let productNameData = useSelector(
    (state) => state.produtctNameGetDataReducer
  );
  console.log("Product Name data in product tabale component", productNameData);

  let productTypeData = useSelector(
    (state) => state.produtctTypeGetDataReducer
  );
  console.log("Product type data in product tabale component", productTypeData);

  let supplierData = useSelector((state) => state.supplierGetDataReducer);
  console.log("Supplier data in product tabale component", supplierData);

  let productData = useSelector((state) => state.produtctReducerData);
  console.log("product data in product tabale component", productData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, []);

  const [formData, setFormData] = useState({
    ProductId: "",
    ProductName: "",
    ProductType: "",
    SupplierName: "",
    Weight: "",
    Flavor: "",
    PowerConsumption: "",
    Size: "",
    Material: "",
    Color: "",
    SellingPrice: 0,
    CostPrice: 0,
    Quantity: 0,
    ReorderQuantity: "",
    MaximumStock: "",
    MinimumStock: "",
    StoreLocation: "",
    Discount: "",
    TaxInformation: "",
    StorekeepingUnit: "",
  });

  console.log("Edit Main form data:", formData);

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "file" ? files[0] : value,
  //   });
  // };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseData, setResponseData] = useState(null);

  const mainHandleSubmit = () => {
    dispatch(productUpdateDataList(formData));
  };


  
  //Edit popup form
  const EditPopupForm = ({ onClose, itemData }) => {
    console.log("Table clicked Item data: ", itemData);

    
    const [editformData, setEditFormData] = useState({
      ProductId: itemData.product_id,
      ProductName: itemData.product_name,
      ProductType: itemData.product_type_name,
      SupplierName: itemData.supplier_name,
      SellingPrice: itemData.selling_price,
      CostPrice: itemData.cost_price,
      Quantity: itemData.quantity,
      StoreLocation: itemData.location_in_the_store,
      Discount: itemData.discount,
      TaxInformation: itemData.tax_information,
      StorekeepingUnit: itemData.Stock_keeping_unit,
    });

    

    const editHandleChange = (e) => {
      const { name, value, type, files } = e.target;
      setEditFormData({
        ...editformData,
        [name]: type === "file" ? files[0] : value,
      });
    };

    const editHandleSubmit = (e) => {
      e.preventDefault();
      let selectedProductTypeId = null;

      if (itemData.product_type_name === editformData.ProductType) {
        selectedProductTypeId = itemData.product_type_id;
      } else {
        selectedProductTypeId = parseInt(editformData.ProductType, 10);
      }

      let selectedProductNameId = null;

      if (itemData.product_name === editformData.ProductName) {
        selectedProductNameId = itemData.product_name_id;
      } else {
        selectedProductNameId = parseInt(editformData.ProductName, 10);
      }

      let selectedSupplierNameId = null;

      if (itemData.supplier_name === editformData.SupplierName) {
        selectedSupplierNameId = itemData.supplier_name_id;
      } else {
        selectedSupplierNameId = parseInt(editformData.SupplierName, 10);
      }


      setFormData({
        ...formData,
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
      });

      mainHandleSubmit();
      // onClose();
    };

    return (
      <div>
        <div className="product-header"></div>
        <div className="product-adding-card pt-[50px] m-7">
          <div className="w-[800px] fixed max-w-full p-6 p-10 mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow top-1/2 left-1/2 col-md-12 dark:bg-gray-800 dark:border-gray-700">
            <button onClick={EditClosePopup} className="ml-[720px] ">
              <img src="image/Close-icon.png" />
            </button>
            <h1 className="text-[20px] text-center -mt-[30px] text-green-500">
              Edit Product
            </h1>
            <form>
              <div className="flex flex-wrap mt-10 -mx-2">
                {/*Product type*/}
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                    <option value="">{itemData.product_type_name}</option>
                    {productTypeData.map((productType) => (
                      <option key={productType.id} value={productType.id}>
                        {productType.product_type_name}
                      </option>
                    ))}
                  </select>
                </div>
                {/*Product name*/}
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                <div className="w-full px-2 mb-4 md:w-1/2">
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
                {/* Product Specification*/}
                <div className="w-full px-2 mb-4 md:w-1/2">
                  <label
                    htmlFor="ProductSpecification"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Specification
                  </label>
                  <button
                    type="button"
                    onClick={() => openPopup(itemData)}
                    className="w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Product Specification
                  </button>

                  {isPopupOpen && (
                    <PopupForm
                      onClose={closePopup}
                      subItemData={clickedItemSubFormData}
                    />
                  )}
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
      </div>
    );
  };

  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [clickedItemData, setClickedItemData] = useState(null);

  const EditOpenPopup = (data) => {
    setClickedItemData(data);
    setEditPopupOpen(true);
  };

  const EditClosePopup = () => {
    setEditPopupOpen(false);
  };

  //Edit popup form ending

  //popup form
  const PopupForm = ({ onClose, subItemData }) => {
    console.log("Sub popoup form data: ", subItemData);

    const [popupFormData, setPopupFormData] = useState({
      Weight: subItemData.weight,
      Flavor: subItemData.flavor,
      PowerConsumption: subItemData.power_consumption,
      Size: subItemData.size,
      Material: subItemData.material,
      Color: subItemData.color,
    });

    const handlePopupChange = (e) => {
      const { name, value, type, files } = e.target;
      setPopupFormData({
        ...popupFormData,
        [name]: type === "file" ? files[0] : value,
      });
    };

    console.log("popup Form Data", popupFormData);

    const popupHandleSubmit = (e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        Weight: popupFormData.Weight,
        Flavor: popupFormData.Flavor,
        PowerConsumption: popupFormData.PowerConsumption,
        Size: popupFormData.Size,
        Material: popupFormData.Material,
        Color: popupFormData.Color,
      });

      // Close the popup after handling the submit
      closePopup();
    };

    return (
      <div className="w-[500px] fixed max-w-full p-6 p-10 mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow top-1/2 left-1/2 col-md-12 dark:bg-gray-800 dark:border-gray-700">
        {" "}
        <button onClick={onClose} className="ml-[420px] ">
          <img src="image/Close-icon.png" />
        </button>
        <form>
          <div className="flex flex-wrap mt-10 -mx-2">
            {/*Product Color*/}
            <div className="px-2 mb-4 w-[50%]">
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
                value={popupFormData.Color}
                onChange={handlePopupChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/*Selling Price*/}
            <div className="px-2 mb-4 w-[50%]">
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
                value={popupFormData.Flavor}
                onChange={handlePopupChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/*Selling Price*/}
            <div className="px-2 mb-4 w-[50%]">
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
                value={popupFormData.Material}
                onChange={handlePopupChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/*Selling Price*/}
            <div className="px-2 mb-4 w-[50%]">
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
                value={popupFormData.PowerConsumption}
                onChange={handlePopupChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/*Selling Price*/}
            <div className="px-2 mb-4 w-[50%]">
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
                value={popupFormData.Size}
                onChange={handlePopupChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/*Selling Price*/}
            <div className="px-2 mb-4 w-[50%]">
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
                value={popupFormData.Weight}
                onChange={handlePopupChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div className="pt-7">
            <div className="mx-auto">
              <button
                type="button"
                onClick={popupHandleSubmit}
                className="w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [clickedItemSubFormData, setClickedItemSubFormData] = useState(null);

  const openPopup = (data) => {
    setClickedItemSubFormData(data);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  //ending popup form

  return (
    <div>
      {/* product table */}
      <div className="product-table p-[70px]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Availability
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Product Type
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Supplier Name
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Weight
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  flavor
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Power Consumption
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  size
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Material
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  color
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  brand
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Selling Price
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Cost Price
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Reorder Quantity
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Maximum Stock
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Minimum Stock
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Store Location
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Discount
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Tax Information
                </th>
                <th
                  scope="col"
                  className="px-10 py-3 border border-gray-300 dark:border-gray-600"
                >
                  Stock Keeping Unit
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item) => (
                <tr
                  key={item.product_id}
                  className="border-t border-gray-300 dark:border-gray-600"
                >
                  <td className="flex items-center px-6 py-4 border border-gray-300 dark:border-gray-600">
                    <button
                      onClick={() => EditOpenPopup(item)}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-[80px]"
                    >
                      Edit
                    </button>
                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 mb-[80px]">
                      Remove
                    </button>
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.product_name}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.Availability}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.product_type_name}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.supplier_name}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.weight}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.flavor}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.power_consumption}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.size}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.material}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.color}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.brand}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.selling_price}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.cost_price}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.reorder_quantity}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.maximum_stock_level}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.minimum_stock_level}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.location_in_the_store}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    <img src={item.product_images} alt="product photo" />
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.discount}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.tax_information}
                  </td>
                  <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">
                    {item.Stock_keeping_unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isEditPopupOpen && (
        <EditPopupForm onClose={EditClosePopup} itemData={clickedItemData} />
      )}
    </div>
  );
};

export default ProductTable;
