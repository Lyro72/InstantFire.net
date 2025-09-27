// context/IdiomaContext.jsx
import { createContext, useState, useContext } from 'react';
import Traducciones from './Traducciones'; // Asegúrate que la ruta sea correcta

export const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('Es'); // Idioma por defecto: Español

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  const traducciones = Traducciones[idioma]; // Accede al objeto del idioma actual

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma: cambiarIdioma, traducciones }}>
      {children}
    </IdiomaContext.Provider>
  );
};

// Hook personalizado
export const useIdioma = () => useContext(IdiomaContext);
