import axios from "axios";

const api_url="http://localhost:8081/api";

export const getProducts=()=>{
    return axios.get(`${api_url}/products`);
}

export const getProductById=(id)=>{
    return axios.get(`${api_url}/products/${id}`);
}

export const addProduct=(product)=>{
    return axios.post(`${api_url}/products`,product);
}

export const updateProduct=(id,product)=>{   
    return axios.put(`${api_url}/products/${id}`,product);
}

export const deleteProduct=(id)=>{   
    return axios.delete(`${api_url}/products/${id}`);
}