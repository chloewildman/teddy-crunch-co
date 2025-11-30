import InventoryItem from "../components/InventoryItem.jsx";

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

export default InventoryList;