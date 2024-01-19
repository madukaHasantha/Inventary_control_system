import { takeEvery, put, call } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  SET_PRODUCT_LIST,
  PRODUCT_INSERT_LIST,
  PRODUCT_UPDATE_LIST,
  UPDATE_DATA_SUCCSESS,
  UPDATE_DATA_FAILD,
} from "../constatnt";

function* getProduct() {
  try {
    console.log("getProduct saga is called");
    let response = yield fetch(
      "http://localhost:4000/ICMS/productsRouts/get_all_products"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    let data = yield response.json();
    console.log("get product saga is being called", data.data);

    yield put({ type: SET_PRODUCT_LIST, payload: data.data });
  } catch (error) {
    console.error("Error in getProducts saga:", error);
  }
}

function* postProduct(action) {
  try {
    console.log("Product saga, Add Product is called");
    const formData = action.payload;

    console.log("Add Form data", formData);

    let response = yield fetch(
      "http://localhost:4000/ICMS/productsRouts/add_products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to Add product. Status: ${response.status}`);
    }

    // Assuming your server responds with the newly added product data
    let data = yield response.json();
    console.log("Product Add responce Data",data, data.message);

    // Dispatch an action to update the product list with the new data
    yield put({ type: "POST_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error in Add Product saga:", error);
    yield put({ type: "POST_FAILURE", payload: error.message });
  }

  console.log("product Add action type: ", action.type);
}



function* updateProduct(action) {
  try {
    console.log("Product saga, Update Product is called");
    const updateFormData = action.payload;

    console.log("Update Form data", updateFormData);

    let response = yield fetch(
      "http://localhost:4000/ICMS/productsRouts/edit_products",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateFormData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to update product. Status: ${response.status}`);
    }

    // Assuming your server responds with the newly Update product data
    let data = yield response.json();
    console.log("Product update responce Data",data, data.message);

    // Dispatch an action to update the product update list with the new data
    yield put({ type: UPDATE_DATA_SUCCSESS, payload: data });
  } catch (error) {
    console.error("Error in Update Product saga:", error);
    yield put({ type: UPDATE_DATA_FAILD, payload: error.message });
  }

  console.log("product update action type: ", action.type);
}

function* deleteProduct() {
  
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
  yield takeEvery(PRODUCT_INSERT_LIST, postProduct);
  yield takeEvery(PRODUCT_UPDATE_LIST, updateProduct);
  // Add similar lines for update and delete if needed
}

export default productSaga;
