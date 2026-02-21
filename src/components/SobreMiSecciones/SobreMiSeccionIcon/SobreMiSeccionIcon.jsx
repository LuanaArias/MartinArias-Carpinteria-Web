import { IconoCorazon } from "../../ui/IconosSobreMi/IconoCorazon/IconoCorazon";
import { IconoMartillo } from "../../ui/IconosSobreMi/IconoMartillo/IconoMartillo";
import { IconoReloj } from "../../ui/IconosSobreMi/IconoReloj/IconoReloj";
import './SobreMiSeccionIcon.css'

export function SobreMiSeccionIcon(){
    return(
        <>
            <section className="sobre-mi-seccion-iconos-container">
                <div className="sobre-mi-seccion-icono-item">
                    <IconoReloj />
                    <h3>+30</h3>
                    <p>Años de experiencia</p>
                </div>
                <div className="sobre-mi-seccion-icono-item">
                    <IconoMartillo />
                    <h3>+500</h3>
                    <p>Proyectos entregados</p>
                </div>
                <div className="sobre-mi-seccion-icono-item">
                    <IconoCorazon />
                    <h3>∞</h3>
                    <p>Pasión por el detalle</p>
                </div>
            </section>
        </>
    )
}