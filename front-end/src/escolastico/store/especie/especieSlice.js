import { createSlice } from '@reduxjs/toolkit';

export const especieSlice = createSlice({
    name: 'especie',
    initialState: {
        especies: [],
        especie: {},
        loading: false,
        message: null,
    },
    reducers: {
        saveNewEspecie: (state, action) => {
            state.especies.push(action.payload);
        },
        getListEspecie: (state, action) => {
            console.log(action.payload);
            state.especies = action.payload.data;
            state.message = action.payload.message;
        },
        getEspecieOne: (state, action) => {
            state.especie = action.payload;
        },
        deleteEspecieOne: (state, action) => {
            state.especies = state.especies.filter(especie => especie.id !== action.payload);
        },
        updateEspecieOne: (state, action) => {
            state.especie = action.payload;
            state.especies = state.especies.map(especie => {
                if (especie.id === action.payload.id) {
                    return action.payload;
                } else {
                    return especie;
                }
            });
        },
        emptyEspecie: (state, action) => {
            state.especie = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewEspecie, getEspecieOne, getListEspecie, deleteEspecieOne, updateEspecieOne, emptyEspecie } = especieSlice.actions;