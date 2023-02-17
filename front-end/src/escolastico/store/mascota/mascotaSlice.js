import { createSlice } from '@reduxjs/toolkit';

export const mascotaSlice = createSlice({
    name: 'mascota',
    initialState: {
        mascotas: [],
        mascota: {},
        loading: false,
        message: null,
    },
    reducers: {
        saveNewMascota: (state, action) => {
            state.mascotas.push(action.payload);
        },
        getListMascota: (state, action) => {
            console.log(action.payload);
            state.mascotas = action.payload.data;
            state.message = action.payload.message;
        },
        getMascotaOne: (state, action) => {
            state.mascota = action.payload;
        },
        deleteMascotaOne: (state, action) => {
            state.mascotas = state.mascotas.filter(mascota => mascota.id !== action.payload);
        },
        updateMascotaOne: (state, action) => {
            state.mascota = action.payload;
            state.mascotas = state.mascotas.map(mascota => {
                if (mascota.id === action.payload.id) {
                    return action.payload;
                } else {
                    return mascota;
                }
            });
        },
        emptyMascota: (state, action) => {
            state.mascota = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewMascota, getMascotaOne, getListMascota, deleteMascotaOne, updateMascotaOne, emptyMascota } = mascotaSlice.actions;