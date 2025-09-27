import React from 'react';

import '../Estilos/Footer.css';
import Viñeta from '../assets/Viñeta.png';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobeEurope, FaIndustry } from 'react-icons/fa';

const Footer = ({ onNavClick }) => {
  return (
    <footer className="footer">
            <div className="footer-container">

        {/* Columna 1: Marca + redes */}
        <div className="footer-column">
          <h3 className="footer-title">Instant Fire</h3>
          <p className="footer-description">
            Estamos comprometidos con la producción sostenible de carbón, respetando el medio ambiente y apoyando a las comunidades locales.
          </p>
          <div className="footer-socials">
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a> 
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer-column footer-quick-links">
          <h3 className="footer-title">Enlaces rápidos</h3>
          <ul className="footer-links">
              <li><button className="FooButton" onClick={() => onNavClick('Inicio')}>Inicio</button></li>
              <li><button className="FooButton" onClick={() => onNavClick('Acerca de Nosotros')}>Acerca de Nosotros</button></li>
              <li><button className="FooButton" onClick={() => onNavClick('Galeria')}>Galería</button></li>
              <li><button className="FooButton" onClick={() => onNavClick('Productos')}>Productos</button></li>
              <li><button className="FooButton" onClick={() => onNavClick('Contacto')}>Contacto</button></li>
          </ul>
        </div>

        {/* Columna 3: Contacto Instant Fire */}
        <div className="footer-column">
          <h3 className="footer-title"><img src={Viñeta} />Instant Fire</h3>
          <ul className="footer-contact">
            <li ><a  href="https://maps.app.goo.gl/m5r97mvvtFEwNnJP7?g_st=ipc" target="_blanck"><FaGlobeEurope /></a><p className="footer-direction">Ctra. N-620 Km. 204, 49440 Cañizal, Zamora. España</p></li>
            <li><FaPhoneAlt />+34 629 924-088</li>
            <li><FaEnvelope /> info@instantfire.net</li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        © 2025 Instant Fire. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
