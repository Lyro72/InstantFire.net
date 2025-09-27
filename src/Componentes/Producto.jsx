import React from 'react'; 
import '../Estilos/Producto.css';
import Bolsa from '../assets/Producto_2.jpg';
import { useIdioma } from './IdiomaContext';


const Producto = () => {
  const { traducciones } = useIdioma();
  const t = traducciones.producto;

  const productList = [ 
    {
      name: t.productos[0].nombre,
      description:
        t.productos[0].descripcion,
      image: Bolsa,
      features: t.productos[0].caracteristicas,
    }
  ];

  return (
    <section className="products-section">
      <div className="container">
        <h1 className="products-title">{t.titulo}</h1>
        <p className="products-intro">{t.introduccion}</p>

        <div className="product-grid">
          {productList.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Producto;