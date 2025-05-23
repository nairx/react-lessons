export default function Product(props) {
  return <div>
    <h2>{props.value.name}</h2>
    <h3>{props.value.price}</h3>
    <button>Add to Cart</button>
  </div>;
}
