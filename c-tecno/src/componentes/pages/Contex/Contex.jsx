import {createContext,useState } from "react";

export const InformacionCuenta = createContext()

export const ProveedorInformacion = ({children}) =>{
    const [usuariogeneral, setusuariogeneral] = useState({})
    const [boton, setBoton] = useState("btn")
    const [infUsuario, setinfUsuario] = useState("informacionOculta")



console.log(usuariogeneral + boton + infUsuario)

return(
    <InformacionCuenta.Provider value={{
        usuariogeneral,
        setusuariogeneral,
        boton,
        setBoton,
        infUsuario,
        setinfUsuario
    }}>
        {children}
    </InformacionCuenta.Provider>
)

}