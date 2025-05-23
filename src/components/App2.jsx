import "./App2.css";
export default function App2() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ];
  return (
    <div>
      <h1>This is App2 component</h1>
      <div className="App-Product-Container">
        {products.map((value) => (
          <div className="App-Product-Box" key={value.id}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <p><button>Add to Cart</button></p>
          </div>
        ))}
      </div>
    </div>
  );
}
