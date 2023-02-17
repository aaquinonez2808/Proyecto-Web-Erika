import { createSlice } from '@reduxjs/toolkit';

export const tratamientoSlice = createSlice({
    name: 'tratamiento',
    initialState: {
        tratamientos: [],
        tratamiento: {},
        loading: false,
        message: null,
    },
    reducers: {
        saveNewTratamiento: (state, action) => {
            state.tratamientos.push(action.payload);
        },
        getListTratamiento: (state, action) => {
            console.log(action.payload);
            state.tratamientos = action.payload.data;
            state.message = action.payload.message;
        },
        getTratamientoOne: (state, action) => {
            state.tratamiento = action.payload;
        },
        deleteTratamientoOne: (state, action) => {
            state.tratamientos = state.tratamientos.filter(tratamiento => tratamiento.id !== action.payload);
        },
        updateTratamientoOne: (state, action) => {
            state.tratamiento = action.payload;
            state.tratamientos = state.tratamientos.map(tratamiento => {
                if (tratamiento.id === action.payload.id) {
                    return action.payload;
                } else {
                    return tratamiento;
                }
            });
        },
        emptyTratamiento: (state, action) => {
            state.tratamiento = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewTratamiento, getTratamientoOne, getListTratamiento, deleteTratamientoOne, updateTratamientoOne, emptyTratamiento } = tratamientoSlice.actions;