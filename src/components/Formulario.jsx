import { Formik, Form, Field } from 'formik';
const Formulario = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="md:w-3/4 mt-8 p-10 bg-white rounded-md shadow-md mx-auto">
      <h1 className="text-gray-600 font-bold text-2xl text-center  uppercase">
        Agregar cliente
      </h1>
      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: '',
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
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
              value="Guardar Cliente"
              className="w-full p-3 text-lg text-white font-bold uppercase bg-blue-800 cursor-pointer"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
