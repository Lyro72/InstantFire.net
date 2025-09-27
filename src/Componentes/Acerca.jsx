import React from 'react'; 
import '../Estilos/Acerca.css';
import Certificado1 from '../assets/Certificado FSC.jpg';
import Certificado2 from '../assets/Certificado PEFC.jpg';
import { useIdioma } from './IdiomaContext';

const Acerca = () => {
  const { traducciones } = useIdioma();
  const t = traducciones.acerca;

  return (
    <section className="aboutus-section">
      <div className="container">
        <h1 className="aboutus-title">{t.titulo}</h1>
        
        <div className="presentacion">
          <p className="aboutus-intro">{t.presentacion1}</p>
          <p className="aboutus-intro">{t.presentacion2}</p>
        </div>

        <h2 className="aboutus-subtitle">{t.compromisoTitulo}</h2>

        <div className="compromiso">
          <p className="aboutus-intro">{t.compromisoIntro}</p>
          <ul>
            <li><p className="aboutus-intro">{t.compromiso1}</p></li>
            <li><p className="aboutus-intro">{t.compromiso2}</p></li>
            <li><p className="aboutus-intro">{t.compromiso3}</p></li>
          </ul>
        </div>

        <h2 className="aboutus-subtitle">{t.productoTitulo}</h2>

        <div className="compromiso">
          <p className="aboutus-intro">{t.productoIntro}</p>
          <ul>
            <li><p className="aboutus-intro">{t.producto1}</p></li>
            <li><p className="aboutus-intro">{t.producto2}</p></li>
            <li><p className="aboutus-intro">{t.producto3}</p></li>
          </ul>
        </div>

        <div className="aboutus-section-block">
          <h2>{t.misionTitulo}</h2>
          <p>{t.misionTexto}</p>
        </div>

        <div className="aboutus-section-block">
          <h2>{t.visionTitulo}</h2>
          <p>{t.visionTexto}</p>
        </div>

        <div className="aboutus-section-block">
          <h2>{t.valoresTitulo}</h2>
          <ul className="values-list">
            {t.valores.map((valor, i) => (
              <li key={i}>
                <strong>{valor.titulo}:</strong> {valor.descripcion}
              </li>
            ))}
          </ul>
          <div className="certificaciones">
            <img src={Certificado1} alt="Certificado FSC" />
            <img src={Certificado2} alt="Certificado PEFC" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
