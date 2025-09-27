// App.jsx
import React, { useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Inicio from "./Inicio";
import Footer from "./Footer";

// 👇 importar el provider
import { IdiomaProvider } from "./IdiomaContext";

const App = () => {
  const [seccionActiva, setSeccionActiva] = useState("Inicio");

  return (
    // 👇 envolvemos toda la app en el provider
    <IdiomaProvider>
      <div>
        <Navbar onNavClick={setSeccionActiva} />
        <Header titulo={seccionActiva} onNavClick={setSeccionActiva} />
        <Inicio seccion={seccionActiva} />
        <Footer onNavClick={setSeccionActiva} />
      </div>
    </IdiomaProvider>
  );
};

export default App;
