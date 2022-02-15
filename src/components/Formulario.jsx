import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Alerta from './Alerta';
const Formulario = ({ clienteTemporal, setClienteTemporal }) => {
  const navigate = useNavigate();
  // const { nombre, empresa, telefono, email, notas } = clienteTemporal;
  const nuevoClienteSchema = yup.object().shape({
    nombre: yup
      .string()
      .min(3, 'El nombre es demasiado corto')
      .max(20, 'El nombre es muy largo')
      .required('El nombre del cliente es obligatorio'),
    empresa: yup
      .string()
      .min(2, 'El nombre de la empresa es muy corto')
      .max(20, 'El nombre de la empresa es muy largo')
      .required('La empresa del cliente es obligatoria'),
    email: yup
      .string()
      .email('No es un email valido')
      .required('El email es obligatorio'),
    telefono: yup
      .number()
      .integer('Numero no valido')
      .positive('Numero no valido')
      .typeError('El numero no es valido'),
  });
  const handleSubmit = async (values) => {
    try {
      if (clienteTemporal.id) {
        const urlPut = `${import.meta.env.VITE_API_URL}/${clienteTemporal.id}`;
        await fetch(urlPut, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setClienteTemporal({});
      } else {
        const url = import.meta.env.VITE_API_URL;
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      navigate('/clientes');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:w-3/4 mt-8 p-10 bg-white rounded-md shadow-md mx-auto">
      <h1 className="text-gray-600 font-bold text-2xl text-center  uppercase">
        {clienteTemporal?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
      </h1>
      <Formik
        initialValues={{
          nombre: clienteTemporal?.nombre ?? '',
          empresa: clienteTemporal?.empresa ?? '',
          email: clienteTemporal?.email ?? '',
          telefono: clienteTemporal?.telefono ?? '',
          notas: clienteTemporal?.notas ?? '',
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-8">
                <label htmlFor="nombre" className="text-gray-600">
                  Nombre:
                </label>
                <Field
                  type="text"
                  id="nombre"
                  className="block w-full mt-2 p-3 bg-gray-100"
                  placeholder="Nombre del cliente"
                  name="nombre"
                />
                {errors.nombre && touched.nombre ? (
                  <Alerta>{errors.nombre}</Alerta>
                ) : null}
              </div>
              <div className="mb-8">
                <label htmlFor="empresa" className="text-gray-600">
                  Empresa:
                </label>
                <Field
                  type="text"
                  id="empresa"
                  className="block w-full mt-2 p-3 bg-gray-100"
                  placeholder="Empresa del cliente"
                  name="empresa"
                />
                {errors.empresa && touched.empresa ? (
                  <Alerta>{errors.empresa}</Alerta>
                ) : null}
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="text-gray-600">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  className="block w-full mt-2 p-3 bg-gray-100"
                  placeholder="Email del cliente"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alerta>{errors.email}</Alerta>
                ) : null}
              </div>
              <div className="mb-8">
                <label htmlFor="telefono" className="text-gray-600">
                  Telefono:
                </label>
                <Field
                  type="tel"
                  id="telefono"
                  className="block w-full mt-2 p-3 bg-gray-100"
                  placeholder="Telefono del cliente"
                  name="telefono"
                />
                {errors.telefono && touched.telefono ? (
                  <Alerta>{errors.telefono}</Alerta>
                ) : null}
              </div>
              <div className="mb-12">
                <label htmlFor="notas">Notas:</label>
                <Field
                  as="textarea"
                  id="notas"
                  className="block w-full h-40 mt-2 p-3 bg-gray-100 resize-none"
                  placeholder="Notas"
                  name="notas"
                />
              </div>
              <input
                type="submit"
                value={
                  clienteTemporal?.nombre
                    ? 'Guardar Cambios'
                    : 'Agregar Cliente'
                }
                className="w-full p-3 text-lg text-white font-bold uppercase bg-blue-800 cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
Formulario.defaultProps = {
  clienteTemporal: {},
  cargando: false,
};
export default Formulario;
