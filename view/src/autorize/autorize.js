import { useState } from 'react';
import axios from 'axios';
 const   PaymentForm=()=> {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/authorize-payment', {
        amount,
        cardNumber,
        expirationDate,
        cvv
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Card number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <label>
        Expiration date:
        <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
      </label>
      <label>
        CVV:
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PaymentForm