import React, { useState, useEffect } from 'react';
import '../Estilos/Navbar.css';
import Logo from "../assets/Logo_2.png"

const Navbar = ({ onNavClick }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar">
        
        <div className="logo"> <button onClick={() => onNavClick('Inicio')}><img src={Logo}/></button> </div>
        
        <div className="menues">
          <div className={`language-selector ${isSticky ? 'sticky-language' : ''}`}>
            <button>IT</button>
            <button>EN</button>
            <button>ES</button>
          </div>

          <nav>
            <ul>
              <li><button className="NavButton" onClick={() => onNavClick('Inicio')}>Inicio</button></li>
              <li><button className="NavButton" onClick={() => onNavClick('Acerca de Nosotros')}>Acerca de Nosotros</button></li>
              <li><button className="NavButton" onClick={() => onNavClick('Productos')}>Productos</button></li>
              <li><button className="NavButton" onClick={() => onNavClick('Contacto')}>Contacto</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

