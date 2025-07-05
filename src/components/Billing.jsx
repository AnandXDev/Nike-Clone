import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BillingPage({ cartItems, clearCart }) {
  const location = useLocation();
  const buyNowProduct = location.state?.buyNowProduct;
  const items = buyNowProduct ? [buyNowProduct] : cartItems;

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    pincode: "",
    payment: "cod",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + (item.price ? parseFloat(item.price.replace(/[^\d]/g, "")) * (item.quantity || 1) : 0),
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart && clearCart();
    setTimeout(() => navigate("/"), 2500);
  };

  if (orderPlaced) {
    return (
      <div style={{ maxWidth: 600, margin: "60px auto", padding: 32, background: "#fff", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", textAlign: "center" }}>
        <h2 style={{ color: "#27ae60" }}>Thank you for your order!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "48px auto", padding: 32, background: "#f8fafc", borderRadius: 20, boxShadow: "0 8px 32px rgba(35,57,93,0.13)" }}>
      <h2 style={{ marginBottom: 24, color: "#23395d" }}>Billing & Order Summary</h2>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        {/* Cart Summary */}
        <div style={{ flex: 1, minWidth: 320, background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px #e3f2fd" }}>
          <h4 style={{ marginBottom: 16 }}>Your Cart</h4>
          {items.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {items.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
                  <img src={item.img} alt={item.name} style={{ width: 54, height: 54, objectFit: "cover", borderRadius: 8, marginRight: 14, border: "1px solid #eee" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: 14, color: "#888" }}>Qty: {item.quantity || 1}</div>
                  </div>
                  <div style={{ fontWeight: 600, color: "#23395d" }}>{item.price}</div>
                </li>
              ))}
            </ul>
          )}
          <hr />
          <div style={{ fontWeight: 700, fontSize: 18, textAlign: "right" }}>
            Total: ₹{total}
          </div>
        </div>
        {/* Billing Form */}
        <form style={{ flex: 1, minWidth: 320, background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px #e3f2fd" }} onSubmit={handleOrder}>
          <h4 style={{ marginBottom: 16 }}>Billing Details</h4>
          <input name="name" required placeholder="Full Name" value={form.name} onChange={handleChange} style={inputStyle} />
          <input name="address" required placeholder="Address" value={form.address} onChange={handleChange} style={inputStyle} />
          <input name="pincode" required placeholder="Pincode" value={form.pincode} onChange={handleChange} style={inputStyle} maxLength={6} />
          <input name="phone" required placeholder="Phone Number" value={form.phone} onChange={handleChange} style={inputStyle} maxLength={10} />
          <input name="email" required placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} type="email" />
          <div style={{ margin: "12px 0" }}>
            <label>
              <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={handleChange} />
              Cash on Delivery
            </label>
            <label style={{ marginLeft: 18 }}>
              <input type="radio" name="payment" value="online" checked={form.payment === "online"} onChange={handleChange} />
              Online Payment
            </label>
          </div>
          <button type="submit" style={{ background: "#23395d", color: "#fff", border: "none", borderRadius: 8, padding: "12px 32px", fontWeight: 700, fontSize: 18, cursor: "pointer", marginTop: 12 }}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  marginBottom: 12,
  fontSize: 16,
};

export default BillingPage;