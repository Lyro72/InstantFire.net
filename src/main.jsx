import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './Componentes/App';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import Header from './Componentes/Header';
import Inicio from './Componentes/Inicio';
//import Acerca from './Componentes/Acerca';
//import Producto from './Componentes/Producto';
//import Contacto from './Componentes/Contacto';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
