import React from 'react';
import '../styles/TicketPurchaseForm.css';

const TicketPurchaseForm = () => {
  return (
    <section id="compra">
      <h2>Compra de Boletos</h2>
      <form action="compra.php" method="post">
        <input type="number" name="cantidad_boletos" placeholder="Cantidad de boletos" required />
        <select name="metodo_pago" required>
          <option value="paypal">PayPal</option>
          <option value="tarjeta">Tarjeta/Débito</option>
          <option value="nequi">Nequi</option>
        </select>
        <button type="submit">Comprar</button>
      </form>
    </section>
  );
};

export default TicketPurchaseForm;
