import { PRODUCT_LIST, PRODUCT_INSERT_LIST,PRODUCT_UPDATE_LIST } from "../constatnt"

export const productList = () => {

    return{
        type: PRODUCT_LIST
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
