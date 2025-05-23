export default function Product(props) {
const price = props.price + 10000
const desc = "This is Product Description"
  return (
    <div>
      <h3>This is Product component - {props.name},{price}</h3>
      <p>
        {desc}
      </p>
    </div>
  );
}
