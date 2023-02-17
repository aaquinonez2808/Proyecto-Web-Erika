import { axiosInstance } from "./config";


export const getAllPropietario = async () => {
    const {data}= await axiosInstance.get("api/propietario/list");
    return data;
}

export const getPropietario = async (id) => {
    const {data}= await axiosInstance.get(`api/propietario/find/${id}`);
    console.log(data);
    return data;
}

export const createPropietario = async (propietario) => {
    const {data}= await axiosInstance.post("api/propietario/save", propietario);
    return data;
}

export const updatePropietario = async (propietario, id) => {
    const {data}= await axiosInstance.put(`api/propietario/update/${id}`, propietario);
    return data;
}

export const deletePropietario = async (id) => {
    const {data}= await axiosInstance.delete(`api/propietario/delete/${id}`);
    return data;
}
