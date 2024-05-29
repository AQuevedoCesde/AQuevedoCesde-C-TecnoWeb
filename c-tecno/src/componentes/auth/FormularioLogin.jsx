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
      <div className="w-full h-svh bg-red-400 flex-col   m-8">
        <h2 className="text-center text-[5vh] font-sans flex justify-center bg-slate-500">
          Bienvenido
        </h2>
        <p className="text-xl m-2 ">Correo:</p>

        <input
          className="bg-white  h-10 py-1 rounded-xl border-double border-gray-500 focus:outline-none  p-4"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Ingrese su correo electronico"
        />
        <p className="text-xl m-2 ">Contraseña:</p>

        <input
          className=" bg-white text-wrap h-10 py-1  rounded-xl border-gray-400 focus:outline-none p-4"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          type="password"
          placeholder="Ingrese su contraseña"
        /> 

        <div className="flex justify-center">
          <button
            className="w-1/2 font-bold bg-blue-600 text-white py-1 h-10 flex justify-center mt-8 rounded-xl  "
            onClick={entrarUsuario}
          >
            {" "}
            INGRESAR{" "}
          </button>
        </div>

        <div className="flex justify-center">
          <h4>
            <a
              className=" flex justify-center p-4 text-blue-600 font-bold text-ellipsis"
              href="#"
            >
              Crear una cuenta
            </a>
          </h4>
        </div>

        <div className=" flex flex-row justify-center ">
          <a
            className="w-10 h-10 bg-white ml-4 "
            target="_blank"
            href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=mn&ddm=0"
          >
            <img src={google} alt="iconogoogle" />
          </a>
          <a
            className="w-10 h-10 bg-white ml-4 "
            target="_blank"
            href="https://chat.openai.com/"
          >
            <img src={chatgpt} alt="iconochatgpt" />
          </a>
          <a
            className="w-10 h-10 bg-white ml-4 "
            target="_blank"
            href="https://web.whatsapp.com/"
          >
            <img src={whatsapp} alt="iconowhatsapp" />
          </a>
        </div>
      </div>
    </>
  );
}

export default FormularioLogin;
