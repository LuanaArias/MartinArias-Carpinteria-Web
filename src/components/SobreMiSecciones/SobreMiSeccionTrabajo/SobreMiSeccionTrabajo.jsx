import { TitulosSecciones } from '../../ui/TitulosSecciones/TitulosSecciones'
import './SobreMiSeccionTrabajo.css'
export function SobreMiSeccionTrabajo(){
    return(
        <>
            <div className="sobre-mi-seccion-trabajo-container">
                <TitulosSecciones texto="Mi proceso de trabajo" className="titulo-sobre-mi-seccion-trabajo" />
                <div className="sobre-mi-seccion-trabajo-contenido">
                    <div className="sobre-mi-seccion-trabajo-items">
                        <h3>Diseño y consulta</h3>
                        <p>Escucho tus ideas y necesidades. Dibujo bocetos y seleccionamos juntos la madera perfecta para tu proyecto.</p>
                    </div>
                    <div className="sobre-mi-seccion-trabajo-items">
                        <h3>Fabricación artesanal</h3>
                        <p>Corto, lijo, ensamblo y pulo cada pieza a mano en mi taller, prestando atención a cada milímetro.</p>
                    </div>
                    <div className="sobre-mi-seccion-trabajo-items">
                        <h3>Entrega e instalación</h3>
                        <p>Llevo el mueble a tu hogar y lo instalo personalmente para asegurarme de que quede perfecto.</p>
                    </div>
                </div>
            </div>   
        </>
    )
}