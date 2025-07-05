import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function ProductInfo({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const product = products.find((p) => p.id === parseInt(id));

  // Redirect to billing if coming from cart's Buy Now
  React.useEffect(() => {
    if (location.state?.buyNow && product) {
      navigate("/billing", { state: { buyNowProduct: { ...product, quantity: product.quantity || 1 } } });
    }
  }, [location.state, product, navigate]);

  // State for reviews, questions, pincode, etc.
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [reviews, setReviews] = React.useState([]);
  const [question, setQuestion] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  const [pincode, setPincode] = React.useState("");
  const [deliveryMsg, setDeliveryMsg] = React.useState("");

  const bankOffers = [
    { bank: "HDFC", offer: "5% cashback on HDFC Credit Cards" },
    { bank: "SBI", offer: "₹500 off on SBI Debit Cards" },
    { bank: "ICICI", offer: "10% instant discount on ICICI Netbanking" },
    { bank: "Axis", offer: "5% off on Axis Bank Cards" },
    { bank: "Kotak", offer: "₹300 cashback on Kotak Credit Cards" },
  ];

  const handleAddReview = () => {
    if (review && rating) {
      setReviews([...reviews, { rating, review }]);
      setReview("");
      setRating(0);
    }
  };

  const handleCheckPincode = () => {
    if (/^\d{6}$/.test(pincode)) {
      setDeliveryMsg("✅ Delivery available to your location!");
    } else {
      setDeliveryMsg("❌ Please enter a valid 6-digit pincode.");
    }
  };

  const handleAddQuestion = () => {
    if (question) {
      setQuestions([...questions, question]);
      setQuestion("");
    }
  };

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: 32,
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "#1a73e8",
          fontSize: 18,
          cursor: "pointer",
          marginBottom: 24,
          fontWeight: 500,
          transition: "color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.color = "#0d47a1")}
        onMouseOut={(e) => (e.target.style.color = "#1a73e8")}
      >
        ← Back
      </button>
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: 320,
            height: 320,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            background: "#f7f7f7",
          }}
        />
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              margin: "0 0 12px 0",
              color: "#222",
              letterSpacing: "-1px",
            }}
          >
            {product.name}
          </h2>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#27ae60",
              margin: "0 0 16px 0",
            }}
          >
            {product.price}
          </p>
          <p
            style={{
              fontSize: 16,
              color: "#444",
              marginBottom: 18,
              lineHeight: 1.6,
            }}
          >
            {product.desc}
          </p>
          <button
            style={{
              background: "linear-gradient(90deg, #111 0%, #222 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "14px 36px",
              fontSize: 18,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "background 0.2s, transform 0.1s",
              marginBottom: 18,
            }}
            onMouseOver={(e) => (e.target.style.background = "#333")}
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #111 0%, #222 100%)")
            }
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            style={{
              background: "linear-gradient(90deg, #ff9800 0%, #ffc107 100%)",
              color: "#222",
              border: "none",
              borderRadius: 8,
              padding: "14px 36px",
              fontSize: 18,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(255,193,7,0.15)",
              transition: "background 0.2s, transform 0.1s",
              marginBottom: 18,
              marginLeft: 12,
            }}
            onMouseOver={(e) => (e.target.style.background = "#ffb300")}
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #ff9800 0%, #ffc107 100%)")
            }
            onClick={() => {
              addToCart(product);
              navigate("/billing", { state: { buyNowProduct: { ...product, quantity: 1 } } });
            }}
          >
            Buy Now
          </button>
          {/* Delivery to Pincode */}
          <div style={{ marginBottom: 18 }}>
            <input
              type="text"
              placeholder="Enter pincode"
              value={pincode}
              maxLength={6}
              onChange={(e) => setPincode(e.target.value.replace(/\D/, ""))}
              style={{
                padding: "8px 12px",
                borderRadius: 6,
                border: "1px solid #ccc",
                marginRight: 8,
                width: 120,
              }}
            />
            <button
              onClick={handleCheckPincode}
              style={{
                background: "#1a73e8",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "8px 18px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Check
            </button>
            <span style={{ marginLeft: 12, fontWeight: 500 }}>
              {deliveryMsg}
            </span>
          </div>
          {/* Bank Offers */}
          <div
            style={{
              background: "#f8f9fa",
              borderRadius: 8,
              padding: "12px 18px",
              marginBottom: 18,
              border: "1px solid #e0e0e0",
            }}
          >
            <strong style={{ color: "#1a73e8" }}>Available Offers:</strong>
            <ul style={{ margin: "8px 0 0 0", paddingLeft: 18 }}>
              {bankOffers.map((offer, idx) => (
                <li key={idx} style={{ marginBottom: 4 }}>
                  <span style={{ color: "#222", fontWeight: 500 }}>
                    {offer.bank}:
                  </span>{" "}
                  <span style={{ color: "#388e3c" }}>{offer.offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Full Description */}
      <div
        style={{
          marginTop: 32,
          padding: "18px 0",
          borderTop: "1px solid #eee",
        }}
      >
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
          Product Details
        </h3>
        <p style={{ color: "#444", fontSize: 16 }}>
          {product.fullDesc ||
            "This is a premium quality product, designed for comfort and performance. Please refer to the product specifications for more details."}
        </p>
      </div>
      {/* Ratings & Reviews */}
      <div
        style={{
          marginTop: 32,
          padding: "18px 0",
          borderTop: "1px solid #eee",
        }}
      >
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
          Ratings & Reviews
        </h3>
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontWeight: 600, marginRight: 8 }}>Your Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: 22,
                color: star <= rating ? "#ffc107" : "#ccc",
                cursor: "pointer",
              }}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{
            width: "100%",
            minHeight: 60,
            borderRadius: 6,
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 8,
          }}
        />
        <button
          onClick={handleAddReview}
          style={{
            background: "#388e3c",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 18px",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: 16,
          }}
        >
          Submit Review
        </button>
        <div>
          {reviews.length === 0 ? (
            <p style={{ color: "#888" }}>No reviews yet.</p>
          ) : (
            reviews.map((r, idx) => (
              <div
                key={idx}
                style={{
                  background: "#f7f7f7",
                  borderRadius: 6,
                  padding: "10px 14px",
                  marginBottom: 8,
                }}
              >
                <span style={{ color: "#ffc107", fontSize: 18 }}>
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </span>
                <span style={{ marginLeft: 8 }}>{r.review}</span>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Questions & Answers */}
      <div
        style={{
          marginTop: 32,
          padding: "18px 0",
          borderTop: "1px solid #eee",
        }}
      >
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
          Questions & Answers
        </h3>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Ask a question about this product..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              width: "70%",
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #ccc",
              marginRight: 8,
            }}
          />
          <button
            onClick={handleAddQuestion}
            style={{
              background: "#1a73e8",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 18px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Post
          </button>
        </div>
        <div>
          {questions.length === 0 ? (
            <p style={{ color: "#888" }}>No questions yet.</p>
          ) : (
            questions.map((q, idx) => (
              <div
                key={idx}
                style={{
                  background: "#f7f7f7",
                  borderRadius: 6,
                  padding: "10px 14px",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontWeight: 600, color: "#1a73e8" }}>Q:</span>{" "}
                <span>{q}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
