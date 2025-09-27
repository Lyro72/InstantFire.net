import React from 'react'; 
import '../Estilos/Contacto.css';
import { useIdioma } from './IdiomaContext';

const Contacto = () => {
  const { traducciones } = useIdioma();
  const t = traducciones.contacto;

  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>{t.titulo}</h2>
        <form action="/enviar_formulario.php" method="POST">          
          <div className="form-group">
            <label htmlFor="name">{t.formulario.nombre}</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.formulario.correo}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t.formulario.mensaje}</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">{t.formulario.enviar}</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>{t.telefono.titulo}</h3>
        <p>
          <strong>Instant Fire</strong>
        </p>
        <p>Ctra. N-620 Km. 204, 49440 Cañizal, Zamora. España</p>
        <p>{t.telefono.contenido}</p>
        <p>
          <a href="info@instantfire.net">info@instantfire.net</a>
        </p>
      </div>
    </section>
  );
};

export default Contacto;