import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { useSelector } from 'react-redux';
const Home = () => {

  const {mascotas} = useSelector(state => state.mascota);
  const {tratamientos} = useSelector(state => state.tratamiento);
  const {propietarios} = useSelector(state => state.propietario);
  const {especies} = useSelector(state => state.especie);
  const {veterinarios} = useSelector(state => state.veterinario);
  return (
    <>
    <div className="bg-gray-800 p-5 text-white text-center w-full">
      <h1 className="text-3xl font-bold">Bienvenido a la página de inicio</h1>
      <p className="text-xl">Aquí puedes encontrar información importante sobre tus estudios</p>
    </div>
    <div className="flex justify-center  mx-16 my-5 gap-4">
        <div className="bg-slate-300 rounded-lg shadow-lg p-4 w-1/3">
          <h2 className="text-xl font-bold">Mascotas Registradas</h2>
          <p className="text-gray-700 text-3xl font-bold">{mascotas.length}</p>
        </div>
        <div className="bg-slate-300 rounded-lg shadow-lg p-4 w-1/3">
          <h2 className="text-xl font-bold">Especies Registradas</h2>
          <p className="text-gray-700 text-3xl font-bold">{especies.length}</p>
        </div>
        <div className="bg-slate-300 rounded-lg shadow-lg p-4 w-1/3">
          <h2 className="text-xl font-bold">Tratamientos Realizados</h2>
          <p className="text-gray-700 text-3xl font-bold">{tratamientos.length}</p>
        </div>
        <div className="bg-slate-300 rounded-lg shadow-lg p-4  w-1/3">
          <h2 className="text-xl font-bold">Propietarios Registrados</h2>
          <p className="text-gray-700 text-3xl font-bold">{propietarios.length}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 m-2 w-2/4 flex">
            <Bar
              data={{
                labels: especies.map((especie) => especie.nombre),
                datasets: [
                  {
                    label: 'Mascotas por Especies',
                    data: especies.map((especie) => {
                      return mascotas.filter((mascota) => mascota.especie.id === especie.id).length;
                    }),
                    backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange'],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  }
              }}
            }
            />
            <Line
              data={{
                labels: mascotas.map((mascota) => mascota.nombre),
                datasets: [
                  {
                    label: 'Tratamientos por mascotas',
                    data: mascotas.map((mascota) => {
                      return tratamientos.filter((tratamiento) => tratamiento.mascota.id === mascota.id).length;
                    }),
                    backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange'],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  }
              }}
            }
            />
        </div>
      </>
  );
};

export default Home;