import { Link } from "react-router-dom";
import { ImagenTrabajosRecientes } from "../ui/ImagenTrabajosRecientes/ImagenTrabajosRecientes";
import ImagenPrincipal from '../../assets/ImagenPrincipal.jpg'
import './SeccionTrabajosRecientes.css'

export function SeccionTrabajosRecientes(){
    return(
        <>
            <section className="seccion-trabajos-recientes">
                <div className="seccion-trabajos-recientes-titulo">
                    <h1>Trabajos recientes</h1>
                </div>
                
                <div className="seccion-trabajos-recientes-imagenes-container">
                    <ImagenTrabajosRecientes img={ImagenPrincipal} texto="Imagen 1"/>
                    <ImagenTrabajosRecientes img={ImagenPrincipal} texto="Imagen 2"/>
                    <ImagenTrabajosRecientes img={ImagenPrincipal} texto="Imagen 3"/>
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