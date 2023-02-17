import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../store/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return (
    <aside className="bg-gray-900 p-6 w-64 fixed h-screen">
      <div className="flex items-center mb-6">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://via.placeholder.com/100x100"
          alt="Profile picture"
        />
        <div className="text-white">
          <h3 className="font-medium">{auth.nombre}</h3>
          <p className="text-sm">{auth.email}</p>
        </div>
      </div>
      <nav className="text-white">
        <ul className="list-none">
          <li className="mb-4">
            <Link
              to="/"
              className="text-white hover:bg-gray-800 hover:text-gray-100 py-2 px-4 block"
            >
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/propietarios"
              className="text-white hover:bg-gray-800 hover:text-gray-100 py-2 px-4 block"
            >
              Gestionar Propietarios
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/veterinarios"
              className="text-white hover:bg-gray-800 hover:text-gray-100 py-2 px-4 block"
            >
              Gestionar Veterinarios
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/mascotas"
              className="text-white hover:bg-gray-800 hover:text-gray-100 py-2 px-4 block"
            >
              Gestionar Mascotas
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to={"/especies"}
              className="text-white hover:bg-gray-800 hover:text-gray-100 py-2 px-4 block"
            >
              Gestionar Especies
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/tratamientos"
              className="text-white hover:bg-gray-800 hover:text-gray-100 py-2 px-4 block"
            >
              Gestionar Tratamientos
            </Link>
          </li>
        </ul>
      </nav>
      <div className="fixed bottom-0 left-0 mb-5 ml-3 w-full">
        <button className="bg-red-500 text-white py-2 px-4 rounded w-56 hover:bg-red-700" onClick={
          () => {
            dispatch(startLogout());
          }
        }>
          Salir
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
