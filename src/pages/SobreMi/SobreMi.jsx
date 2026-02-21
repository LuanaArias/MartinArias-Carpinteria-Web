import { SobreMiSeccionIcon } from "../../components/SobreMiSecciones/SobreMiSeccionIcon/SobreMiSeccionIcon";
import { SobreMiSeccionPrinc } from "../../components/SobreMiSecciones/SobreMiSeccionPrinc/SobreMiSeccionPrinc";
import { SobreMiSeccionTrabajo } from "../../components/SobreMiSecciones/SobreMiSeccionTrabajo/SobreMiSeccionTrabajo.jsx";

export function SobreMi(){
    return(
        <>  
            <SobreMiSeccionPrinc />
            <SobreMiSeccionIcon />
            <SobreMiSeccionTrabajo />
        </>
    )
}