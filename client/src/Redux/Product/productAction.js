import { PRODUCT_LIST, PRODUCT_INSERT_LIST } from "../constatnt"

export const productList = () => {

    return{
        type: PRODUCT_LIST
    }
}

export const productInsertDataList = (formData) => {
  console.log("productInsertDataList is called", formData);
  return {
    type: PRODUCT_INSERT_LIST,
    payload: formData,
  };
};
