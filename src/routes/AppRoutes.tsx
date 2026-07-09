import { Routes, Route, } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Proyectos from "../pages/Projects";
import Historial from "../pages/History";
import Estudios from "../pages/Education";
import Habilidades from "../pages/Skills";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Proyectos />} />
      <Route path="skills" element={<Habilidades />} />
      <Route path="history" element={<Historial />} />
      <Route path="education" element={<Estudios />} />

      <Route path="*" element={<Error />} />

    </Routes>
  );
};

export default AppRoutes;
