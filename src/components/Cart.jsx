import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, updateQty, removeItem }) {
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <div className="container py-5"><h3>Your cart is empty.</h3></div>;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {cartItems.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Price:</strong> {item.price}</p>
                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                  >-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                  >+</button>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >Remove</button>
                <button
                  style={{
                    background: "linear-gradient(90deg, #ff9800 0%, #ffc107 100%)",
                    color: "#222",
                    border: "none",
                    borderRadius: 8,
                    padding: "8px 20px",
                    fontWeight: 600,
                    cursor: "pointer",
                    marginLeft: 16,
                  }}
                  onClick={() => navigate(`/product/${item.id}`, { state: { buyNow: true } })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;