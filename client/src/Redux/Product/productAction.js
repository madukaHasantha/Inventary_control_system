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

export const productInsertDataList = (updateFormData) => {
  console.log("product action Insert DataList is called", updateFormData);
  return {
    type: PRODUCT_INSERT_LIST,
    payload: updateFormData,
  };
};

export const productUpdateDataList = (formData) => {
  console.log("product action Updatet DataList is call", formData);
  return {
    type: PRODUCT_UPDATE_LIST,
    payload: formData,
  };
};
