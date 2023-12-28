import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constatnt'


function* getProduct() {
    try {
      let response = yield fetch("http://localhost:3600/products");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
  
      let data = yield response.json();
      console.log("get product saga is being called", data);
      
      yield put({ type: SET_PRODUCT_LIST, payload: data });
    } catch (error) {
      console.error("Error in getProducts saga:", error);
    }
  }
  

function* postProduct (){

}

function* updateProduct (){

}

function* deleteProduct (){

}


function* productSaga(){

    yield takeEvery(PRODUCT_LIST ,getProduct)
}

export default productSaga;