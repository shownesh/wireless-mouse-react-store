
export default function ProductCard({
  name,
  price,
  quantity,
  selectedColor,
  setSelectedColor,
  deliveryCity,
  setDeliveryCity,
  onAdd,
  onRemove,
  onReset,
}) {
  return (
    <section className="product-card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <label>
        Select Colour:{" "}
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </label>

      <p>Selected Colour: {selectedColor}</p>

      <label>
        Delivery City:{" "}
        <input
          type="text"
          value={deliveryCity}
          onChange={(e) => setDeliveryCity(e.target.value)}
        />
      </label>

      <p>Quantity: {quantity}</p>
      <p>Total: ₹{quantity * price}</p>

      {quantity === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <p className="success">Product added to cart</p>
      )}

      <div className="buttons">
        <button onClick={onAdd}>Add to Cart</button>

        <button onClick={onRemove} disabled={quantity === 0}>
          Remove One
        </button>

        <button onClick={onReset}>Reset Cart</button>
      </div>
    </section>
  );
}