import Item from "./item";

function ItemList({ products, onAdd }) {
  return (
    <div>
      {products.map((item) => (
        <Item {...item} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default ItemList;
