import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div style={{ border: "2px red solid", margin: "5px" }}>
      <h1>{props.name}</h1>
      <h4>$ {props.price}</h4>
      <h3>stock {props.stock}</h3>
      {/* <button onClick={() => props.onAdd(props)}>agregar</button> */}
      <Link to={`/item/${props.id}`}>ir al detalle</Link>
    </div>
  );
}

export default Item;
