import { useState } from 'react'; 
import '../Estilos/Galeria.css';
import { useIdioma } from './IdiomaContext';

// Importa tus imágenes
import Fondo1 from '../assets/Fondo_1.png';
import Instalaciones1 from '../assets/Instalaciones_1.jpg';
import Instalaciones2 from '../assets/Instalaciones_2.webp';
import Instalaciones3 from '../assets/Instalaciones_3.jpg';
import Instalaciones4 from '../assets/Instalaciones_4.jpg';
import InstalacionesLlenas1 from '../assets/InstalacionesLlenas_1.jpg';
import MateriaPrima1 from '../assets/MateriaPrima_1.webp';
import MateriaPrima2 from '../assets/MateriaPrima_2.jpg';
import MateriaPrima3 from '../assets/MateriaPrima_3.jpg';
import MateriaPrima4 from '../assets/MateriaPrima_4.jpg';
import Producto1 from '../assets/Producto_1.jpg';
import Producto2 from '../assets/Producto_2.jpg';

const imagenes = [
  Fondo1,
  Instalaciones1,
  Instalaciones2,
  Instalaciones3,
  Instalaciones4,
  InstalacionesLlenas1,
  MateriaPrima1,
  MateriaPrima2,
  MateriaPrima3,
  MateriaPrima4,
  Producto1,
  Producto2
];

const Galeria = () => {
  const [indice, setIndice] = useState(0);
  const total = imagenes.length;
  const imagenesPorPagina = 4;

  const { traducciones } = useIdioma();
  const t = traducciones.galeria;

  const siguiente = () => {
    if (indice + imagenesPorPagina < total) {
      setIndice(indice + imagenesPorPagina);
    }
  };

  const anterior = () => {
    if (indice - imagenesPorPagina >= 0) {
      setIndice(indice - imagenesPorPagina);
    }
  };

  const imagenesVisibles = imagenes.slice(indice, indice + imagenesPorPagina);

  return (
    <div className="carrusel-container">
      <button onClick={anterior} disabled={indice === 0}>
        {t.botones.anterior}
      </button>

      <div className="carrusel-grid">
        {imagenesVisibles.map((src, i) => (
          <img key={i} src={src} alt={`Imagen ${i + indice + 1}`} className="carrusel-img" />
        ))}
      </div>

      <button onClick={siguiente} disabled={indice + imagenesPorPagina >= total}>
        {t.botones.siguiente}
      </button>
    </div>
  );
};

export default Galeria;
