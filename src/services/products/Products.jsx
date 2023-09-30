import Api from "../index";
import { endPoints, requestType } from "../../constants/variables";


// Login
export const loginAdmin = (params) => {
    return Api(`${endPoints.loginAdmin}`, params, requestType.POST,null) 
}
// Products
export const getAllProducts = (token, page) => {
    return Api(`${endPoints.getAllProducts}?page=${page}`, null, requestType.GET,token) 
}
export const addProduct = (token,body) => {
    return Api(`${endPoints.addProduct}`,body ,requestType.POST,token) 
}
export const deleteProduct = (token, id) => {
    return Api(`${endPoints.deleteProduct}/${id}`, null, requestType.DELETE, token); 
}
 
// Category 
export const addCategory = (token, body) =>{
    return Api (`${endPoints.createCategory}`, body, requestType.POST,token)
}
export const getCategory = (token, page) =>{
    return Api(`${endPoints.getAllCategories}?page=${page}`, null, requestType.GET, token)
}
export const editCategory = (token,body,id) =>{
    return Api(`${endPoints.updateCategory}/${id}`, body, requestType.PUT, token)
}
export const deleteCategories = (token, id) =>{
    return Api(`${endPoints.deleteCategory}/${id}`, null, requestType.DELETE, token)
}
