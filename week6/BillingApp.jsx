import React, { useEffect, useState } from "react";

const BillingApp = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const addToCart = (item, quantity) => {
    if (quantity > 0) {
      setCart([...cart, { ...item, quantity: parseInt(quantity) }]);
    }
  };

  const calculateTotal = () => {
    fetch("http://localhost:8080/api/total", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => setTotal(data))
      .catch((error) => console.error("Error calculating total:", error));
  };

  return (
    <div>
      <h1>Stationery Billing</h1>
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Stock: {item.stock}) 
            <input type="number" placeholder="Qty" min="1" id={`qty-${item.id}`} />
            <button onClick={() => addToCart(item, document.getElementById(`qty-${item.id}`).value)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <button onClick={calculateTotal}>Calculate Total</button>
      <h2>Total Bill: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default BillingApp;
