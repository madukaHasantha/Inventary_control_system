import { combineReducers } from "@reduxjs/toolkit";
import { produtctReducerData } from "./Product/productReducer";
import { ProductPostReducer } from "./Product/ProductPostReducer";
import { produtctNameGetDataReducer } from "./Product Name/productNameGetReducer";
import { produtctTypeGetDataReducer } from "./Product Type/productTypeGetReducer";
import { supplierGetDataReducer } from "./Supplier/supplierGetReducer";
import { ProductUpdateReducer } from "./Product/productUpdateReducer";


const rootReducer = combineReducers({ produtctReducerData, ProductPostReducer, produtctNameGetDataReducer, produtctTypeGetDataReducer, supplierGetDataReducer,  ProductUpdateReducer})

export default rootReducer;