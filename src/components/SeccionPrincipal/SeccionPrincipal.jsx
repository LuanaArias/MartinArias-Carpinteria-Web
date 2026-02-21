import './SeccionPrincipal.css'
import ImagenPrincipal from '../../assets/ImagenPrincipal.jpg'
import { Link } from "react-router-dom";
import { TitulosSecciones } from '../ui/TitulosSecciones/TitulosSecciones'

export function SeccionPrincipal(){
    return(
        <section 
            className="seccion-principal"
            style={{ backgroundImage: `url(${ImagenPrincipal})` }}
        >
            <div className="seccion-principal-container">
                <div className="seccion-principal-contenido">
                    <TitulosSecciones texto="Martin Arias" />
                    <h2>Muebles a medida</h2>
                    <p>Diseño, calidad y detalle en cada proyecto</p>

                        <div className="seccion-principal-buttons">
                            <Link to="/contacto" className="btn-primary">
                                Solicitar presupuesto
                            </Link>
                            <Link to="/galeria" className="btn-secondary">
                                Ver mis trabajos
                            </Link>
                        </div>
                </div>
            </div>
        </section>  
    )
}