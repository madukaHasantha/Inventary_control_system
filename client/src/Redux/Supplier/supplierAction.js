import { SUPPLIER_GET_LIST} from "../constatnt"

export const supplierGetList = () => {
    console.log("supplierGetList action is called");
    return{
        type: SUPPLIER_GET_LIST
    }
}