import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import { productInsertDataList } from "../Redux/Product/productAction";

function Product() {
  const { data, loading, error } = useSelector(
    (state) => state.ProductPostReducer
  );
  const productData = useSelector((state) => state.produtctReducerData);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseData, setResponseData] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(productInsertDataList(formData));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !!formData.ProductName &&
      !!formData.ProductType &&
      !!formData.SupplierName &&
      !!formData.Quantity &&
      !!formData.SellingPrice &&
      !!formData.CostPrice &&
      !!formData.Discount &&
      !!formData.TaxInformation &&
      !!formData.StoreLocation &&
      !!formData.StorekeepingUnit
    ) {
      dispatch(productInsertDataList(formData));
    } else {
      setErrorMessage("Please enter all the fields!");
      setSuccessMessage("");
      console.log("Please enter all the fields!");
    }
  };

  const PopupMessage = ({ message, onClose }) => {
    return (
      <div className="popup-message flex flex-col items-center justify-center w-[300px] fixed max-w-full p-6 p-10 mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-transparent bg-opacity-10 border border-red-500 rounded-lg shadow top-1/2 left-1/2 col-md-12 dark:bg-gray-800 dark:border-gray-700 text-red-500">
        <button onClick={onClose} className="mb-4">
          <img src="image/Close-icon.png" alt="Close" />
        </button>
        <p className="text-red-500">{message}</p>
      </div>
    );
  };
  
  

  //popup form
  const PopupForm = ({ onClose }) => {
    const [popupFormData, setPopupFormData] = useState({
      Weight: "",
      Flavor: "",
      PowerConsumption: "",
      Size: "",
      Material: "",
      Color: "",
    });

    const handlePopupChange = (e) => {
      const { name, value, type, files } = e.target;
      setPopupFormData({
        ...popupFormData,
        [name]: type === "file" ? files[0] : value,
      });
    };

    console.log("popup Form Data", popupFormData);

    const popupHandleSubmit = () => {
      setFormData({
        ...formData,
        Weight: popupFormData.Weight || "",
        Flavor: popupFormData.Flavor || "",
        PowerConsumption: popupFormData.PowerConsumption || "",
        Size: popupFormData.Size || "",
        Material: popupFormData.Material || "",
        Color: popupFormData.Color || "",
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
  //popup form ending

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <div className="product-header">
        <h1 className="text-[60px] text-center mt-[100px] text-green-500">
          Product
        </h1>
      </div>
      <div className="product-adding-card pt-[50px] m-7">
        <div className="max-w-[800px] col-md-12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <img
              className="rounded-lg"
              src="image/inventory_02.jpg"
              alt="productimg"
            />
          </div>
          <form>
            <div className="flex flex-wrap mt-10 -mx-2">
              {/*Product name*/}
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
                  value={formData.ProductType}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select Product Type
                  </option>
                  {productData.map((product) => (
                    <option
                      key={product.product_type_id}
                      value={product.product_type_name}
                    >
                      {product.product_type_name}
                    </option>
                  ))}
                </select>
              </div>
              {/*Product name*/}
              <div className="w-full px-2 mb-4 md:w-1/2">
                <label
                  htmlFor="ProductType"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <select
                  id="ProductName"
                  name="ProductName"
                  value={formData.ProductName}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select Product Name
                  </option>
                  {productData.map((product) => (
                    <option
                      key={product.product_name_id}
                      value={product.product_name}
                    >
                      {product.product_name}
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
                  value={formData.SupplierName}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select Supplier Name
                  </option>
                  {productData.map((product) => (
                    <option
                      key={product.supplier_name_id}
                      value={product.supplier_name}
                    >
                      {product.supplier_name}
                    </option>
                  ))}
                </select>
              </div>
              {/*Supplier Name*/}
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
                  value={formData.Quantity}
                  onChange={handleChange}
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
                  value={formData.SellingPrice}
                  onChange={handleChange}
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
                  value={formData.CostPrice}
                  onChange={handleChange}
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
                  value={formData.Discount}
                  onChange={handleChange}
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
                  value={formData.TaxInformation}
                  onChange={handleChange}
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
                  value={formData.StoreLocation}
                  onChange={handleChange}
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
                  value={formData.StorekeepingUnit}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onClick={openPopup}
                  className="w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Product Specification
                </button>

                {isPopupOpen && <PopupForm onClose={closePopup} />}
              </div>

              {/* Add other form fields here */}
            </div>

            <div className="pt-7">
              <div className="mx-auto">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Submit
                </button>

                {errorMessage && (
                  <PopupMessage
                    message={errorMessage}
                    onClose={() => setErrorMessage("")}
                  />
                )}

                {data && <div>{JSON.stringify(data)}</div>}
                {error && <div>{error}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* product table */}
      <ProductTable />
    </div>
  );
}

export default Product;
