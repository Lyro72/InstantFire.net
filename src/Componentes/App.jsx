// App.jsx 
import React, { useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Inicio from "./Inicio";
import Footer from "./Footer";

// 👇 importar el provider
import { IdiomaProvider, useIdioma } from "./IdiomaContext";

const AppContainer = () => {
  const [seccionActiva, setSeccionActiva] = useState("Inicio");
    const { traducciones } = useIdioma();
    const t = traducciones.titulos;
    const traduccion = t[seccionActiva];

  return (
    // 👇 envolvemos toda la app en el provider
      <div>
        <Navbar onNavClick={setSeccionActiva} />
        <Header titulo={traduccion} onNavClick={setSeccionActiva} />
        <Inicio seccion={seccionActiva} />
        <Footer onNavClick={setSeccionActiva} />
      </div>
  );
};


const App = () => {
  return (
    // 👇 envolvemos toda la app en el provider
    <IdiomaProvider>
      <AppContainer />
    </IdiomaProvider>
  );
};

export default App;
