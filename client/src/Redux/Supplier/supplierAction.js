import { SUPPLIER_GET_LIST} from "../constatnt"

export const supplierGetList = () => {
    console.log("supplierGetList action is calledd");
    return{
        type: SUPPLIER_GET_LIST
    }
}