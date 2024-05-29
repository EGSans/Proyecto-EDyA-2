import React, { useState } from 'react'; // Importar useState desde React
import '../styles/RegisterForm.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        errorMessage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, errorMessage: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData;

        // Validación de campos vacíos
        if (!username || !email || !password) {
            setFormData({ ...formData, errorMessage: 'Por favor, complete todos los campos.' });
            return;
        }

        // Validación de correo electrónico válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormData({ ...formData, errorMessage: 'Por favor, introduzca un correo electrónico válido.' });
            return;
        }

        // Lógica para completar el registro (a implementar)
        console.log('Registro completado:', formData);
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre de usuario:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />

                <label>Correo electrónico:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Contraseña:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />

                {formData.errorMessage && <p className="error-message">{formData.errorMessage}</p>}

                <button type="submit">Completar registro</button>
            </form>
        </div>
    );
};

export default RegisterForm;
