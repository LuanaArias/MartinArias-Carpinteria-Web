import { CardOpiniones } from "../CardOpiniones/CardOpiniones";
import { TitulosSecciones } from "../ui/TitulosSecciones/TitulosSecciones";
import './SeccionOpiniones.css'

export function SeccionOpiniones(){
    return(
        <>  
            <div className="seccion-opiniones-container">
                <h4>OPINIONES</h4>
                <TitulosSecciones texto="Lo que dicen mis clientes" />
                <div className="card-opiniones-container">
                    <CardOpiniones text="La mesa que nos hizo Martín es el centro de atención de nuestra casa. Se notala dedicación en cada detalle. ¡Totalmente recomendado!" nombre="Ana García" cliente="Cliente Particular"/>
                    <CardOpiniones text="Necesitaba un armario con medidas muy específicas y el resultado fue mejor de lo que imaginaba. Profesional, puntual y muy prolijo" nombre="Miguel Torres" cliente="Arquitecto"/>
                    <CardOpiniones text="Buscaba algo único y duradero, no los típicos muebles de tienda. La calidad de la madera y el acabado son impresionantes." nombre="Lucía Fernández" cliente="Interiorista"/>
                </div>
            </div>

        </>
    )
}