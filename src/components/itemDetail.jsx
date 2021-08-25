import { useState } from "react";

function ItemDetail(props) {
  const [cantidad, setCantidad] = useState();
  const onAdd = (producto) => {
    console("agregaron un producto", producto);
    // voy a motrar un boton que diga, terminar  mi compra
    // y me va a redigir a una nueva pagina /cart  que por ahora esta vacio
  };
  return (
    <div>
      <h1>Soy el detalle del item</h1>
      <h1>{props.name}</h1>
      <img src={props.img} />
      <h4>$ {props.price}</h4>
      <h3>stock {props.stock}</h3>
      {/** crear el itemCount */}
      {/* <ItemCount onAdd={onAdd} /> */}
      <button>finalizar Compra</button>
    </div>
  );
}

export default ItemDetail;
