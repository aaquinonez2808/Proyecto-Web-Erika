import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMascotaA, startDeleteMascota } from "../store/mascota/thunks";

function MascotaPage() {
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispactch(startDeleteMascota(id));
  }
  const handleUpdate = async (id) => {
    await dispactch(getMascotaA(id));
    navigate(`form/${id}`);
  }


  const {mascotas} = useSelector((state) => state.mascota);
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">mascotas</h2>
      <div className="flex justify-end mb-4">
        <Link to={"form"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nuevo Mascota
        </Link>
      </div>
      <table className="w-full text-left table-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/8 p-2">Id</th>
            <th className="w-1/8 p-2">Nombre</th>
            <th className="w-1/8 p-2">Raza</th>
            <th className="w-1/8 p-2">Especie</th>
            <th className="w-1/8 p-2">Sexo</th>
            <th className="w-1/8 p-2">Fecha de Nacimiento</th>
            <th className="w-1/8 p-2">Propietario</th>
            <th className="w-1/8 p-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {
            mascotas && mascotas.map((mascota) => (
              <tr className="hover:bg-gray-100"
                key={mascota.id}
              >
                <td className="p-2 border-t">{mascota.id}</td>
                <td className="p-2 border-t">{mascota.nombre}</td>
                <td className="p-2 border-t">{mascota.raza}</td>
                <td className="p-2 border-t">{mascota.especie.nombre}</td>
                <td className="p-2 border-t">{mascota.sexo}</td>
                <td className="p-2 border-t">{mascota.fechaNacimiento}</td>
                <td className="p-2 border-t">{mascota.propietario.nombre}</td>
                <td className="p-2 border-t flex gap-2 justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleUpdate(mascota.id)}>
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleDelete(mascota.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default MascotaPage;