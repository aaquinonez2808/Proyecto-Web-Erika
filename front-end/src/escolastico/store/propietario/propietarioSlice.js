import { createSlice } from '@reduxjs/toolkit';

export const propietarioSlice = createSlice({
    name: 'propietario',
    initialState: {
        propietarios: [],
        propietario: {},
        loading: false,
        message: null,
    },
    reducers: {
        saveNewPropietario: (state, action) => {
            state.propietarios.push(action.payload);
        },
        getListPropietario: (state, action) => {
            console.log(action.payload);
            state.propietarios = action.payload.data;
            state.message = action.payload.message;
        },
        getPropietarioOne: (state, action) => {
            state.propietario = action.payload;
        },
        deletePropietarioOne: (state, action) => {
            state.propietarios = state.propietarios.filter(propietario => propietario.id !== action.payload);
        },
        updatePropietarioOne: (state, action) => {
            state.propietario = action.payload;
            state.propietarios = state.propietarios.map(propietario => {
                if (propietario.id === action.payload.id) {
                    return action.payload;
                } else {
                    return propietario;
                }
            });
        },
        emptyPropietario: (state, action) => {
            state.propietario = {};
        }            
    }
});


// Action creators are generated for each case reducer function
export const { saveNewPropietario, getPropietarioOne, getListPropietario, deletePropietarioOne, updatePropietarioOne, emptyPropietario } = propietarioSlice.actions;