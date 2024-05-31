import {createContext,useState } from "react";

export const InformacionCuenta = createContext()

export const ProveedorInformacion = ({children}) =>{
    const [identificacion, setIdentificacion] = useState("")

console.log(identificacion)

return(
    <InformacionCuenta.Provider value={{
        identificacion,
        setIdentificacion
    }}>
        {children}
    </InformacionCuenta.Provider>
)

}