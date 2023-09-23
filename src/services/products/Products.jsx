import Api from "../index";
import { endPoints, requestType } from "../../constants/variables";


export const getAllProducts = (token) => {
    return Api(`${endPoints.getAllProducts}`, null, requestType.GET,token) 
}
export const loginAdmin = () => {
    return Api(`${endPoints.loginAdmin}`, null, requestType.POST,null) 
}

