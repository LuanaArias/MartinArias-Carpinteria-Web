import { TitulosSecciones } from '../ui/TitulosSecciones/TitulosSecciones'
import { Link } from "react-router-dom";
import './SeccionContactoInicio.css'

export function SeccionContactoInicio(){
    return(
        <>
            <section className="seccion-contacto-inicio">
                <div className="seccion-contacto-inicio-contenido">
                    <TitulosSecciones texto="¿Listo para transformar tu hogar?" />
                    <p>Hablemos sobre ese mueble que tienes en mente. Presupuestos sin compromiso.</p>
                </div>
                <Link to="/contacto" className="btn-contacto-inicio">
                    Contactar ahora
                </Link>
            </section>
            
        </>
    )
}