import { combineReducers } from "@reduxjs/toolkit";
import { produtctReducerData } from "./Product/productReducer";
import { ProductPostReducer } from "./Product/ProductPostReducer";


const rootReducer = combineReducers({ produtctReducerData, ProductPostReducer })

export default rootReducer;