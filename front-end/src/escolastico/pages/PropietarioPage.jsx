import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPropietarioA, startDeletePropietario } from "../store/propietario/thunks";

function PropietarioPage() {
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispactch(startDeletePropietario(id));
  }
  const handleUpdate = async (id) => {
    await dispactch(getPropietarioA(id));
    navigate(`form/${id}`);
  }


  const {propietarios} = useSelector((state) => state.propietario);
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">Propietarios</h2>
      <div className="flex justify-end mb-4">
        <Link to={"form"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nuevo Propietario
        </Link>
      </div>
      <table className="w-full text-left table-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/8 p-2">Id</th>
            <th className="w-1/8 p-2">Nombre</th>
            <th className="w-1/8 p-2">Cédula</th>
            <th className="w-1/8 p-2">Dirección</th>
            <th className="w-1/8 p-2">Teléfono</th>
            <th className="w-1/8 p-2">Email</th>
            <th className="w-1/8 p-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {
            propietarios && propietarios.map((propietario) => (
              <tr className="hover:bg-gray-100"
                key={propietario.id}
              >
                <td className="p-2 border-t">{propietario.id}</td>
                <td className="p-2 border-t">{propietario.nombre}</td>
                <td className="p-2 border-t">{propietario.cedula}</td>
                <td className="p-2 border-t">{propietario.direccion}</td>
                <td className="p-2 border-t">{propietario.telefono}</td>
                <td className="p-2 border-t">{propietario.email}</td>
                <td className="p-2 border-t flex gap-2 justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleUpdate(propietario.id)}>
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleDelete(propietario.id)}>
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

export default PropietarioPage;