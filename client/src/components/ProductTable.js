import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Product/productAction";

const ProductTable = () => {

  const dispatch = useDispatch();
  let productData = useSelector((state) => state.produtctReducerData);
  console.log("data in main component", productData);

 useEffect(() =>{
  
  dispatch(productList())
 }, [])

  return (
    <div>
      {/* product table */}
      <div className="product-table p-[70px]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-10 py-3">
                  Action
                </th>
                <th scope="col" class="px-10 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-10 py-3">
                  Availability
                </th>
                <th scope="col" class="px-10 py-3">
                  Product Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Supplier Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Weight
                </th>
                <th scope="col" class="px-6 py-3">
                  flavor
                </th>
                <th scope="col" class="px-6 py-3">
                  Power Consumption
                </th>
                <th scope="col" class="px-6 py-3">
                  size
                </th>
                <th scope="col" class="px-6 py-3">
                  Material
                </th>
                <th scope="col" class="px-6 py-3">
                  color
                </th>
                <th scope="col" class="px-6 py-3">
                  brand
                </th>
                <th scope="col" class="px-6 py-3">
                  Selling Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Cost Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Reorder Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Maximum Stock
                </th>
                <th scope="col" class="px-6 py-3">
                  Minimum Stock
                </th>
                <th scope="col" class="px-6 py-3">
                  Store Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Discount
                </th>
                <th scope="col" class="px-6 py-3">
                  Tax Information
                </th>
                <th scope="col" class="px-6 py-3">
                  Stock Keeping Unit
                </th>
              </tr>
            </thead>
            <tbody>
                {productData.map((item) => <tr key={item.id}>
                <td class="flex items-center px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
                <td class="px-6 py-4">{item.Productname}</td>
                <td class="px-6 py-4">{item.Availability}</td>
                <td class="px-6 py-4">{item.ProductType}</td>
                <td class="px-6 py-4">{item.SupplierName}</td>
                <td class="px-6 py-4">{item.Weight}</td>
                <td class="px-6 py-4">{item.flavor}</td>
                <td class="px-6 py-4">{item.PowerConsumption}</td>
                <td class="px-6 py-4">{item.size}</td>
                <td class="px-6 py-4">{item.Material}</td>
                <td class="px-6 py-4">{item.color}</td>
                <td class="px-6 py-4">{item.brand}</td>
                <td class="px-6 py-4">{item.SellingPrice}</td>
                <td class="px-6 py-4">{item.CostPrice}</td>
                <td class="px-6 py-4">{item.Quantity}</td>
                <td class="px-6 py-4">{item.ReorderQuantity}</td>
                <td class="px-6 py-4">{item.MaximumStock}</td>
                <td class="px-6 py-4">{item.MinimumStock}</td>
                <td class="px-6 py-4">{item.StoreLocation}</td>
                <td class="px-6 py-4"><img src={item.Image} alt = "product photo"/></td>
                <td class="px-6 py-4">{item.Discount}</td>
                <td class="px-6 py-4">{item.TaxInformation}</td>
                <td class="px-6 py-4">{item.StockKeepingUnit}</td>
              </tr>)}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
