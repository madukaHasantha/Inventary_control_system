import { PRODUCT_LIST, PRODUCT_INSERT_LIST,PRODUCT_UPDATE_LIST,EDIT_FORM_DATA } from "../constatnt"

export const productList = () => {

    return{
        type: PRODUCT_LIST
    }
}

export const editProductDataList = (EditFormData) => {

  return{
      type: EDIT_FORM_DATA,
      payload: EditFormData,
  }
}

export const productInsertDataList = (formData) => {
  console.log("product Insert DataList is called", formData);
  return {
    type: PRODUCT_INSERT_LIST,
    payload: formData,
  };
};

export const productUpdateDataList = (formData) => {
  console.log("product Updatet DataList is called", formData);
  return {
    type: PRODUCT_UPDATE_LIST,
    payload: formData,
  };
};
