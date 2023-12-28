import React, { useEffect } from "react";
import ProductTable from "../components/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Product/productAction";

function Product() {

  
  
  
  return (
    <div>
      <div className="product-header">
        <h1 className="text-[60px] text-center mt-[100px] text-green-500">
          Product
        </h1>
      </div>
      <div className="product-adding-card pt-[50px] m-7">
        <div class="max-w-[800px] col-md-12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <img
              class="rounded-t-lg"
              src="image/inventory_02.jpg"
              alt="productimg"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div>
              <label
                for="product-type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Type
              </label>
              <select
                id="product-type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select product type</option>
                <option value="option1">Product type 1</option>
                <option value="option2">Product type 2</option>
                <option value="option3">Product type 3</option>
              </select>
            </div>
            <div>
              <label
                for="Supplier"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Supplier
              </label>
              <select
                id="Supplier"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select supplier</option>
                <option value="option1">Supplier 1</option>
                <option value="option2">Supplier 2</option>
                <option value="option3">Supplier 3</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 pt-7">
            <div>
              <label
                for="product-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Produt Name
              </label>
              <select
                id="product-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select product name</option>
                <option value="option1">name 1</option>
                <option value="option2">name 2</option>
                <option value="option3">name 3</option>
              </select>
            </div>
            <div>
              <label
                for="cost-price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cost Price
              </label>
              <input
                type="number"
                id="cost-price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 pt-7">
            <div>
              <label
                for="seling-price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seling Price
              </label>
              <input
                type="number"
                id="seling-price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="product-quantity"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                id="product-quantity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 pt-7">
            <div>
              <label
                for="store-location"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Store Location
              </label>
              <input
                type="text"
                id="store-location"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="product-image"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                aria-describedby="file_input_help"
                id="product-image"
                type="file"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 pt-7">
            <div>
              <label
                for="product-discount"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Discount
              </label>
              <input
                type="number"
                id="product-discount"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="product-tax"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Tax
              </label>
              <input
                type="number"
                id="product-tax"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 pt-7">
            <div>
              <label
                for="stock-keeping-unit"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock Keeping Unit
              </label>
              <input
                type="text"
                id="stock-keeping-unit"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="product-specification"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Specification
              </label>
              <button
                type="button"
                class="h-11 w-full md:h-11 text-white bg-green-900 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                >
                  <path d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M40,34c1.104,0,2-0.895,2-2	c0-1.105-0.896-2-2-2c-0.248,0-2.913,0-6,0c0-3.087,0-5.752,0-6c0-1.104-0.895-2-2-2c-1.104,0-2,0.896-2,2c0,0.248,0,2.913,0,6	c-3.087,0-5.752,0-6,0c-1.104,0-2,0.895-2,2c0,1.105,0.896,2,2,2c0.248,0,2.913,0,6,0c0,3.087,0,5.752,0,6c0,1.104,0.896,2,2,2	c1.105,0,2-0.896,2-2c0-0.248,0-2.913,0-6C37.087,34,39.752,34,40,34z"></path>
                </svg>
                <span class="hidden md:inline ml-2">Specification</span>
              </button>
            </div>
          </div>
          <div className=" pt-7">
            <div className="mx-auto">
              <button
                type="button"
                className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* product table */}
     <ProductTable/>
    </div>
  );
}

export default Product;
