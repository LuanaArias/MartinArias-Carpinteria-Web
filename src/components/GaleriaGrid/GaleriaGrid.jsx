import imagenGrid1 from '../../assets/ImagenesGrid/ImagenGrid1.jpeg'
import "./GaleriaGrid.css"

export function GaleriaGrid() {
    return (
        <section className="galeria-container">
            <h2 className="galeria-titulo">Mis trabajos</h2>

            <div className="galeria-grid">
                <div className="item grande">
                    <img src={imagenGrid1} alt="Mesa de madera" />
                </div>

                <div className="item">
                    <img src={imagenGrid1} alt="Placard" />
                </div>

                <div className="item alto">
                    <img src={imagenGrid1} alt="Biblioteca" />
                </div>

                <div className="item">
                    <img src={imagenGrid1} alt="Cocina" />
                </div>

                <div className="item ancho">
                    <img src={imagenGrid1} alt="Puerta" />
                </div>

                <div className="item">
                    <img src={imagenGrid1} alt="Escritorio" />
                </div>
            </div>
        </section>
    )
}