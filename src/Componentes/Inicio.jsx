import React from 'react';
import Contacto from './Contacto';
import Producto from './Producto';
import Acerca from './Acerca';
import Galeria from './Galeria';

import '../Estilos/Inicio.css';

import Instalaciones from '../assets/Instalaciones_2.webp';
import Bolsa from '../assets/Producto_2.jpg';
import Promo from '../assets/Video_1_edited.mp4';

const Inicio = ({ seccion }) => {
  switch (seccion) {
    case 'Productos':
      return <Producto />;

    case 'Contacto':
      return <Contacto />;

    case 'Acerca de Nosotros':
      return <Acerca />;

    case 'Galeria':
      return <Galeria />;

    default:
      return (
        <div className="cuerpo">
          {/* Sección 1: Texto / Imagen */}
          <section className="section">
            <div className="section-content text-left">
              <h2>Briquetas de carbón instantáneo</h2>
              <p>
                Estamos emocionados de anunciar nuestras bolsas de briquetas instantáneas de 3kg.
                La distribución viene por contenedores, los cuales contienen 30 tarimas, cada una
                con 250 bolsas. El total de material suma 22.5 toneladas de carbón.
              </p>
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
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </section>

          {/* Sección 3: Imagen / Texto */}
          <section className="section">
            <div className="section-image image-left media">
              <img src={Instalaciones} alt="Instalaciones" />
            </div>
            <div className="section-content text-right">
              <h2>Una compañía ecológica y renovable</h2>
              <p>
                Nuestra unión ha dado vida a un producto revolucionario: briquetas de BBQ de
                encendido instantáneo, únicas en el mundo, capaces de ser encendidas con tan solo
                encendedores simples sin ninguna necesidad de combustibles adicionales. Este avance
                tecnológico no solo transforma la experiencia del asado, sino que también marca un
                antes y un después en la industria gracias a su carácter práctico, seguro y
                altamente sostenible.
              </p>
            </div>
          </section>
        </div>
      );
  }
};

export default Inicio;
