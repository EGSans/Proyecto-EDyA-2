// src/pages/about/Collaborators.jsx
import React from 'react';
import '../../styles/Collaborators.css';

// Importa las imágenes de la carpeta assets/images
import ProfilePic from '../../assets/images/ballesteros.png';
import JuanmaPic from '../../assets/images/juanma.jpeg';
import YusefPic from '../../assets/images/yusef.jpeg';
import BackgroundImage from '../../assets/images/fondoabout.png'; // Importa la imagen de fondo

const collaborators = [
  { name: 'Juan Sebastian Ballesteros Sierra', image: ProfilePic },
  { name: 'Juan Manuel Lopez', image: JuanmaPic },
  { name: 'Yusef Gabriel Aqil Tezna', image: YusefPic },
];

const Collaborators = () => {
  return (
    <div className="collaborators" style={{ backgroundImage: `url(${BackgroundImage})` }}> {/* Aplica el fondo */}
      {collaborators.map((collaborator, index) => (
        <div key={index} className="collaborator">
          <img src={collaborator.image} alt={collaborator.name} className="collaborator-image" />
          <h3 className="collaborator-name">{collaborator.name}</h3> {/* Aplica la clase de estilo al nombre */}
        </div>
      ))}
    </div>
  );
};

export default Collaborators;
