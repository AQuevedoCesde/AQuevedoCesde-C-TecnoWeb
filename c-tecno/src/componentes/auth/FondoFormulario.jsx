import FormularioLogin from '../../componentes/auth/FormularioLogin'

function FondoFormulario() {
  return (
    <div className="w-full h-[90%] bg-white rounded-tl-lg rounded-bl-lg shadow-lg flex items-center justify-center ml-10 ">
        <div className="bg-amber-500 flex flex-col items-center w-1/2 h-3/4  border border-gray-300 rounded-lg shadow-md p-10">
            <FormularioLogin/>
        </div>
    </div>
  )
}

export default FondoFormulario
