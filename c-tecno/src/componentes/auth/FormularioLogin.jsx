import whatsapp from "../../assets/whatsapp.png";
import chatgpt from "../../assets/chat-gpt.png";
import google from "../../assets/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormularioLogin() {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setUserPassword] = useState("");
  let redireccion = useNavigate();

  const entrarUsuario = () => {
    if (getUsername === "c-tecno@gmail.com" && getPassword === "1234") {
      redireccion("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Ingreso Fallido",
        text: "Correo o Contraseña Incorrecta",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <>
      <h2>Bienvenido</h2>
      <p id="parrafoCorreo">Correo:</p>

      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="Ingrese su correo electronico"
      />
      <p>Contraseña:</p>

      <input
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
        type="password"
        placeholder="Ingrese su contraseña"
      />

      <button className="botoningreso" onClick={entrarUsuario}>
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
