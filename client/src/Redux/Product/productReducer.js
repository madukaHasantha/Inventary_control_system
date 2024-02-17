import { SET_PRODUCT_LIST } from "../constatnt";

const initialState = {
    emptyData: []
};

export const produtctReducerData = (state = [], action) => {
  console.log("product reducer data is called", action.payload);

  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.payload];
      
    default:
      return state;
  }
};
