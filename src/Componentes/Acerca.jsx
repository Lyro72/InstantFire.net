import React from 'react'; 
import '../Estilos/Acerca.css';
import Certificado1 from '../assets/Certificado FSC.jpg';
import Certificado2 from '../assets/Certificado PEFC.jpg';

const Acerca = () => {
  return (
    <section className="aboutus-section">
      <div className="container">
        <h1 className="aboutus-title">¿Quieres somos?</h1>
        
        <div className="presentacion">
          <p className="aboutus-intro">
            En <strong>INSTANTFIRE</strong> creemos firmemente que la innovación y el respeto por el planeta pueden ir de la mano. Nacemos de la fusión estratégica entre Casmiri360 y Carboexport, dos compañías con larga trayectoria en la industria de los carbones para BBQ, que han unido fuerzas bajo el lema: “JUNTOS SOMOS MÁS FUERTES”.
          </p>
          <p className="aboutus-intro">
            Nuestra unión ha dado vida a un producto revolucionario: briquetas de BBQ de encendido instantáneo, únicas en el mundo, capaces de ser encendidas con tan solo encendedores simples sin ninguna necesidad de combustibles adicionales. Este avance tecnológico no solo transforma la experiencia del asado, sino que también marca un antes y un después en la industria gracias a su carácter práctico, seguro y altamente sostenible.
          </p>
        </div>

        <h2 className="aboutus-subtitle">Compromiso Medio Ambiental</h2>

        <div className="compromiso">
          <p className="aboutus-intro">
            En INSTANTFIRE, la sostenibilidad no es un valor añadido: es nuestro principio fundamental.
          </p>
          <ul>
            <li><p className="aboutus-intro">No contaminamos el medioambiente en ninguno de nuestros procesos.</p></li>
            <li><p className="aboutus-intro">No talamos árboles. Utilizamos exclusivamente ramas y restos provenientes de la poda natural, asegurando así que los árboles se conserven y crezcan con fuerza.</p></li>
            <li><p className="aboutus-intro">Reforestamos activamente. Por cada briqueta que producimos, apoyamos la siembra de nuevos árboles, contribuyendo de forma positiva al equilibrio ambiental.</p></li>
          </ul>
        </div>


        <h2 className="aboutus-subtitle">Un producto Ecológico y Global</h2>

        <div className="compromiso">
          <p className="aboutus-intro">
            Nuestras briquetas son el reflejo de una visión moderna y responsable:
          </p>
          <ul>
            <li><p className="aboutus-intro">Fabricadas con tecnología renovable.</p></li>
            <li><p className="aboutus-intro">Altamente ecológicas y respetuosas con el entorno.</p></li>
            <li><p className="aboutus-intro">Diseñadas para estar disponibles en cualquier mercado del mundo, garantizando una experiencia premium de BBQ, siempre sostenible.</p></li>
          </ul>
        </div>



        <div className="aboutus-section-block">
          <h2>Misión</h2>
          <p>
            En INSTANTFIRE trabajamos para transformar la experiencia del BBQ en todo el mundo, ofreciendo briquetas de encendido instantáneo creadas con tecnología renovable y procesos 100% sostenibles. Nuestra misión es brindar soluciones innovadoras que combinen practicidad, eficiencia y respeto por el medioambiente, promoviendo un consumo responsable sin comprometer la calidad ni la tradición del asado.
          </p>
        </div>

        <div className="aboutus-section-block">
          <h2>Visión</h2>
          <p>
            Ser reconocidos globalmente como la empresa líder en briquetas ecológicas para BBQ, marcando un nuevo estándar en la industria gracias a nuestra capacidad de innovar, proteger el planeta y generar un impacto positivo en la vida de las personas. Aspiramos a un futuro donde cada chispa de INSTANTFIRE represente no solo fuego, sino también conciencia ambiental y compromiso con un mundo más verde.
          </p>
        </div>

        <div className="aboutus-section-block">
          <h2>Valores</h2>
          <ul className="values-list">
            <li>
              <strong>Innovación Responsable:</strong> Apostamos por la investigación y el desarrollo constante para ofrecer soluciones únicas que respeten al planeta.
            </li>
            <li>
              <strong>Sostenibilidad:</strong> Todos nuestros procesos están diseñados para cuidar el medioambiente, reutilizando recursos naturales sin talar árboles y apoyando la reforestación.
            </li>
            <li>
              <strong>Calidad Global:</strong> Garantizamos un producto premium, práctico y seguro, disponible para ser exportado a cualquier rincón del mundo.
            </li>
            <li>
              <strong>Compromiso Ambiental:</strong> Creemos en un modelo de negocio que no solo no contamina, sino que contribuye activamente al bienestar de la naturaleza.
            </li>
            <li>
              <strong>Colaboración:</strong> Nuestra esencia nace de la unión; sabemos que juntos somos más fuertes y que las alianzas son clave para generar cambios positivos a gran escala.
            </li>
          </ul>
          <div className="certificaciones">
            <img src={Certificado1} />
            <img src={Certificado2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;