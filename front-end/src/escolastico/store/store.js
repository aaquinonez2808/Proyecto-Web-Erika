
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { especieSlice } from './especie/especieSlice';
import { mascotaSlice } from './mascota/mascotaSlice';
import { propietarioSlice } from './propietario/propietarioSlice';
import { tratamientoSlice } from './tratamiento/tratamientoSlice';
import { veterinarioSlice } from './veterinario/veterinarioSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    propietario: propietarioSlice.reducer,
    especie : especieSlice.reducer,
    mascota: mascotaSlice.reducer,
    tratamiento: tratamientoSlice.reducer,
    veterinario: veterinarioSlice.reducer,
  },
});