import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  createPropietario,
  updatePropietario,
} from "../services/propietarioService";
import {
  getPropietarioA,
  startNewPropietario,
  startUpdatePropietario,
} from "../store/propietario/thunks";

export const PropietarioPageForm = () => {
  const [action, setAction] = useState("Nuevo");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { propietario } = useSelector((state) => state.propietario);
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
    nombre: propietario?.nombre || "",
    cedula: propietario?.cedula || "",
    direccion: propietario?.direccion || "",
    telefono: propietario?.telefono || "",
    email: propietario?.email || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "Editar") {
      console.log(propietario);
      await dispatch(
        startUpdatePropietario({
          nombre,
          cedula,
          telefono,
          direccion,
          email,
          id: propietario.id,
        })
      );
    } else {
      await dispatch(
        startNewPropietario({ nombre, cedula, telefono, direccion, email })
      );
    }
    onResetForm();
    navigate("/propietarios");
  };
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">
        Nuevo Propietario
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
