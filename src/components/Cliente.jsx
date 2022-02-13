const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, notas } = cliente;
  return (
    <tr className="text-center border-b hover:bg-gray-100">
      <td className="py-8 text-gray-500">{nombre}</td>
      <td className="py-8 text-gray-500">
        <p className="m-0 mx-auto">
          <span className="text-gray-800 uppercase font-bold">Email:</span>
          {email}
        </p>
        <p className="m-0 mx-auto">
          <span className="text-gray-800 uppercase font-bold">Telefono:</span>
          {telefono}
        </p>
      </td>
      <td className="py-8 text-gray-500">{empresa}</td>
      <td className="py-8">
        <button
          type="button"
          className="mr-3 py-1 px-4 bg-green-700 text-white text-xs uppercase rounded-sm hover:bg-green-800"
        >
          Ver
        </button>
        <button
          type="button"
          className="mr-3 py-1 px-4 bg-blue-500 text-white text-xs uppercase rounded-sm hover:bg-blue-600"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-1 px-4 bg-red-500 text-white text-xs uppercase rounded-sm hover:bg-red-600"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
