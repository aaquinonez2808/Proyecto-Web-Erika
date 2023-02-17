
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth/authSlice';
import decode from 'jwt-decode';
import { getListPropietarios } from '../store/propietario/thunks';
import { getListEspecies } from '../store/especie/thunks';
import { getListVeterinarios } from '../store/veterinario/thunks';
import { getListTratamientos } from '../store/tratamiento/thunks';
import { getListMascotas } from '../store/mascota/thunks';


export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const {email, nombre} = decode(token);
            dispatch( login({email, nombre}) );
            dispatch( getListPropietarios() );
            dispatch( getListEspecies() );
            dispatch( getListMascotas() );
            dispatch( getListTratamientos() );
            dispatch( getListVeterinarios() );
        } else {
            dispatch( logout() );
        }
    }, []);

    return status;
}