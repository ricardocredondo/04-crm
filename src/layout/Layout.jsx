import { Outlet, Link, useLocation } from 'react-router-dom';
const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 px-3 py-5 bg-blue-900">
        <h2 className=" text-4xl font-black text-center text-white">
          CRM - CLIENTES
        </h2>
        <nav className="mt-10">
          <Link
            to="/clientes"
            className={`${
              pathname === '/clientes' ? 'text-blue-300' : 'text-white'
            } block text-2xl  hover:bg-blue-300`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'
            } block text-2xl hover:bg-blue-300`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 md:h-screen px-8 py-5 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
