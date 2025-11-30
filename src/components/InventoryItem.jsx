

function InventoryItem(item) {
    return (
        <div className="ItemCard">
            <img src={import.meta.env.BASE_URL + item.img} alt={item.alt} />
            <p>SKU: {item.SKU}</p>
            <p>{item.name}</p>
            <p>In stock: {item.qty}</p>
            <p>${item.price}</p>
        </div>
    );
}

export default InventoryItem;