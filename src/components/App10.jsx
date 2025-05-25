import React from "react";
import { useState } from "react";
export default function App10() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 35 },
  ]);
  const [cart, setCart] = useState({});
  const addToCart = (id) => {
    !cart[id] && setCart({ ...cart, [id]: 1 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  return (
    <div>
      <h1>App 10</h1>
      <h2>Assignment</h2>
      <h3>Products</h3>
      <ol>
        {products.map((value) => (
          <li key={value.id}>
            {value.name}-{value.price}-
            <button onClick={() => addToCart(value.id)}>Add</button>
          </li>
        ))}
      </ol>
      <hr />
      <h3>My Cart</h3>
      {products.map(
        (value) =>
          cart[value.id] && (
            <li key={value.id}>
              {value.name}-{value.price}-
              <button onClick={() => decrement(value.id)}>-</button>
              {cart[value.id]}-
              <button onClick={() => increment(value.id)}>+</button>-
              {value.price * cart[value.id]}
            </li>
          )
      )}
    </div>
  );
}
