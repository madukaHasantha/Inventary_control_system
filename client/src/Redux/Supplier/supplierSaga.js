import { takeEvery, put, call } from "redux-saga/effects";
import {SUPPLIER_GET_LIST, SET_SUPPLIER_GET_LIST} from "../constatnt";



function* getSupplier() {
    try {
      console.log("getSupplier saga is called");
      let response = yield fetch(
        "http://localhost:4000/ICMS/supplierRouts/get_all_supplier"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch Supplier. Status: ${response.status}`);
      }
  
      let data = yield response.json();
      console.log("get Supplier saga is being called", data.data);
  
      yield put({ type: SET_SUPPLIER_GET_LIST, payload: data.data });
    } catch (error) {
      console.error("Error in getSupplier saga:", error);
    }
  }

  function* supplierSaga() {
    yield takeEvery(SUPPLIER_GET_LIST, getSupplier);
    // Add similar lines for update and delete if needed
  }
  
  export default supplierSaga;