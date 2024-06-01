import "./../csspages/header.css";
import logo from "../../../assets/logodefinitivo.png";
import { useNavigate } from "react-router-dom";
import {useContext } from "react";
import { InformacionCuenta } from "../Contex/Contex";


function Header() {
  let redirigir = useNavigate();
  const contex = useContext(InformacionCuenta)

  function inicioDeSesion() {
   redirigir("/login")
  }

  return (
    <header className="encabezado">
      <img className="logo" src={logo} alt="logo" />
      <section className="navegador">
        <a href="" class="link">
          Ingresa tus PQRS
        </a>
        <a href="">Terminos y condiciones</a>
        <a href="">Opciones de administrador</a>
      </section>
      <button className={contex.boton} onClick={inicioDeSesion}>
        inicio de sesión
      </button>
      <div className={contex.infUsuario}>
          <div className="nombreApellido">
            <p>{contex.usuariogeneral.nombres}</p>
            <p>{contex.usuariogeneral.apellidos}</p>
          </div>
          <img src={logo} alt="usuarioFoto" />
      </div>
    </header>
  );
}

export default Header;
