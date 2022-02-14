import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SinClientes from '../components/SinClientes';
import Spinner from '../components/Spinner';
const VerCliente = ({ cargando, setCargando }) => {
  const [cliente, setCliente] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setCargando(!cargando);
    const obtenerClienteId = async () => {
      try {
        const urlId = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(urlId);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteId();
  }, []);
  const { nombre, empresa, email, telefono, notas } = cliente;
  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : Object.keys(cliente).length === 0 ? (
        <SinClientes />
      ) : (
        <table className="w-full mt-10 table-auto shadow bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Telefono</th>
              <th className="p-2">Email</th>
              <th className="p-2">Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center border-b hover:bg-gray-100">
              <td className="py-8 text-gray-500">{nombre}</td>
              <td className="py-8 text-gray-500">{empresa}</td>
              <td className="py-8 text-gray-500">{telefono}</td>
              <td className="py-8 text-gray-500">{email}</td>
              <td className="py-8 text-gray-500">{notas}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VerCliente;
