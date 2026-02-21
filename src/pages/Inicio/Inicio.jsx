import { SeccionContactoInicio } from "../../components/SeccionContactoInicio/SeccionContactoInicio";
import { SeccionOpiniones } from "../../components/SeccionOpiniones/SeccionOpiniones";
import { SeccionPrincipal } from "../../components/SeccionPrincipal/SeccionPrincipal";
import { SeccionTrabajosRecientes } from "../../components/SeccionTrabajosRecientes/SeccionTrabajosRecientes";

export function Inicio(){
    return(
       <>   
            <SeccionPrincipal /> 
            <SeccionTrabajosRecientes />
            <SeccionOpiniones />
            <SeccionContactoInicio />
       </> 
    )
}