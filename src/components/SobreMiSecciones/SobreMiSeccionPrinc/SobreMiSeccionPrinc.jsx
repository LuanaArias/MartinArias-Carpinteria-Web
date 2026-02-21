import imagenSobreMi from '../../../assets/ImagenSobreMi.jpeg'
import './SobreMiSeccionPrinc.css'

export function SobreMiSeccionPrinc(){
    return(
        <div className="sobre-mi-seccion-princ-container">
            <div className="sobre-mi-seccion-princ-imagen">
                <img src={imagenSobreMi} alt="Imagen sobre mí" />
            </div>
            <div className="sobre-mi-seccion-princ-texto">
                <h1>Sobre mí</h1>
                <p>Soy Martín Arias, carpintero especializado en muebles a medida.
                    Trabajo cada proyecto con el mismo enfoque: escuchar primero, diseñar después y construir con precisión.

                    Creo en la calidad por encima de la cantidad. Cada pieza que realizo está pensada para durar, adaptarse al espacio y responder a una necesidad real. No trabajo con soluciones estándar, sino con proyectos personalizados que combinan funcionalidad y estética.

                    Si estás buscando un mueble que realmente encaje en tu hogar, estoy para ayudarte a hacerlo realidad.</p>
            </div>
        </div>
    )
}