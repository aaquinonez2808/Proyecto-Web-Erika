import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  startNewMascota,
  startUpdateMascota,
} from "../store/mascota/thunks";

export const MascotaPageForm = () => {
  const [action, setAction] = useState("Nuevo");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mascota } = useSelector((state) => state.mascota);
  const { especies } = useSelector((state) => state.especie);
  const { propietarios } = useSelector((state) => state.propietario);
  useEffect(() => {
    console.log(especies);
    if (id) {
      setAction("Editar");
    }
  }, [id]);


  const {
    nombre,
    raza,
    especieId,
    sexo,
    fechaNacimiento,
    propietarioId,
    onInputChange,
    onResetForm,
  } = useForm({
    nombre: mascota?.nombre || "",
    raza: mascota?.raza || "",
    especieId: mascota?.especie?.id || "",
    sexo: mascota?.sexo || "",
    fechaNacimiento: mascota?.fechaNacimiento || "",
    propietarioId: mascota?.propietario?.id || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const especie = especies.find((espe) => espe.id === parseInt(especieId));
    const propietario = propietarios.find((prop) => prop.id === parseInt(propietarioId));
    if (action === "Editar") {
      await dispatch(
        startUpdateMascota({
          nombre,
          raza,
          sexo,
          fechaNacimiento,
          especie,
          propietario,
          id: mascota.id,
        })
      );
    } else {
      await dispatch(
        startNewMascota({ nombre,
          raza,
          sexo,
          fechaNacimiento,
          especie,
          propietario})
      );
    }
    onResetForm();
    navigate("/mascotas");
  };
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">
        Nueva Mascota
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
            htmlFor="raza"
          >
            Raza
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="raza"
            name="raza"
            value={raza}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="sexo"
          >
            Sexo
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="sexo"
            name="sexo"
            value={sexo}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="fechaNacimiento"
          >
            Fecha de Nacimiento
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={fechaNacimiento}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="especieId">
            Especie
          </label>
          <select
            className="border border-gray-400 p-2 w-full"
            type="especieId"
            id="especieId"
            name="especieId"
            value={especieId}
            onChange={onInputChange}
          >
            <option value="">Seleccione una Especie</option>
            {especies.map((espe) => (
              <option key={espe.id} value={espe.id}>
                {espe.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="propietarioId">
            Propietario
          </label>
          <select
            className="border border-gray-400 p-2 w-full"
            type="propietarioId"
            id="propietarioId"
            name="propietarioId"
            value={propietarioId}
            onChange={onInputChange}
          >
            <option value="">Seleccione un propietario</option>
            {propietarios.map((prop) => (
              <option key={prop.id} value={prop.id}>
                {prop.nombre}
              </option>
            ))}
          </select>
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
