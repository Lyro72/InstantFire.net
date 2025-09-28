import React from 'react';

import '../Estilos/Footer.css';
import Viñeta from '../assets/Viñeta.png';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobeEurope, FaIndustry } from 'react-icons/fa';

import { useIdioma } from './IdiomaContext';

const Footer = ({ onNavClick }) => {
    const { traducciones } = useIdioma();
  const t = traducciones.footer;

  return (
    <footer className="footer">
            <div className="footer-container">

        {/* Columna 1: Marca + redes */}
        <div className="footer-column">
          <h3 className="footer-title">Instant Fire</h3>
          <p className="footer-description">
            {t.descripcion}
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
          <h3 className="footer-title">{t.enlaces.titulo}</h3>
          <ul className="footer-links">
            <li><button className="FooButton" onClick={() => onNavClick('Inicio')}>{t.enlaces.inicio}</button></li>
            <li><button className="FooButton" onClick={() => onNavClick('Acerca')}>{t.enlaces.acerca}</button></li>
            <li><button className="FooButton" onClick={() => onNavClick('Galeria')}>{t.enlaces.galeria}</button></li>
            <li><button className="FooButton" onClick={() => onNavClick('Productos')}>{t.enlaces.productos}</button></li>
            <li><button className="FooButton" onClick={() => onNavClick('Contacto')}>{t.enlaces.contacto}</button></li>
          </ul>
        </div>

        {/* Columna 3: Contacto Instant Fire */}
        <div className="footer-column">
          <h3 className="footer-title"><img src={Viñeta} />Instant Fire</h3>
          <ul className="footer-contact">
            <li><FaPhoneAlt />+39 342 790-9219</li>
            <li><FaPhoneAlt />+34 629 924-088</li>
            <li><FaEnvelope /> info@instantfire.net</li>
            <li ><a  href="https://maps.app.goo.gl/m5r97mvvtFEwNnJP7?g_st=ipc" target="_blanck"><FaGlobeEurope /></a><p className="footer-direction">Dirección: Carretera Nacional 620 Km. 204 49440 Cañizal. Zamora. España</p></li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        © 2025 Instant Fire. {t.derechos}
      </div>
    </footer>
  );
};

export default Footer;