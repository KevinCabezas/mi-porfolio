import { Routes, Route, } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Proyectos from "../pages/Proyectos";
import Historial from "../pages/Historial";
import Estudios from "../pages/Estudios";
import Habilidades from "../pages/Habilidades";
import Contacto from "../pages/Contacto";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Proyectos />} />
      <Route path="skills" element={<Habilidades />} />
      <Route path="history" element={<Historial />} />
      <Route path="education" element={<Estudios />} />
      <Route path="contact" element={<Contacto />} />

      <Route path="*" element={<Error />} />

    </Routes>
  );
};

export default AppRoutes;
