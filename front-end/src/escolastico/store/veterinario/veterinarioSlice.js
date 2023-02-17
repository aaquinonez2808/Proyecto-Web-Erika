import { createSlice } from '@reduxjs/toolkit';

export const veterinarioSlice = createSlice({
    name: 'veterinario',
    initialState: {
        veterinarios: [],
        veterinario: {},
        loading: false,
        message: null,
    },
    reducers: {
        saveNewVeterinario: (state, action) => {
            state.veterinarios.push(action.payload);
        },
        getListVeterinario: (state, action) => {
            console.log(action.payload);
            state.veterinarios = action.payload.data;
            state.message = action.payload.message;
        },
        getVeterinarioOne: (state, action) => {
            state.veterinario = action.payload;
        },
        deleteVeterinarioOne: (state, action) => {
            state.veterinarios = state.veterinarios.filter(veterinario => veterinario.id !== action.payload);
        },
        updateVeterinarioOne: (state, action) => {
            state.veterinario = action.payload;
            state.veterinarios = state.veterinarios.map(veterinario => {
                if (veterinario.id === action.payload.id) {
                    return action.payload;
                } else {
                    return veterinario;
                }
            });
        },
        emptyVeterinario: (state, action) => {
            state.veterinario = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewVeterinario, getVeterinarioOne, getListVeterinario, deleteVeterinarioOne, updateVeterinarioOne, emptyVeterinario } = veterinarioSlice.actions;