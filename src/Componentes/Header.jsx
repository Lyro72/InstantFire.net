import React from 'react';
import "../Estilos/Header.css";
import { useIdioma } from './IdiomaContext'; // Ajusta la ruta si es necesario

const Header = ({titulo, onNavClick }) => {
  const { traducciones } = useIdioma();
    const t = traducciones.header;

  return (
    <header className="hero">
      <div className="overlay">
        <h1>{titulo}</h1>
        <p>{t.subtitulo}</p>
        <h3 className="subtitle">{t.lema}</h3>

        <div className="buttons">
          <button className="btn green" onClick={() => onNavClick('Acerca')}>
            {t.botones.acerca}
          </button>

          <button
            className="btn green"
            onClick={() => onNavClick('Productos')}
          >
            {t.botones.productos}
          </button>

          <button
            className="btn outline"
            onClick={() => onNavClick('Contacto')}
          >
            {t.botones.contacto}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

