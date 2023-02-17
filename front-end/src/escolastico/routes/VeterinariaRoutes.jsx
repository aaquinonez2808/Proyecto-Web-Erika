import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useCheckAuth } from "../hooks/useAuthenticated";
import EspeciePage from "../pages/EspeciePage";
import { EspeciePageForm } from "../pages/EspeciePageForm";
import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MascotaPage from "../pages/MascotaPage";
import { MascotaPageForm } from "../pages/MascotaPageForm";
import PropietarioPage from "../pages/PropietarioPage";
import { PropietarioPageForm } from "../pages/PropietarioPageForm";
import TratamientoPage from "../pages/TratamientoPage";
import { TratamientoPageForm } from "../pages/TratamientoPageForm";
import VeterinarioPage from "../pages/VeterinarioPage";
import { VeterinarioPageForm } from "../pages/VeterinarioPageForm";

export const VeterinariaRoutes = () => {
  const status = useCheckAuth();

  return (
    <>
      {(status === 'authenticated') ? (
        <div className="flex w-screen h-screen">
          <Sidebar />
          <div className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propietarios" element={<PropietarioPage />} />
            <Route path="/propietarios/form" element={<PropietarioPageForm/>} />
            <Route path="/propietarios/form/:id" element={<PropietarioPageForm/>} />
            <Route path="/veterinarios" element={<VeterinarioPage />} />
            <Route path="/veterinarios/form" element={<VeterinarioPageForm/>} />
            <Route path="/veterinarios/form/:id" element={<VeterinarioPageForm/>} />
            <Route path="/especies" element={<EspeciePage/>} />
            <Route path="/especies/form" element={<EspeciePageForm/>} />
            <Route path="/especies/form/:id" element={<EspeciePageForm/>} />
            <Route path="/mascotas" element={<MascotaPage/>} />
            <Route path="/mascotas/form" element={<MascotaPageForm/>} />
            <Route path="/mascotas/form/:id" element={<MascotaPageForm/>} />
            <Route path="/tratamientos" element={<TratamientoPage/>} />
            <Route path="/tratamientos/form" element={<TratamientoPageForm/>} />
            <Route path="/tratamientos/form/:id" element={<TratamientoPageForm/>} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
};
