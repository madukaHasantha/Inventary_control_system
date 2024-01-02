import { takeEvery, put, call } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  SET_PRODUCT_LIST,
  PRODUCT_INSERT_LIST,
} from "../constatnt";

function* getProduct() {
  try {
    console.log("getProduct is called");
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

function* postProduct(action) {
  try {
    console.log("Product saga, postProduct is called");
    const { formData } = action.payload;

    let response = yield fetch("http://localhost:3600/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to add product. Status: ${response.status}`);
    }

    // Assuming your server responds with the newly added product data
    let data = yield response.json();
    console.log("Product post responce Data",data);

    // Dispatch an action to update the product list with the new data
    yield put({ type: "POST_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error in postProduct saga:", error);
    yield put({ type: "POST_FAILURE", payload: error.message });
  }

  console.log("product post action type: ", action.type);
}

function* updateProduct() {
  // Add your update logic here
}

function* deleteProduct() {
  // Add your delete logic here
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
  yield takeEvery(PRODUCT_INSERT_LIST, postProduct);
  // Add similar lines for update and delete if needed
}

export default productSaga;
