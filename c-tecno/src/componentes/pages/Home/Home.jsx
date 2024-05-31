import Carrusel from "./Carrusel"
import Footer from "./Footer"
import Header from "./Header"
import SolicitarServicio from "./SolicitarServicio"
import { InformacionCuenta } from "../Contex/Contex"
import { useContext } from "react"
function Home() {
  const context = useContext(InformacionCuenta)

  return (
    <>
      <Header/>
      <Carrusel/>
      <SolicitarServicio/>
      <Footer/>
      
    </>
  )
}

export default Home
