import React, { useState } from 'react';
import { db } from '../helpers/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterForm.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    errorMessage: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, errorMessage: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setFormData({ ...formData, errorMessage: 'Por favor, complete todos los campos.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormData({ ...formData, errorMessage: 'Por favor, introduzca un correo electrónico válido.' });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'Registro'), {
        nombre: username,
        correo: email,
        contraseña: password
      });
      console.log('Registro completado con ID: ', docRef.id);
      setSuccessMessage('Registro exitoso');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (e) {
      console.error('Error añadiendo el documento: ', e);
    }
  };

  return (
    <div className="register-page">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="input-field" />
        </div>

        <div className="form-group">
          <label>Correo electrónico:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="input-field" />
        </div>

        {formData.errorMessage && <p className="error-message">{formData.errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit">Completar registro</button>
      </form>
    </div>
  );
};

export default RegisterPage;
