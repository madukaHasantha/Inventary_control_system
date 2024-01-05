import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Product/productAction";



const ProductTable = () => {

  const dispatch = useDispatch();
  let productData = useSelector((state) => state.produtctReducerData);
  console.log("product data in main component", productData);
  


  useEffect(() => {
    dispatch(productList());
   
    
  }, []); 

  return (
    <div>
      {/* product table */}
      <div className="product-table p-[70px]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Action
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Product Name
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Availability
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Product Type
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Supplier Name
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Weight
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  flavor
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Power Consumption
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  size
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Material
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  color
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  brand
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Selling Price
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Cost Price
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Quantity
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Reorder Quantity
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Maximum Stock
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Minimum Stock
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Store Location
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Image
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Discount
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Tax Information
                </th>
                <th scope="col" className="px-10 py-3 border border-gray-300 dark:border-gray-600">
                  Stock Keeping Unit
                </th>
              </tr>
            </thead>
            <tbody>
                {productData.map((item) => <tr key={item.product_id} className="border-t border-gray-300 dark:border-gray-600">
                <td className="flex items-center px-6 py-4 border border-gray-300 dark:border-gray-600">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-[80px]"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 mb-[80px]"
                  >
                    Remove
                  </a>
                </td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.product_name}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.Availability}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.product_type_name}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.supplier_name}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.weight}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.flavor}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.power_consumption}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.size}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.material}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.color}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.brand}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.selling_price}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.cost_price}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.quantity}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.reorder_quantity}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.maximum_stock_level}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.minimum_stock_level}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.location_in_the_store}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600"><img src={item.product_images} alt = "product photo"/></td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.discount}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.tax_information}</td>
                <td className="px-6 py-4 border border-gray-300 dark:border-gray-600">{item.Stock_keeping_unit}</td>
              </tr>)}
              
            </tbody>
          </table>
         
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
