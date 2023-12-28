import { combineReducers } from "@reduxjs/toolkit";
import { produtctReducerData } from "./Product/productReducer";


const rootReducer = combineReducers({ produtctReducerData })

export default rootReducer;