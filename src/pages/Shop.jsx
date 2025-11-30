import { useEffect, useState } from "react";
import InventoryList from "../components/InventoryList.jsx";
import "../css/reset.css";
import "../css/styles.css";

function Shop() {
    const [items, setItems] = useState([]);

    // API fetch
    const apiURL = import.meta.env.BASE_URL + "models/inventory.json";

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

    return (
        <div className="App">
            <InventoryList items={items} />
        </div>
    );
}

export default Shop;