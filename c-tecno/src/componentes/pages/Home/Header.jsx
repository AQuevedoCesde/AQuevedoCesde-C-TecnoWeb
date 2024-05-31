import './../csspages/header.css'
import logo from "../../../assets/logodefinitivo.png"
import { useNavigate } from 'react-router-dom'

function Header() {
    let redirigir = useNavigate();

    function inicioDeSesion (){
        redirigir('/login')
    }

  return (
    <header className="encabezado" >
      <img className="logo" src={logo} alt="logo" />
      <section className="navegador">
            <a href="" class="link">Ingresa tus PQRS</a>
            <a href="">Terminos y condiciones</a>
            <a href="">Opciones de administrador</a>
        </section>
        <button className="btn" onClick={inicioDeSesion}>
         inicio de sesión
        </button>
    </header>
  )
}

export default Header
