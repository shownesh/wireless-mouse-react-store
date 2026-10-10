
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const price = 499;
  const productName = "Wireless Mouse";

  useEffect(() => {
    console.log("Cart quantity updated:", quantity);
  }, [quantity]);

  return (
    <div className="app">
      <Header />

      <main>
        <button
          className="toggle-button"
          onClick={() => setShowProduct((prev) => !prev)}
        >
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            name={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            deliveryCity={deliveryCity}
            setDeliveryCity={setDeliveryCity}
            onAdd={() => setQuantity((q) => q + 1)}
            onRemove={() => setQuantity((q) => Math.max(0, q - 1))}
            onReset={() => setQuantity(0)}
          />
        )}

        <p className="cart-summary">
          Current Cart Total: ₹{quantity * price}
        </p>
      </main>

      <Footer />
    </div>
  );
}
