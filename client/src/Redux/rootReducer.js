import { combineReducers } from "@reduxjs/toolkit";
import { produtctReducerData } from "./Product/productReducer";
import { ProductPostReducer } from "./Product/ProductPostReducer";
import { produtctNameGetDataReducer } from "./Product Name/productNameGetReducer";
import { produtctTypeGetDataReducer } from "./Product Type/productTypeGetReducer";
import { supplierGetDataReducer } from "./Supplier/supplierGetReducer";


const rootReducer = combineReducers({ produtctReducerData, ProductPostReducer, produtctNameGetDataReducer, produtctTypeGetDataReducer, supplierGetDataReducer })

export default rootReducer;