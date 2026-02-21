import { CincoEstrellas } from "../ui/CincoEstrellas/CincoEstrellas";
import './CardOpiniones.css'

export function CardOpiniones({text, nombre, cliente}){
    return(
       <>
        <div className="card-componente-opiniones-container">
            <CincoEstrellas />
            <div className="card-opiniones-texto-container">
                <p>{text}</p>
            </div>
            <div className="card-opiniones-nombre-container">
                <p>{nombre}</p>
            </div>
            <div className="card-opiniones-cliente-container">
                <p>{cliente}</p>
            </div>
        </div>
       </> 
    )
}