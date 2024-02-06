import { PRODUCT_TYPE_GET_LIST} from "../constatnt"

export const productTypeGetList = () => {
    console.log("productTypeGetList action is call");
    return{
        type: PRODUCT_TYPE_GET_LIST
    }
}