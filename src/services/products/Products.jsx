import Api from "../index";
import { endPoints, requestType } from "../../constants/Variables";

//Jobs apis

export const getAllProducts = (token) => {
    return Api(`${endPoints.getAllProducts}`, null, requestType.GET,token) 
}

