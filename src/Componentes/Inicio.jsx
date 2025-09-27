import React from 'react'; 
import Contacto from './Contacto';
import Producto from './Producto';
import Acerca from './Acerca';
import Galeria from './Galeria';

import '../Estilos/Inicio.css';

import Instalaciones from '../assets/Instalaciones_2.webp';
import Bolsa from '../assets/Producto_2.jpg';
import Promo from '../assets/Video_1_edited.mp4';

import { useIdioma } from './IdiomaContext';

const Inicio = ({ seccion }) => {
  const { traducciones } = useIdioma(); // Hook para idioma actual
  const t = traducciones.inicio;        // Alias para facilitar acceso

  switch (seccion) {
    case 'Productos':
      return <Producto />;
    case 'Contacto':
      return <Contacto />;
    case 'Acerca':
      return <Acerca />;
    case 'Galeria':
      return <Galeria />;
    default:
      return (
        <div className="cuerpo">
          {/* Sección 1: Texto / Imagen */}
          <section className="section">
            <div className="section-content text-left">
              <h2>{t.seccion1.titulo}</h2>
              <p>{t.seccion1.texto}</p>
            </div>
            <div className="section-image image-right media">
              <img src={Bolsa} alt="Producto de briquetas" />
            </div>
          </section>

          {/* Sección 2: Video */}
          <section className="section video-section media">
            <div className="video-container">
              <video
                src={Promo}
                controls
                autoPlay
                loop
                muted
                playsInline
              >
              </video>
            </div>
          </section>

          {/* Sección 3: Imagen / Texto */}
          <section className="section">
            <div className="section-image image-left media">
              <img src={Instalaciones} alt="Instalaciones" />
            </div>
            <div className="section-content text-right">
              <h2>{t.seccion2.titulo}</h2>
              <p>{t.seccion2.texto}</p>
            </div>
          </section>
        </div>
      );
  }
};

export default Inicio;
