import './ImagenTrabajosRecientes.css'
export function ImagenTrabajosRecientes({img, texto}){
    return(
        <>
            <div className="imagen-trabajo-reciente-container">
                <img src={img} alt="Imagen de trabajo reciente" className='imagen-trabajo-reciente'/>
                <div className="overlay">
                    <h3>{texto}</h3>
                </div>
            </div> 
        </>
    )
}