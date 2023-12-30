import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Product/productAction";
import { productInsertDataList } from "../Redux/Product/productAction";

function Product() {
  const { data, loading, error } = useSelector(
    (state) => state.ProductPostReducer
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    ProductName: "",
    Availability: "",
    ProductType: "",
    SupplierName: "",
    Weight: "",
    flavor: "",
    PowerConsumption: "",
    size: "",
    Material: "",
    color: "",
    brand: "",
    SellingPrice: 0,
    CostPrice: 0,
    Quantity: 0,
    ReorderQuantity: "",
    MaximumStock: "",
    MinimumStock: "",
    StoreLocation: "",
    Image: null,
    Discount: "",
    TaxInformation: "",
    StockKeepingUnit: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    // Dispatch your action with formData
    dispatch(productInsertDataList(formData));
  };

  const formFields = [
    {
      label: "Product Type",
      name: "ProductType",
      type: "select",
      options: ["", "Product type 1", "Product type 2", "Product type 3"],
    },
    {
      label: "Supplier Name",
      name: "SupplierName",
      type: "select",
      options: ["", "Supplier 1", "Supplier 2", "Supplier 3"],
    },
    {
      label: "Product Name",
      name: "ProductName",
      type: "select",
      options: ["", "Name 1", "Name 2", "Name 3"],
    },
    { label: "Cost Price", name: "CostPrice", type: "number" },
    { label: "Selling Price", name: "SellingPrice", type: "number" },
    { label: "Quantity", name: "Quantity", type: "number" },
    { label: "Store Location", name: "StoreLocation", type: "text" },
    { label: "Product Image", name: "Image", type: "file" },
    { label: "Product Discount", name: "Discount", type: "number" },
    { label: "Product Tax", name: "TaxInformation", type: "number" },
    { label: "Stock Keeping Unit", name: "StockKeepingUnit", type: "text" },
    {
      label: "Product Specification",
      name: "productSpecification",
      type: "text",
    },
  ];

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
              {formFields.map((field) => (
                <div key={field.name} className="w-full px-2 mb-4 md:w-1/2">
                  <label
                    htmlFor={field.name}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {field.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="pt-7">
              <div className="mx-auto">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Submit
                </button>
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
