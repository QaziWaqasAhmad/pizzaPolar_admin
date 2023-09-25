import Api from "../index";
import { endPoints, requestType } from "../../constants/variables";


export const getAllProducts = (token) => {
    return Api(`${endPoints.getAllProducts}`, null, requestType.GET,token) 
}

export const addProduct = (token,body) => {
    return Api(`${endPoints.addProduct}`,body ,requestType.POST,token) 
}
export const loginAdmin = (params) => {
    return Api(`${endPoints.loginAdmin}`, params, requestType.POST,null) 
}

