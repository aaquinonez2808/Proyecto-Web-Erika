import { axiosInstance } from "./config";


export const getAllVeterinario = async () => {
    const {data}= await axiosInstance.get("api/veterinario/list");
    return data;
}

export const getVeterinario = async (id) => {
    const {data}= await axiosInstance.get(`api/veterinario/find/${id}`);
    console.log(data);
    return data;
}

export const createVeterinario = async (veterinario) => {
    const {data}= await axiosInstance.post("api/veterinario/save", veterinario);
    return data;
}

export const updateVeterinario = async (veterinario, id) => {
    const {data}= await axiosInstance.put(`api/veterinario/update/${id}`, veterinario);
    return data;
}

export const deleteVeterinario = async (id) => {
    const {data}= await axiosInstance.delete(`api/veterinario/delete/${id}`);
    return data;
}
