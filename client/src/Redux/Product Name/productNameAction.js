import { PRODUCT_NAME_GET_LIST} from "../constatnt"

export const productNameGetList = () => {
    console.log("productNameGetList action is called");
    return{
        type: PRODUCT_NAME_GET_LIST
    }
}