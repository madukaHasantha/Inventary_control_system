import { takeEvery, put, call } from "redux-saga/effects";
import {PRODUCT_NAME_GET_LIST, SET_PRODUCT_NAME_GET_LIST} from "../constatnt";



function* getProductName() {
    try {
      console.log("getProductName saga is calle");
      let response = yield fetch(
        "http://localhost:4000/ICMS/productsNameRouts/get_all_products_names"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch product Names. Status: ${response.status}`);
      }
  
      let data = yield response.json();
      console.log("get product name saga is being called", data.data);
  
      yield put({ type: SET_PRODUCT_NAME_GET_LIST, payload: data.data });
    } catch (error) {
      console.error("Error in getProductName saga:", error);
    }
  }

  function* productNameSaga() {
    yield takeEvery(PRODUCT_NAME_GET_LIST, getProductName);
    // Add similar lines for update and delete if needed
  }
  
  export default productNameSaga;