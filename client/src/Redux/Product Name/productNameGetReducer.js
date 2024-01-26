import { SET_PRODUCT_NAME_GET_LIST } from "../constatnt";

const initialState = {
    emptyData: []
};

export const produtctNameGetDataReducer = (state = [], action) => {
  console.log("product name reducer data is calle", action.payload);

  switch (action.type) {
    case SET_PRODUCT_NAME_GET_LIST:
      return [...action.payload];
      
    default:
      return state;
  }
};