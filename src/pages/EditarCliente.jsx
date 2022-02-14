import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Spinner from '../components/Spinner';
import SinClientes from '../components/SinClientes';
const EditarCliente = ({ cargando, setCargando }) => {
  const [clienteTemporal, setClienteTemporal] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setCargando(!cargando);
    const obtenerClienteEditar = async () => {
      try {
        const urlId = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(urlId);
        const resultado = await respuesta.json();
        setClienteTemporal(resultado);
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteEditar();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>

      {cargando ? (
        <Spinner />
      ) : Object.keys(clienteTemporal).length === 0 ? (
        <SinClientes />
      ) : (
        <>
          <p className="mt-5">Edita los campos:</p>
          <Formulario
            clienteTemporal={clienteTemporal}
            setClienteTemporal={setClienteTemporal}
          />
        </>
      )}
    </>
  );
};

export default EditarCliente;
