import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <span className="navbar__icono">✦</span>
                <span className="navbar__titulo">WorldCards</span>
            </div>
            <p className="navbar__subtitulo">Ciudades que inspiran</p>
        </nav>
    );
}

export default Navbar;