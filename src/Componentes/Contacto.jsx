import React from 'react';
import '../Estilos/Contacto.css';

const Contacto = () => {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Envíanos un Mensaje</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="product">Interés en producto</label>
            <select id="product" name="product" required>
              <option value="Carbón Natural">Carbón Natural</option>
              <option value="BBQ">BBQ</option>
              <option value="Parrilla Portátil">Parrilla Portátil</option>
              <option value="Plegable">Plegable</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>
          <strong>Instant Fire</strong>
        </p>
        <p>Europa</p>
        <p>+39 (342) 790-9219</p>
        <p>
          <a href="info@instantfire.net">info@instantfire.net</a>
        </p>
      </div>
    </section>
  );
};

export default Contacto;