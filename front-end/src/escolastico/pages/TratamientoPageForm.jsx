import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  startNewTratamiento,
  startUpdateTratamiento,
} from "../store/tratamiento/thunks";

export const TratamientoPageForm = () => {
  const [action, setAction] = useState("Nuevo");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tratamiento } = useSelector((state) => state.tratamiento);
  const { mascotas } = useSelector((state) => state.mascota);
  const { veterinarios } = useSelector((state) => state.veterinario);
  useEffect(() => {
    if (id) {
      setAction("Editar");
    }
  }, [id]);

  const {
    nombre,
    descripcion,
    mascotaId,
    observaciones,
    estado,
    fecha,
    veterinarioId,
    onInputChange,
    onResetForm,
  } = useForm({
    nombre: tratamiento?.nombre || "",
    descripcion: tratamiento?.descripcion || "",
    mascotaId: tratamiento?.mascota?.id || "",
    observaciones: tratamiento?.observaciones || "",
    estado: tratamiento?.estado || "",
    fecha: tratamiento?.fecha || "",
    veterinarioId: tratamiento?.veterinario?.id || "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mascota = mascotas.find((masco) => masco.id === parseInt(mascotaId));
    const veterinario = veterinarios.find(
      (vete) => vete.id === parseInt(veterinarioId)
    );
    if (action === "Editar") {
      await dispatch(
        startUpdateTratamiento({
          nombre,
          descripcion,
          mascota,
          observaciones,
          estado,
          fecha,
          veterinario,
          id: tratamiento.id,
        })
      );
    } else {
      await dispatch(
        startNewTratamiento({
          nombre,
          descripcion,
          mascota,
          observaciones,
          estado,
          fecha,
          veterinario,
        })
      );
    }
    onResetForm();
    navigate("/tratamientos");
  };
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">
        Nuevo Tratamiento
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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="descripcion">
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
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="estado">
            Estado
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="estado"
            name="estado"
            value={estado}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="observaciones">
            Observaciones
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="observaciones"
            name="observaciones"
            value={observaciones}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="fecha"
          >
            Fecha de Tratamiento
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="mascotaId"
          >
            Mascota
          </label>
          <select
            className="border border-gray-400 p-2 w-full"
            type="mascotaId"
            id="mascotaId"
            name="mascotaId"
            value={mascotaId}
            onChange={onInputChange}
          >
            <option value="">Seleccione una Mascota</option>
            {mascotas.map((espe) => (
              <option key={espe.id} value={espe.id}>
                {espe.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="veterinarioId"
          >
            Veterinario
          </label>
          <select
            className="border border-gray-400 p-2 w-full"
            type="veterinarioId"
            id="veterinarioId"
            name="veterinarioId"
            value={veterinarioId}
            onChange={onInputChange}
          >
            <option value="">Seleccione un veterinario</option>
            {veterinarios.map((prop) => (
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
