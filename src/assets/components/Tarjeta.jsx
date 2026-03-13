import React from "react";
import "./Tarjeta.css";

function Tarjeta({
    nombre,
    pais,
    continente,
    descripcion,
    imagen,
    poblacion,
    conocidaPor,
}) {
    return (
        <article className="tarjeta">
            <div className="tarjeta__imagen-contenedor">
                <img
                    className="tarjeta__imagen"
                    src={imagen}
                    alt={`Vista de ${nombre}`}
                />
                <span className="tarjeta__continente">{continente}</span>
            </div>

            <div className="tarjeta__contenido">
                <h2 className="tarjeta__nombre">{nombre}</h2>
                <p className="tarjeta__pais">📍 {pais}</p>
                <p className="tarjeta__descripcion">{descripcion}</p>

                <div className="tarjeta__pie">
                    <div className="tarjeta__dato">
                        <span className="tarjeta__dato-etiqueta">Población</span>
                        <span className="tarjeta__dato-valor">{poblacion}</span>
                    </div>
                    <div className="tarjeta__dato">
                        <span className="tarjeta__dato-etiqueta">Conocida por</span>
                        <span className="tarjeta__dato-valor">{conocidaPor}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Tarjeta;
