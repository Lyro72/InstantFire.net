import React from 'react';

import Contacto from './Contacto';
import Producto from './Producto';
import Acerca from './Acerca';

import '../Estilos/Inicio.css'; 
import Instalaciones from '../assets/Instalaciones_2.webp';
import Bolsa from '../assets/Producto_2.jpg';
import Promo from '../assets/Video_1_edited.mp4';

const Inicio = ({seccion}) => {

            switch (seccion) {
          case 'Productos':
            return (<Producto />);
          case 'Contacto':
            return (<Contacto />);
          case 'Acerca de Nosotros':
            return (<Acerca />);
          default:
            return (    
              <div className="cuerpo">
                {/* Sección 1: Texto / Imagen */}
                <section className="section">
                  <div className="section-content text-left">
                    <h2>Briquetas de carbon instantaneo</h2>
                    <p>
                      Estamos emocionados de anunciar nuestras bolsas de briquetas instantaneas de 3kg cada una. La distribucion viene por contenedores los cuales contienen 30 tarimas cada una con 250 bolsas. El total de material suma 22.5 toneladas de carbon.
                    </p>
                  </div>
                  <div className="section-image image-right media">
                    <img
                      src={Bolsa}
                      alt="Invernadero moderno listo para abrir"
                    />
                  </div>
                </section>

                <section className="section video-section media">
                  <div className="video-container">
                    <video 
                      src={Promo} 
                      controls   // Muestra los controles de reproducción
                      autoPlay   // Reproduce automáticamente
                      loop       // Se repite cuando termina
                      muted      // Silenciado por defecto (importante si usas autoplay)
                      playsInline
                    >
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  </div>
                </section>


                {/* Sección 2: Imagen / Texto */}
                <section className="section">
                  <div className="section-image image-left media">
                    <img
                      src={Instalaciones}
                      alt="Plantas jóvenes en crecimiento"
                    />
                  </div>
                  <div className="section-content text-right">
                    <h2>Plantas que estamos criando</h2>
                    <p>
                      Nuestra unión ha dado vida a un producto revolucionario: briquetas de BBQ de encendido instantáneo, únicas en el mundo, capaces de ser encendidas con tan solo encendedores simples sin ninguna necesidad de combustibles adicionales. Este avance tecnológico no solo transforma la experiencia del asado, sino que también marca un antes y un después en la industria gracias a su carácter práctico, seguro y altamente sostenible.
                    </p>
                  </div>
                </section>
              </div>
            );
        }
      };

export default Inicio;


