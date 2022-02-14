import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Inicio from './pages/Inicio';
import EditarCliente from './pages/EditarCliente';
import NuevoCliente from './pages/NuevoCliente';
import VerCliente from './pages/VerCliente';
function App() {
  const [cargando, setCargando] = useState(false);
  console.log(import.meta.env);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route
            index
            element={<Inicio cargando={cargando} setCargando={setCargando} />}
          />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route
            path="editar/:id"
            element={
              <EditarCliente cargando={cargando} setCargando={setCargando} />
            }
          />
          <Route
            path=":id"
            element={
              <VerCliente cargando={cargando} setCargando={setCargando} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
