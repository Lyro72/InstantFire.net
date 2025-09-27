import React, { useState, useEffect } from 'react';
import '../Estilos/Navbar.css';
import Logo from '../assets/Logo_2.png';
import { useIdioma } from './IdiomaContext';


const Navbar = ({ onNavClick }) => {
  const [isSticky, setIsSticky] = useState(false);
  const { idioma, setIdioma } = useIdioma();

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <button onClick={() => onNavClick('Inicio')}>
            <img src={Logo} alt="Logo" />
          </button>
        </div>

        <div className="menues">
          {/* Selector de idioma */}
          <div className={`language-selector ${isSticky ? 'sticky-language' : ''}`}>
            <button onClick={() => setIdioma('It')}>IT</button>
            <button onClick={() => setIdioma('En')}>EN</button>
            <button onClick={() => setIdioma('Es')}>ES</button>
          </div>


          {/* Menú hamburguesa (mobile) */}
          <div className="hamburger-menu">
            <div className="hamburger-icon">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
            <div className="hamburger-dropdown">
              <ul>
                <li>
                  <button className="NavButton" onClick={() => onNavClick('Inicio')}>
                    Inicio
                  </button>
                </li>
                <li>
                  <button className="NavButton" onClick={() => onNavClick('Acerca de Nosotros')}>
                    Acerca de Nosotros
                  </button>
                </li>
                <li>
                  <button className="NavButton" onClick={() => onNavClick('Galeria')}>
                    Galería
                  </button>
                </li>
                <li>
                  <button className="NavButton" onClick={() => onNavClick('Productos')}>
                    Productos
                  </button>
                </li>
                <li>
                  <button className="NavButton" onClick={() => onNavClick('Contacto')}>
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Menú normal (desktop) */}
          <nav className="main-nav">
            <ul>
              <li>
                <button className="NavButton" onClick={() => onNavClick('Inicio')}>
                  Inicio
                </button>
              </li>
              <li>
                <button className="NavButton" onClick={() => onNavClick('Acerca de Nosotros')}>
                  Acerca de Nosotros
                </button>
              </li>
              <li>
                <button className="NavButton" onClick={() => onNavClick('Galeria')}>
                  Galería
                </button>
              </li>
              <li>
                <button className="NavButton" onClick={() => onNavClick('Productos')}>
                  Productos
                </button>
              </li>
              <li>
                <button className="NavButton" onClick={() => onNavClick('Contacto')}>
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;