import { axiosInstance } from "./config";


export const getAllTratamiento = async () => {
    const {data}= await axiosInstance.get("api/tratamiento/list");
    return data;
}

export const getTratamiento = async (id) => {
    const {data}= await axiosInstance.get(`api/tratamiento/find/${id}`);
    console.log(data);
    return data;
}

export const createTratamiento = async (tratamiento) => {
    const {data}= await axiosInstance.post("api/tratamiento/save", tratamiento);
    return data;
}

export const updateTratamiento = async (tratamiento, id) => {
    const {data}= await axiosInstance.put(`api/tratamiento/update/${id}`, tratamiento);
    return data;
}

export const deleteTratamiento = async (id) => {
    const {data}= await axiosInstance.delete(`api/tratamiento/delete/${id}`);
    return data;
}
