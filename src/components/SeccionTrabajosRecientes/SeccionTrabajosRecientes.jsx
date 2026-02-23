import { Link } from "react-router-dom";
import { ImagenTrabajosRecientes } from "../ui/ImagenTrabajosRecientes/ImagenTrabajosRecientes";
import imagen1 from '../../assets/ImagenesTrabajosRec/imagen1.png'
import imagen2 from '../../assets/ImagenesTrabajosRec/imagen2.png'
import imagen3 from '../../assets/ImagenesTrabajosRec/imagen3.png'
import './SeccionTrabajosRecientes.css'

export function SeccionTrabajosRecientes(){
    return(
        <>
            <section className="seccion-trabajos-recientes">
                <div className="seccion-trabajos-recientes-titulo">
                    <h1>Trabajos recientes</h1>
                </div>
                
                <div className="seccion-trabajos-recientes-imagenes-container">
                    <ImagenTrabajosRecientes img={imagen1} texto="Bajo mesada"/>
                    <ImagenTrabajosRecientes img={imagen2} texto="Bajo mesada y alacena"/>
                    <ImagenTrabajosRecientes img={imagen3} texto="Muebles de habitación"/>
                </div>
                <div className="seccion-trabajos-recientes-boton"> 
                    <Link to="/galeria" className="btn-galeria">
                        Ver galería completa
                        <span className="arrow">→</span>
                    </Link>
                </div>
            </section>
            
        </>
    )
}