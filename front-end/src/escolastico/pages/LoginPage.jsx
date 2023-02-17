import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startLoginWithEmailPassword } from '../store/auth/thunks';

const LoginPage = () => {

  const dispatch = useDispatch();
    const { password, email, onInputChange } = useForm({
        email: "",
        password: "",
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
      };
  return (
    <div className="bg-cover bg-center bg-no-repeat opacity-75" style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/seamless-endless-pattern-traces-dog-260nw-1723462735.jpg')` }}>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="bg-gray-700 p-6 rounded-lg shadow-md w-96">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="border border-gray-200 p-2 rounded-lg w-full"
                type="email"
                id="email"
                name="email"
                onChange={onInputChange}
                value={email}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="password"
                id="password"
                name="password"
                onChange={onInputChange}
                value={password}
                required
              />
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;