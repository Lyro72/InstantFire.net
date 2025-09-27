import React from 'react'; 
import '../Estilos/Producto.css';
import Bolsa from '../assets/Producto_2.jpg';

const Producto = () => {
  const productList = [ 
    {
      name: 'Briquetas de Carbón Instantáneo',
      description:
        'Carbón ecológico de rápida ignición hecho 100% a partir de poda responsable. Ideal para parrillas, cocinas rurales y uso doméstico. No produce humo y adicional a esto genera un calor más estable.',
      image: Bolsa,
      features: [
        'Encendido al instante',
        'Biodegradable y compostable después de su uso',
        'Bajo contenido de humedad y larga duración',
        'Envio a cualquier parte del mundo'
      ],
    }
  ];

  return (
    <section className="products-section">
      <div className="container">
        <h1 className="products-title">Nuestros Productos</h1>
        <p className="products-intro">
          En Instantfire desarrollamos soluciones ecológicas adaptadas a las
          necesidades modernas. Nuestros productos no solo ofrecen alto
          rendimiento, sino que también devuelven valor a la tierra tras su uso.
        </p>

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