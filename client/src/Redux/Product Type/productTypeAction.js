import { PRODUCT_TYPE_GET_LIST} from "../constatnt"

export const productTypeGetList = () => {
    console.log("productTypeGetList action is called");
    return{
        type: PRODUCT_TYPE_GET_LIST
    }
}