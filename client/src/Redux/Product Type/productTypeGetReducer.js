import { SET_PRODUCT_TYPE_GET_LIST } from "../constatnt";

const initialState = {
    emptyData: []
};

export const produtctTypeGetDataReducer = (state = [], action) => {
  console.log("product type reducer data is call", action.payload);

  switch (action.type) {
    case SET_PRODUCT_TYPE_GET_LIST:
      return [...action.payload];
      
    default:
      return state;
  }
};