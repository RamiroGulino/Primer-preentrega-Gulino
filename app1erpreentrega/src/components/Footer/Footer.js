import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {  
    return (
<footer>
        <div class="container-fluid">
            <div class="row justify-content-evenly " id="fondoFooter">
                <div className="col-md-4 footerIzq d-flex flex-column  col-4 justify-center align-center" id="footerIzq">

                    <h2 className='titulo1'> Nosotros </h2>

                    <p className='texto'> </p>

                </div>
               
                <div className=' col-4 justify-center align-center' id='footerDer'> 
                    <h2 className='textoDerecha'>Contactanos</h2>
                    <p className='textoDerecha'>Avenida de mayp 2343 <br></br>

                        Ciudad Autónoma de Buenos Aires<br></br>

                        Villa adelina<br></br>

                        </p>
                </div>
                <div></div>
            </div>
        </div>
</footer> 
)}



export default Footer