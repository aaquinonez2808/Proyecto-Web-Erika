import { axiosInstance } from "./config";


export const getAllEspecie = async () => {
    const {data}= await axiosInstance.get("api/especie/list");
    return data;
}

export const getEspecie = async (id) => {
    const {data}= await axiosInstance.get(`api/especie/find/${id}`);
    console.log(data);
    return data;
}

export const createEspecie = async (especie) => {
    const {data}= await axiosInstance.post("api/especie/save", especie);
    return data;
}

export const updateEspecie = async (especie, id) => {
    const {data}= await axiosInstance.put(`api/especie/update/${id}`, especie);
    return data;
}

export const deleteEspecie = async (id) => {
    const {data}= await axiosInstance.delete(`api/especie/delete/${id}`);
    return data;
}
