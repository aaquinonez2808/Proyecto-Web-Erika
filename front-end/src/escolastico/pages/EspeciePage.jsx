import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getEspecieA, startDeleteEspecie } from "../store/especie/thunks";

function EspeciePage() {
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispactch(startDeleteEspecie(id));
  }
  const handleUpdate = async (id) => {
    await dispactch(getEspecieA(id));
    navigate(`form/${id}`);
  }


  const {especies} = useSelector((state) => state.especie);
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">Especies</h2>
      <div className="flex justify-end mb-4">
        <Link to={"form"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nuevo Especie
        </Link>
      </div>
      <table className="w-full text-left table-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/8 p-2">Id</th>
            <th className="w-1/8 p-2">Nombre</th>
            <th className="w-1/8 p-2">Descripcion</th>
            <th className="w-1/8 p-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {
            especies && especies.map((especie) => (
              <tr className="hover:bg-gray-100"
                key={especie.id}
              >
                <td className="p-2 border-t">{especie.id}</td>
                <td className="p-2 border-t">{especie.nombre}</td>
                <td className="p-2 border-t">{especie.descripcion}</td>
                <td className="p-2 border-t flex gap-2 justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleUpdate(especie.id)}>
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleDelete(especie.id)}>
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

export default EspeciePage;