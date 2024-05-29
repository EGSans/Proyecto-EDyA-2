// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'; // Asegúrate de importar los estilos globales
import './helpers/firebaseConfig'; // Inicializa Firebase
import AppRoutes from './routes/AppRoutes'; // Importa las rutas de la aplicación

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes /> {/* Usa las rutas en lugar de App */}
  </React.StrictMode>,
  document.getElementById('root')
);
