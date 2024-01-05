import { SET_SUPPLIER_GET_LIST } from "../constatnt";

const initialState = {
    emptyData: []
};

export const supplierGetDataReducer = (state = [], action) => {
  console.log("supplier reducer data is called", action.payload);

  switch (action.type) {
    case SET_SUPPLIER_GET_LIST:
      return [...action.payload];
      
    default:
      return state;
  }
};