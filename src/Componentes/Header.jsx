import React from 'react';
import "../Estilos/Header.css";

const Header = ({ titulo, onNavClick }) => {
  return (
    <header className="hero">
      <div className="overlay">
        <h1>{titulo}</h1>
        <p>Carbón vegetal sostenible de primera calidad</p>
        <h3 className="subtitle">Unidos somos más fuertes</h3>

        <div className="buttons">
          <button
            className="btn green"
            onClick={() => onNavClick('Acerca de Nosotros')}
          >
            Acerca de Nosotros
          </button>

          <button
            className="btn green"
            onClick={() => onNavClick('Productos')}
          >
            Descubre nuestros productos
          </button>

          <button
            className="btn outline"
            onClick={() => onNavClick('Contacto')}
          >
            Contáctanos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
