import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage'; // Importa la página de registro

const AppRoutes = () => {
    return (
        <Router>
            {/* Utiliza el componente Routes para definir tus rutas */}
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Utiliza el prop "element" para especificar el componente */}
                <Route path="/register" element={<RegisterPage />} /> {/* Utiliza el prop "element" para especificar el componente */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
