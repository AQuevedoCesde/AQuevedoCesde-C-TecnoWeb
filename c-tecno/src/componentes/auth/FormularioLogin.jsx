import whatsapp from "../../assets/whatsapp.png";
import chatgpt from "../../assets/chat-gpt.png";
import google from "../../assets/google.png";
import { connDatabase } from "../../database/firebase";
import { useContext } from "react";
import { InformacionCuenta } from "../pages/Contex/Contex";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function FormularioLogin() {
  const [dbUsuario, setDbUsuario] = useState([]);
  const [email, setEmail] = useState("");
  const [contrasena, setcontrasena] = useState("");
  const contex = useContext(InformacionCuenta)
  let redireccion = useNavigate();

  async function getUsuarios() {
    let collectionUsuarios = collection(connDatabase, "usuarios");
    let resultado = await getDocs(collectionUsuarios);
    console.log()
    setDbUsuario(resultado.docs.map((doc) => ({ ...doc.data() })));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuario() {
    let UsuarioEncontrado = dbUsuario.find((usuario)=> usuario.email === email && usuario.contrasena == contrasena )
      if(UsuarioEncontrado){
       contex.setIdentificacion(UsuarioEncontrado.cedula)
       redireccion("/")
      }else{
       console.log("todomal")
      }
  }

  return (
    <>
      <h2>Bienvenido</h2>
      <p id="parrafoCorreo">Correo:</p>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Ingrese su correo electronico"
      />

      <p>Contraseña:</p>
      <input
        onChange={(e) => {
          setcontrasena(e.target.value);
        }}
        type="password"
        placeholder="Ingrese su contraseña"
      />

      <button className="botoningreso" onClick={buscarUsuario}>
        {" "}
        INGRESAR{" "}
      </button>

      <h4>
        <a href="#">Crear una cuenta</a>
      </h4>

      <div className="contenedoriconos">
        <a
          target="_blank"
          href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=mn&ddm=0"
        >
          <img src={google} alt="iconogoogle" />
        </a>
        <a target="_blank" href="https://chat.openai.com/">
          <img src={chatgpt} alt="iconochatgpt" />
        </a>
        <a target="_blank" href="https://web.whatsapp.com/">
          <img src={whatsapp} alt="iconowhatsapp" />
        </a>
      </div>
    </>
  );
}

export default FormularioLogin;
