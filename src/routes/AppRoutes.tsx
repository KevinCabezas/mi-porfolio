import { Routes, Route, } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Proyectos from "../pages/Proyectos";
import Historial from "../pages/Historial";
import Estudios from "../pages/Estudios";
import Habilidades from "../pages/Habilidades";
import Contacto from "../pages/Contacto";
import Admin from "../pages/Admin";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      {/* Ruta de error (catch all) */}
      <Route path="about" element={<About />} />
      <Route path="proyectos" element={<Proyectos />} />
      <Route path="habilidades" element={<Habilidades />} />
      <Route path="historial" element={<Historial />} />
      <Route path="estudios" element={<Estudios />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="admin" element={<Admin />} />

      <Route path="*" element={<Error />} />

    </Routes>
  );
};

export default AppRoutes;
