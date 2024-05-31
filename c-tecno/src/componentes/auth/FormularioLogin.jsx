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
      <div className="w-[70%] h-lg  flex-col m-10 ">
        <h2 className="text-center text-5xl font-sans font-semibold flex  justify-center  mb-10">
          Bienvenido
        </h2>
        <p className="text-2xl m-2 font-sans font-medium ">Correo:</p>

        <input
          className=" w-full h-12 py-1 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Ingrese su correo electronico"
        />
        <p className="text-2xl m-2 font-sans font-medium ">Contraseña:</p>

        <input
          className=" bg-white w-full  h-12 py-1 border   rounded-xl border-gray-300 focus:outline-blue-400 p-4"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          type="password"
          placeholder="Ingrese su contraseña"
        />

        <div className="flex justify-center">
          <button
            className="w-full font-bold bg-blue-700 text-white p-2 h-12 flex justify-center mt-8 rounded-xl text-lg ease-in duration-300 hover:bg-sky-500"
            onClick={entrarUsuario}
          >
            {" "}
            INGRESAR{" "}
          </button>
        </div>

        <div className="flex justify-center">
          <h4>
            <a
              className=" flex justify-center p-2 text-blue-600 font-sans font-semibold  text-2xl "
              href="#"
            >
              Crear una cuenta
            </a>
          </h4>
        </div>

        <div className=" flex flex-row justify-center ">
          <a
            className="w-12 h-12 bg-white m-2 "
            target="_blank"
            href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=mn&ddm=0"
          >
            <img src={google} alt="iconogoogle" />
          </a>
          <a
            className="w-12 h-12 bg-white m-2 "
            target="_blank"
            href="https://chat.openai.com/"
          >
            <img src={chatgpt} alt="iconochatgpt" />
          </a>
          <a
            className="w-12 h-12 bg-white m-2"
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
