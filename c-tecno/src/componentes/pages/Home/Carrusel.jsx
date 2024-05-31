import'../csspages/carrusel.css'
function Carrusel() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
        <input type="radio" name="slide" id="C1" />
        <label for="c1" className="card">
            <div className="row">
                <div className="icon"></div>
                <div className="descripcion">
                <h4>winter</h4>
                
                </div>
            </div>
        </label>  
        <input type="radio" name="slide" id="C2"checked/>
        <label for="c2" className="card">
            <div className="row">
                <div className="icon"></div>
                <div className="descripcion">
                <h4>Digital Technology</h4>
                </div>
            </div>
        </label>  
        <input type="radio" name="slide" id="C3" />
        <label for="c3" className="card">
            <div className="row">
                <div className="icon"></div>
                <div className="descripcion">
                <h4>TIPOS DE SERVICIOS</h4>
                </div>
            </div>
        </label> 
        <input type="radio" name="slide" id="C4"  />
        <label for="c4" className="card">
            <div className="row">
                <div className="icon"></div>
                <div className="descripcion">
                <h4>nWE tecnologico</h4>
                </div>
            </div>
        </label>   
        <input type="radio" name="slide" id="C5" />
        <label for="c5" className="card">
            <div className="row">
                <div className="icon"></div>
                <div className="descripcion">
                <h4>nWE tecnologico</h4>
                </div>
            </div>
        </label>    
    </div>
    </div>
</>
  )
}

export default Carrusel
