import { axiosInstance } from "./config";
import decode from 'jwt-decode';

export const loginWithEmailPassword = async (user) => {
    try {
    const  {data}  = await axiosInstance.post('/api/login', user);
    localStorage.setItem('token', data);
    //decodificar el token
    const decoded = decode(data);
    return {
        ok: true,
        email: decoded.email,
        nombre: decoded.nombre
    }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutWithEmailPassword = async () => {
    try {
        localStorage.removeItem('token');
    } catch (error) {
        console.log(error);
    }
}
