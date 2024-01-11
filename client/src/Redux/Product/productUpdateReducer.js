
import { UPDATE_DATA_SUCCSESS, UPDATE_DATA_FAILD } from "../constatnt";

const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  export const ProductUpdateReducer = (state = initialState, action) => {
      console.log("action.type in Product Update Reducer", action.type);
    switch (action.type) {
      case 'PRODUCT_UPDATE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case UPDATE_DATA_SUCCSESS:
        return {
          ...state,
          loading: false,
          data: "Successfully Update Data",
        };
      case UPDATE_DATA_FAILD:
        return {
          ...state,
          loading: false,
          error: "Fail Update Data",
        };
      default:
        return state;
    }
  };
  
  
  
  