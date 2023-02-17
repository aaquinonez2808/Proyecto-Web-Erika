import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  startNewVeterinario,
  startUpdateVeterinario,
} from "../store/veterinario/thunks";

export const VeterinarioPageForm = () => {
  const [action, setAction] = useState("Nuevo");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { veterinario } = useSelector((state) => state.veterinario);
  useEffect(() => {
    if (id) {
      setAction("Editar");
    }
  }, [id]);


  const {
    nombre,
    cedula,
    direccion,
    telefono,
    email,
    onInputChange,
    onResetForm,
  } = useForm({
    nombre: veterinario?.nombre || "",
    cedula: veterinario?.cedula || "",
    direccion: veterinario?.direccion || "",
    telefono: veterinario?.telefono || "",
    email: veterinario?.email || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "Editar") {
      console.log(veterinario);
      await dispatch(
        startUpdateVeterinario({
          nombre,
          cedula,
          telefono,
          direccion,
          email,
          id: veterinario.id,
        })
      );
    } else {
      await dispatch(
        startNewVeterinario({ nombre, cedula, telefono, direccion, email })
      );
    }
    onResetForm();
    navigate("/veterinarios");
  };
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">
        Nuevo Veterinario
      </h2>
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cedula"
          >
            Cédula
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="cedula"
            name="cedula"
            value={cedula}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="direccion"
          >
            Dirección
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="direccion"
            name="direccion"
            value={direccion}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="telefono"
            name="telefono"
            value={telefono}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
