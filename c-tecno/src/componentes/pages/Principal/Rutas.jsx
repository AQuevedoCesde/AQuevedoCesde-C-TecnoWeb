import { useRoutes, BrowserRouter} from "react-router-dom"
import {ProveedorInformacion} from '../Contex/Contex'
import Login from '../../auth/Login'
import Home from '../Home/Home'

const Redirecciones = () => {
  let rutas = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>}
  ])
  return rutas
}


function Rutas() {
  return (
    <ProveedorInformacion>
        <BrowserRouter>
          <Redirecciones/>
        </BrowserRouter>
    </ProveedorInformacion>
    
  )
}

export default Rutas
