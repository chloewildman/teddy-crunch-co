import { useEffect, useState } from "react";
import "../css/reset.css";
import "../css/styles.css";

function Shop() {
  const [items, setItems] = useState([]);

  // API fetch
  const apiURL = "/models/inventory.json";

  useEffect(() => {
    async function fetchInventory() {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchInventory();
  }, []);

  function InventoryItem(item) {
    return (
      <div className="ItemCard">
        <img src={item.img} alt={item.alt} />
        <p>SKU: {item.SKU}</p>
        <p>{item.name}</p>
        <p>In stock: {item.qty}</p>
        <p>${item.price}</p>
      </div>
    );
  }

  function InventoryList({ items }) {
    return (
      <ul className="InventoryList">
        {items.map((item) => (
          <li key={item.SKU}>
            <InventoryItem {...item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="App">
      <InventoryList items={items} />
    </div>
  );
}

export default Shop;