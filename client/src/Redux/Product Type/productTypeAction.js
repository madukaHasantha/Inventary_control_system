import { PRODUCT_TYPE_GET_LIST} from "../constatnt"

export const productTypeGetList = () => {
    console.log("productTypeGetList action is calle");
    return{
        type: PRODUCT_TYPE_GET_LIST
    }
}