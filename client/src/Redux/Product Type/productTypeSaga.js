import { takeEvery, put, call } from "redux-saga/effects";
import {PRODUCT_TYPE_GET_LIST, SET_PRODUCT_TYPE_GET_LIST} from "../constatnt";



function* getProductType() {
    try {
      console.log("getProductType saga is called");
      let response = yield fetch(
        "http://localhost:4000/ICMS/productsTypeRouts/get_all_products_types"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch product Types. Status: ${response.status}`);
      }
  
      let data = yield response.json();
      console.log("get product type saga is being called", data.data);
  
      yield put({ type: SET_PRODUCT_TYPE_GET_LIST, payload: data.data });
    } catch (error) {
      console.error("Error in getProductType saga:", error);
    }
  }

  function* productTypeSaga() {
    yield takeEvery(PRODUCT_TYPE_GET_LIST, getProductType);
    // Add similar lines for update and delete if needed
  }
  
  export default productTypeSaga;