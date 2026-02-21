import { useState } from "react";
import './FormularioContacto.css'

export function FormularioContacto() {
    const [mueble, setMueble] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const numero = "5491157257346"; 

        const mensaje = `Hola Martín,
            Quisiera consultar por:

            - Mueble: ${mueble}
            - Color: ${color}

            ¿Podrías enviarme presupuesto?`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    };

    return (
        <div className="contacto-seccion">
            <form className="contacto-form" onSubmit={handleSubmit}>
                <h2>Solicitá tu presupuesto</h2>

                <input
                    type="text"
                    placeholder="Descripción del mueble a realizar"
                    value={mueble}
                    onChange={(e) => setMueble(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Color del mueble"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />

                <button type="submit">
                    Enviar consulta por WhatsApp
                </button>
            </form>
        </div>
    );
}