import imagenGrid1 from '../../assets/ImagenesGrid/ImagenGrid1.jpeg'
import imagenGrid2 from '../../assets/ImagenesGrid/ImagenGrid2.png'
import imagenGrid3 from '../../assets/ImagenesGrid/ImagenGrid3.png'
import imagenGrid4 from '../../assets/ImagenesGrid/ImagenGrid4.png'
import imagenGrid5 from '../../assets/ImagenesGrid/ImagenGrid5.png'
import imagenGrid6 from '../../assets/ImagenesGrid/ImagenGrid6.png'
import imagenGrid7 from '../../assets/ImagenesGrid/ImagenGrid7.png'
import imagenGrid8 from '../../assets/ImagenesGrid/ImagenGrid8.png'
import imagenGrid9 from '../../assets/ImagenesGrid/ImagenGrid9.png'
import imagenGrid10 from '../../assets/ImagenesGrid/ImagenGrid10.png'
import imagenGrid11 from '../../assets/ImagenesGrid/ImagenGrid11.png'
import imagenGrid12 from '../../assets/ImagenesGrid/ImagenGrid12.png'
import "./GaleriaGrid.css"

export function GaleriaGrid() {
    return (
        <section className="galeria-container">
            <h1 className="galeria-titulo">Mis trabajos</h1>
            <div className="galeria-grid">
                <div className="item grande">
                    <img src={imagenGrid1} alt="Mesa de madera" />
                </div>

                <div className="item">
                    <img src={imagenGrid2} alt="Placard" />
                </div>

                <div className="item alto">
                    <img src={imagenGrid3} alt="Biblioteca" />
                </div>

                <div className="item alto">
                    <img src={imagenGrid4} alt="Cocina" />
                </div>

                <div className="item alto">
                    <img src={imagenGrid5} alt="Puerta" />
                </div>

                <div className="item alto">
                    <img src={imagenGrid6} alt="Vestidor" />
                </div>
                <div className="item alto">
                    <img src={imagenGrid7} alt="Escritorio" />
                </div>
                <div className="item">
                    <img src={imagenGrid8} alt="Escritorio" />
                </div>
                <div className="item alto">
                    <img src={imagenGrid9} alt="Escritorio" />
                </div>
                <div className="item alto">
                    <img src={imagenGrid10} alt="Escritorio" />
                </div>
                <div className="item">
                    <img src={imagenGrid11} alt="Escritorio" />
                </div>
                <div className="item">
                    <img src={imagenGrid12} alt="Escritorio" />
                </div>

            </div>
        </section>
    )
}