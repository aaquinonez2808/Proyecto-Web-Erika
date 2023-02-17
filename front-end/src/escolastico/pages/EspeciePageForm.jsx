import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  createEspecie,
  updateEspecie,
} from "../services/especieService";
import {
  getEspecieA,
  startNewEspecie,
  startUpdateEspecie,
} from "../store/especie/thunks";

export const EspeciePageForm = () => {
  const [action, setAction] = useState("Nuevo");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { especie } = useSelector((state) => state.especie);
  useEffect(() => {
    if (id) {
      setAction("Editar");
    }
  }, [id]);


  const {
    nombre,
    descripcion,
    onInputChange,
    onResetForm,
  } = useForm({
    nombre: especie?.nombre || "",
    descripcion: especie?.descripcion || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "Editar") {
      console.log(especie);
      await dispatch(
        startUpdateEspecie({
          nombre,
          descripcion,
          id: especie.id,
        })
      );
    } else {
      await dispatch(
        startNewEspecie({ nombre, descripcion })
      );
    }
    onResetForm();
    navigate("/especies");
  };
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">
        Nueva Especie
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
            htmlFor="descripcion"
          >
            Descripcion
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
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
