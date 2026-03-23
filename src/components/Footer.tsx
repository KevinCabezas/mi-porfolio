import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="secondary-color  lg:h-14.5 pb-2.5 lg:px-37.5 px-2.5 lg:pb-3 ">
      <div className="primary-color w-full  justify-between flex h-full lg:mb-5 rounded-lg lg:items-center p-2.5 lg:px-5 text-white">

      <p className=" grid lg:flex h-fit text-white w-fit">
          <small className="">
            © 2026 Todos los derechos reservados
          </small>
          <small className="hidden lg:flex w-fit items-center justify-center px-1">
            -
          </small>
          <small className="flex justify-start">
           Kevin Cabezas L .
          </small>
        </p>
        <div className="lg:flex grid lg:gap-5 order-1 items-start w-fit">
          {/* <small>jooo</small> */}
          <Link to={"/"}><small>Inicio</small></Link>
          <Link to={"/about"}><small>About</small></Link>
          <Link to={"/about"}><small>About</small></Link>
          <Link to={"/about"}><small>About</small></Link>
          <Link to={"/about"}><small>About</small></Link>
          {/* <Link><small>Contacto</small></Link>
          <Link><small>Contacto</small></Link>
          <Link><small>Contacto</small></Link> */}
        </div>
      </div>
    </footer>
  )
}