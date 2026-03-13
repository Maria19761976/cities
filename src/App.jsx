import React from "react";
import Tarjeta from "./assets/components/Tarjeta";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ciudades from "./assets/data/ciudades";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main className="app__main">
                <header className="app__encabezado">
                    <h1 className="app__titulo">Ciudades del Mundo</h1>
                    <p className="app__subtitulo">Seis destinos únicos que vale la pena conocer</p>
                </header>

                <section className="app__cuadricula">
                    {ciudades.map((ciudad) => (
                        <Tarjeta
                            key={ciudad.id}
                            nombre={ciudad.nombre}
                            pais={ciudad.pais}
                            continente={ciudad.continente}
                            descripcion={ciudad.descripcion}
                            imagen={ciudad.imagen}
                            poblacion={ciudad.poblacion}
                            conocidaPor={ciudad.conocidaPor}
                        />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;