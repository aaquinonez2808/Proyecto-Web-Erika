import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTratamientoA, startDeleteTratamiento } from "../store/tratamiento/thunks";
import jsPDF from "jspdf";
import "jspdf-autotable";

function TratamientoPage() {
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispactch(startDeleteTratamiento(id));
  }
  const handleUpdate = async (id) => {
    await dispactch(getTratamientoA(id));
    navigate(`form/${id}`);
  }

  const handleExportPdf = () => {
    generatePdf(tratamientos);
  };
  const generatePdf = (tratamientos) => {
    const doc = new jsPDF();
    doc.text("Reporte de Tratamientos", 10, 10);
    doc.autoTable({
      startY: 20,
      head: [["Id", "Nombre", "Descripcion", "Estado", "Observaciones", "Fecha", "Veterinario", "Mascota"]],
      body: tratamientos.map((item) => [
        item.id,
        item.nombre,item.descripcion,
        item.estado,
        item.observaciones,
        item.fecha,
        item.veterinario.nombre,
        item.mascota.nombre,
      ]),
      styles: {
        fontSize: 12,
        cellPadding: 2,
        valign: "middle",
        halign: "center",
      },
      headStyles: {
        fillColor: "#000000",
        textColor: "#ffffff",
        lineWidth: 0.1,
      },
    });
    doc.save("reporte_tratamientos.pdf");
  };

  const {tratamientos} = useSelector((state) => state.tratamiento);
  return (
    <div className="mx-20">
      <h2 className="text-2xl font-bold text-center mt-6 mb-4">tratamientos</h2>
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleExportPdf}
        >
          Exportar PDF
        </button>
        <Link to={"form"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nuevo Tratamiento
        </Link>
      </div>
      <table className="w-full text-left table-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/8 p-2">Id</th>
            <th className="w-1/8 p-2">Nombre</th>
            <th className="w-1/8 p-2">descripcion</th>
            <th className="w-1/8 p-2">Mascota</th>
            <th className="w-1/8 p-2">estado</th>
            <th className="w-1/8 p-2">Observaciones</th>
            <th className="w-1/8 p-2">Fecha de Tratamiento</th>
            <th className="w-1/8 p-2">Veterinario</th>
            <th className="w-1/8 p-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {
            tratamientos && tratamientos.map((tratamiento) => (
              <tr className="hover:bg-gray-100"
                key={tratamiento.id}
              >
                <td className="p-2 border-t">{tratamiento.id}</td>
                <td className="p-2 border-t">{tratamiento.nombre}</td>
                <td className="p-2 border-t">{tratamiento.descripcion}</td>
                <td className="p-2 border-t">{tratamiento.mascota.nombre}</td>
                <td className="p-2 border-t">{tratamiento.estado}</td>
                <td className="p-2 border-t">{tratamiento.observaciones}</td>
                <td className="p-2 border-t">{tratamiento.fecha}</td>
                <td className="p-2 border-t">{tratamiento.veterinario.nombre}</td>
                <td className="p-2 border-t flex gap-2 justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleUpdate(tratamiento.id)}>
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleDelete(tratamiento.id)}>
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

export default TratamientoPage;