
import logo from "../../assets/logodefinitivo.png"
import './csspages/footer.css'

function Footer() {
  return (
    <>
      <div className='slogan'>
            {/* <img src={circulo} alt="circulo" /> */}
            <h2 id='textSlogan'>Solucion al instante - Tecnología a tu alcance.</h2>
        </div>
        <div className="Contacto">
            <div id='LogoContenedor'>
                <div id='LogoFooter'>
                    <img src={logo} alt="LogoPc" />
                    <h3 id='NameLogo'>C- TECNO <br />SOLUTIONS</h3>
                </div>
                
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Et neque eum consequuntur officiis iure eveniet laudantium<br />
                    alias ipsum maiores earum nostrum sequi quisquam enim iste ut <br />
                    eligendi dicta, impedit beatae.</h6>
            </div>
            <div>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Et neque eum consequuntur officiis iure eveniet laudantium<br />
                    alias ipsum maiores earum nostrum sequi quisquam enim iste ut <br />
                    eligendi dicta, impedit beatae.</h6>
            </div>
            <div>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Et neque eum consequuntur officiis iure eveniet laudantium<br />
                    alias ipsum maiores earum nostrum sequi quisquam enim iste ut <br />
                    eligendi dicta, impedit beatae.</h6>
            </div>
       </div>

    </>
  )
}

export default Footer
