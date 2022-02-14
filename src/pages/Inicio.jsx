import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import generarId from '../helpers/generarId.helpers';
import Cliente from '../components/Cliente';
import Spinner from '../components/Spinner';

const Inicio = ({ cargando, setCargando }) => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setCargando(!cargando);
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClientesAPI();
  }, []);
  const handleEliminar = async (id, nombre) => {
    const confirmar = confirm(`¿Deseas eliminar a ${nombre}?`);
    if (confirmar) {
      try {
        const urlDelete = `http://localhost:4000/clientes/${id}`;
        await fetch(urlDelete, {
          method: 'DELETE',
        });
        const clientesActualizados = clientes.filter(
          (cliente) => cliente.id !== id
        );
        setClientes(clientesActualizados);
        navigate('/clientes');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-5">Administra tus clientes</p>
      {cargando ? (
        <Spinner />
      ) : (
        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente
                key={generarId()}
                cliente={cliente}
                handleEliminar={handleEliminar}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Inicio;
