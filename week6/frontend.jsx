import React, { useState } from "react";

const BillingApp = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = () => {
    if (!name || !price || !quantity) return;
    setItems([...items, { name, price: parseFloat(price), quantity: parseInt(quantity) }]);
    setName("");
    setPrice("");
    setQuantity("");
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Stationery Billing</h1>
      <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={addItem}>Add Item</button>

      <h2>Bill</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default BillingApp;
