import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  return (
    <section id="login">
      <h2>Iniciar Sesión</h2>
      <form action="login.php" method="post">
        <input type="text" name="usuario" placeholder="Usuario" required />
        <input type="password" name="contrasena" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
};

export default LoginForm;
