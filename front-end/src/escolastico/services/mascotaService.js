import { axiosInstance } from "./config";


export const getAllMascota = async () => {
    const {data}= await axiosInstance.get("api/mascota/list");
    return data;
}

export const getMascota = async (id) => {
    const {data}= await axiosInstance.get(`api/mascota/find/${id}`);
    console.log(data);
    return data;
}

export const createMascota = async (mascota) => {
    const {data}= await axiosInstance.post("api/mascota/save", mascota);
    return data;
}

export const updateMascota = async (mascota, id) => {
    const {data}= await axiosInstance.put(`api/mascota/update/${id}`, mascota);
    return data;
}

export const deleteMascota = async (id) => {
    const {data}= await axiosInstance.delete(`api/mascota/delete/${id}`);
    return data;
}
