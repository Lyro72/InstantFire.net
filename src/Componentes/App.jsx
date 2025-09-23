import React, { useState } from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Inicio from './Inicio';
import Footer from './Footer';


const App = () => {
  const [seccionActiva, setSeccionActiva] = useState('Inicio');

  return (
    <div>
      <Navbar onNavClick={setSeccionActiva} />
      <Header titulo={seccionActiva} onNavClick={setSeccionActiva}/>
      <Inicio seccion={seccionActiva} />
      <Footer onNavClick={setSeccionActiva} />
    </div>
  );
}

export default App;