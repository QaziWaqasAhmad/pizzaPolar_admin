import axios from "axios";
// let baseUrl = "https://pizzapolarbackend-production-08e2.up.railway.app/api/"; 
let baseUrl = "http://192.168.1.114:5000/api/"; 

const api = async (path, params, method,token) => {
    let options;
    options = {
        headers: {
            "Content-Type": "application/json",
            "Authorization":token
        }, 
        method: method,
        ...(params && { data: JSON.stringify(params)}),  
    };
    return axios(baseUrl + path, options)
        .then((response) => {
            return response; 
        })
        .catch(async (error) => {
            return error.response;
        });
};

export default api;