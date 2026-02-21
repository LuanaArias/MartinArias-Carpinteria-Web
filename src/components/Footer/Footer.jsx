import { IconoEmail } from '../ui/IconoEmail/IconoEmail'
import { IconoTelefono } from '../ui/IconoTelefono/IconoTelefono'
import { Link } from "react-router-dom";
import './Footer.css'

export function Footer(){
    return(
        <>  
        <footer className="footer-container">
            <div className="footer-seccion-row">
                <div className="footer-seccion-descripcion">
                    <h2>Carpinteria a medida</h2>
                    <p>Creando muebles únicos y duraderos con pasión y dedicación. Cada pieza cuenta una historia y está hecha para durar generaciones.</p>
                </div>
                <div className="footer-seccion-menu">
                    <h2>Enlaces Rápidos</h2>
                    <ul>
                        <Link to="/">
                                <li>Inicio</li>
                        </Link>
                        <Link to="/galeria">
                            <li>Galería</li>
                        </Link>
                        <Link to="/sobre-mi">
                                <li>Sobre mí</li>
                        </Link>
                        <Link to="/contacto" >
                                <li>Contacto</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-seccion-contacto">
                    <h2>Contacto</h2>
                    <div className="footer-item-contacto">
                        <IconoTelefono />
                        <p>+54 9 11 5725-7346</p>
                    </div>
                    <div className="footer-item-contacto">
                        <IconoEmail />
                        <p>martinarias1@yahoo.com.ar</p>
                    </div>
                </div>
            </div>   
            <p>© 2026 Martin Arias Carpintería. Todos los derechos reservados.</p>
        </footer>
            
        </>
    )
}