import React from "react";
import "../css/Hero.css";
import "animate.css";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Hero({ addToCart ,products,}) {
  const navigate = useNavigate();
  // Example shoe images for 360° view (replace with your own images or 3D viewer)
  const shoeImages = [
    // Your original shoe image (add it here if you have a local or remote image)
    // Example: require('../assets/my-shoe.png') or a URL string
    "https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/g/n/7/10-5g-845-10-campus-mod-blu-wht-original-imah9bgw6y4v9hva.jpeg?q=90",
    "https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/g/n/7/10-5g-845-10-campus-mod-blu-wht-original-imah9bgw6y4v9hva.jpeg?q=90",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/1/1e2e6b7e6e3e4a8e8e6fae7e6e6e6e6e_9366/Ultraboost_1.0_Shoes_White_GZ0448_02_standard.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/1/1e2e6b7e6e3e4a8e8e6fae7e6e6e6e6e_9366/Ultraboost_1.0_Shoes_White_GZ0448_03_standard.jpg",
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/1/1e2e6b7e6e3e4a8e8e6fae7e6e6e6e6e_9366/Ultraboost_1.0_Shoes_White_GZ0448_04_standard.jpg",
  ];

  // Add unique id to each product

  const shoeColors = [
    {
      name: "White",
      shoe: "#fff",
      bg: "#222",
      text: "Classic White: Style. Comfort. Confidence.",
    },
    {
      name: "Red",
      shoe: "#e53935",
      bg: "#ffeaea",
      text: "Bold Red: Stand out in every step.",
    },
    {
      name: "Blue",
      shoe: "#1e88e5",
      bg: "#e3f2fd",
      text: "Cool Blue: Walk with confidence.",
    },
    {
      name: "Black",
      shoe: "#222",
      bg: "#fff",
      text: "Sleek Black: Timeless and versatile.",
    },
  ];

  const [currentImage, setCurrentImage] = React.useState(0);
  const [currentColor, setCurrentColor] = React.useState(0);

  // Simulate 360° scroll (left/right)
  const handlePrev = () =>
    setCurrentImage((prev) => (prev === 0 ? shoeImages.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentImage((prev) => (prev === shoeImages.length - 1 ? 0 : prev + 1));

  // Change color
  const handleColorChange = (idx) => setCurrentColor(idx);

  // HERO SECTION COLOR ENHANCEMENTS
  // Define hero background and accent colors for white/black navbar compatibility
  const heroBgGradient =
    "linear-gradient(120deg, #fff 60%, #222 100%)"; // white to black
  const heroAccentColor = "#222"; // for text on white
  const heroAccentColorDark = "#fff"; // for text on black

  // Responsive hero title shadow for contrast
  const heroTitleShadow =
    "0 4px 24px rgba(34,34,34,0.12), 0 1.5px 0 #fff, 0 2.5px 0 #222";

  // Button color styles for hero section
  const heroBtnStyle = {
    background: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 32px",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "1px",
    boxShadow: "0 2px 12px #2222",
    transition: "background 0.2s, color 0.2s",
  };
  const heroBtnAltStyle = {
    background: "#fff",
    color: "#222",
    border: "2px solid #222",
    borderRadius: "8px",
    padding: "12px 32px",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "1px",
    boxShadow: "0 2px 12px #fff2",
    transition: "background 0.2s, color 0.2s",
  };

  
  
  const Trending = [
    {
      id: 1,
      name: "AirFlex Runner",
      price: "₹4,999",
      desc: "Lightweight, breathable sneakers for your daily runs.",
      tag: "New Arrival",
      img: "https://zorvelavibe.odoo.com/web/image/product.template/9/image_1920?unique=1a426bc",
    },
    {
      id: 2,
      name: "StreetMax Canvas",
      price: "₹2,799",
      desc: "Classic style meets everyday comfort.",
      tag: "Best Seller",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/q/a/10-i-c100-brown-10-kastava-brown-original-imahb9ffhghyjtpy.jpeg?q=70",
    },
    {
      id: 3,
      name: "UrbanHike Boot",
      price: "₹6,199",
      desc: "Built for the outdoors with waterproof leather.",
      tag: "",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/h/l/9-k1220g-nyb-9-paragon-navy-blue-original-imah7jg9nn5wg76h.jpeg?q=70",
    },
    {
      id: 4,
      name: "Trail Runner Pro",
      price: "₹5,499",
      desc: "Durable trail shoes with extra grip.",
      tag: "",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/z/e/9-pl-03-elentino-muticolor-original-imaggraegbtk4phz.jpeg?q=70",
    },
    {
      id: 5,
      name: "UltaTrail CTM",
      price: "₹7,299",
      desc: "Premium ultra‑trail running shoe.",
      tag: "",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/k/v/9-4556-xtoon-sea-green-original-imagq2zyzzgk89qy.jpeg?q=70",
    },
    {
      id: 6,
      name: "Sporty Red Sneaker",
      price: "₹3,999",
      desc: "Bold athletic sneaker, breathable.",
      tag: "",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/q/a/10-401web-tan-10-10-0-free-kicks-tan-webprint-original-imahdfjn2hvzsmse.jpeg?q=70",
    },
    {
      id: 7,
      name: "Juniper Trail 3",
      price: "₹4,599",
      desc: "Lightweight trail-running shoe.",
      tag: "",
      img: "https://famousfootwear.com/ProductImages/shoes_ia1056423.jpg",
    },
    {
      id: 8,
      name: "Nucleo Runner",
      price: "₹6,799",
      desc: "Modern cushioned running shoe.",
      tag: "",
      img: "https://m.media-amazon.com/images/I/81UNz7iZz9L._SY695_.jpg",
    },
    {
      id: 9,
      name: "Max Cushion Runner",
      price: "₹8,999",
      desc: "Plush soft-foamed running shoe.",
      tag: "",
      img: "https://topoathletic.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/m/e/men-s-atmos-black-white_1.png",
    },
    {
      id: 10,
      name: "Energen Lux",
      price: "₹5,299",
      desc: "Reebok's versatile running trainer.",
      tag: "",
      img: "https://assets.reebok.com/images/w_600,f_auto,q_auto/373336479b674ac5b7b6af1700f92783_9366/Energen_Lux_Shoes_Black_H00508_01_standard.jpg",
    },
    {
      id: 11,
      name: "Cloudrunner 2",
      price: "₹7,499",
      desc: "Supportive road-running shoe.",
      tag: "",
      img: "https://cdn.on-running.com/shop/products/31.99241-2/desktop/cloudrunner-2-m-fawn-frost-m-1.jpg",
    },
  ];
  const [offerEndsAt] = React.useState(() => {
    // Set offer end date/time (e.g., 2 days from now)
    const now = new Date();
    now.setDate(now.getDate() + 2);
    now.setHours(23, 59, 59, 999);
    return now;
  });
  const [timeLeft, setTimeLeft] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = offerEndsAt - now;
      if (diff <= 0) {
        setTimeLeft({ expired: true });
        clearInterval(interval);
      } else {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [offerEndsAt]);

  // Add this state for category selection
  const [activeCategory, setActiveCategory] = React.useState("Running Shoes");

  // Animation wrapper using Animate.css and AOS (Animate On Scroll)
  // Make sure to install and import Animate.css and AOS in your project for best results.
  // npm install animate.css aos
  // import "animate.css";
  // import AOS from "aos";
  // import "aos/dist/aos.css";
  React.useEffect(() => {
    // Dynamically import AOS only on client side
    import("aos").then((AOS) => {
      AOS.init({ duration: 900, once: true });
    });
  }, []);

  return (
    <>
      <div className="container-fluid linear" style={{
      
      }}>
        <div
          className="container text-end"
          style={{
            backgroundImage: "url()",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div className="large centered row" data-aos="fade-down">
            <div className="col">
              <div className="square"></div>
            </div>
          </div>
          <div className="small centered row" data-aos="fade-right"></div>
          <img
            src="/public/shoes-resize.png"
            alt=""
            width="70%"
            height="90%"
            data-aos="zoom-in"
            className="animate__animated animate__pulse animate__infinite"
            style={{ animationDuration: "2s" }}
          />
          <i>
            <h1
              className="hero-title animated-h1 animate__animated animate__fadeInUp"
              style={{
                position: "absolute",
                top: "20%",
                left: "32%",
                transform: "translate(-50%, -50%)",
                color: "#222",
                background: "rgba(255,255,255,0.8)",
                padding: "0.5em 1.5em",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "75px",
                zIndex: 2,
                animation: "fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              data-aos="fade-up"
            >
              Find your Perfect Pair
              <p
                style={{
                  fontSize: "30px",
                  position: "absolute",
                  left: "12%",
                  top: "80%",
                  justifyContent: "space-between",
                }}
                className="text-start animate__animated animate__fadeInLeft"
                data-aos="fade-left"
              >
                Discover the perfect pair for every occasion. Trendy,
                comfortable, and made for you.
              </p>
              <div
                style={{
                  position: "absolute",
                  top: "250%",
                  left: "12%",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                data-aos="fade-up"
              >
                <button
                  className="btn animate__animated animate__pulse"
                  style={{
                    height: "55px",
                    padding: "0 24px",
                    fontSize: "18px",
                  }}
                >
                  Shop now
                </button>
                <style>
                  {`
            button {
            background: #fff;
            border: none;
            padding: 10px 20px;
            display: inline-block;
            font-size: 15px;
            font-weight: 600;
            width: 120px;
            text-transform: uppercase;
            cursor: pointer;
            transform: skew(-21deg);
            }

            span {
            display: inline-block;
            transform: skew(21deg);
            }

            button::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 100%;
            left: 0;
            background: rgb(20, 20, 20);
            opacity: 0;
            z-index: -1;
            transition: all 0.5s;
            }

            button:hover {
            color: #fff;
            }

            button:hover::before {
            left: 0;
            right: 0;
            opacity: 1;
            }

            @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translate(-50%, 40px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
            }
            `}
                </style>
                <button className="animate__animated animate__bounceIn">
                  <span>Explore Collection!</span>
                </button>
              </div>
            </h1>
          </i>
        </div>
      </div>

      {/* Removed <i> from h2 as requested */}
        <div style={{ height: "4rem" }} />

        {/* Shop Section */}
        <div className="container my-5" style={{ marginTop: "8rem" }}>
          <div className="container my-5"></div>
          <div
            className="d-flex align-items-center mb-4"
            style={{
          gap: "1rem",
            }}
            data-aos="fade-right"
          >
            <h2
            id="shop-link"
          className="fw-bold"
          style={{
            fontSize: "2rem",
            color: "#23395d",
            letterSpacing: "1px",
            marginBottom: 0,
            textShadow: "0 1px 4px #e3f2fd",
            fontFamily: "cursive",
          }}
            >
          <span
            style={{
              background: "linear-gradient(90deg, #23395d 60%, #4f8a8b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Featured Shoes
          </span>
            </h2>
            <span
          className="badge bg-warning text-dark"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "1px",
            padding: "0.5em 1em",
            borderRadius: "8px",
            boxShadow: "0 2px 8px #ffe082",
          }}
            >
          HOT PICKS
            </span>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.slice(0, 6).map((product, idx) => (
          <div className="col" key={idx} data-aos="zoom-in-up">
            <div
              className="card h-100 shadow-sm"
              style={{
            border: "2px solid #e3f2fd",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow:
              idx === 0
          ? "0 0 24px 4px #23395d"
          : "0 2px 12px rgba(35,57,93,0.08)",
            transform: idx === 0 ? "scale(1.04)" : "scale(1)",
            zIndex: idx === 0 ? 2 : 1,
            position: "relative",
            overflow: "hidden",
              }}
            >
              {idx === 0 && (
            <span
              style={{
          position: "absolute",
          top: "12px",
          right: "-32px",
          background: "linear-gradient(90deg,#4f8a8b,#23395d)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1rem",
          padding: "0.5em 2.5em",
          transform: "rotate(20deg)",
          zIndex: 3,
          boxShadow: "0 2px 8px #23395d",
          letterSpacing: "1px",
              }}
            >
              ⭐ Highlight
            </span>
              )}
              <img
            src={product.img}
            className="card-img-top"
            alt={product.name}
            style={{
              objectFit: "cover",
              height: "250px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              borderBottom: "2px solid #e3f2fd",
            }}
            data-aos="fade-up"
              />
              <div className="card-body">
            <h5
              className="card-title"
              style={{
          fontWeight: 700,
          color: idx === 0 ? "#4f8a8b" : "#23395d",
          fontSize: "1.3rem",
              }}
            >
              {product.name}
            </h5>
            <h6
              className="card-subtitle mb-2"
              style={{
          color: "#4f8a8b",
          fontWeight: 600,
          fontSize: "1.1rem",
              }}
            >
              {product.price}
            </h6>
            <p className="card-text">{product.desc}</p>
            <div
              className="d-flex gap-5 justify-content-end align-items-center"
              style={{ gap: "0.5rem", marginBottom: "0.5rem" }}
            >
              {product.tag && (
          <span className="badge bg-primary">{product.tag}</span>
              )}
              <div className="d-flex gap-3">
          <button
              className="btn animate__animated animate__pulse"
              style={{
          background: "#23395d",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "6px 18px",
          fontWeight: 600,
          fontSize: "0.95rem",
          boxShadow: "0 2px 8px #e3f2fd",
          transition: "background 0.2s",
              }}
              onClick={() => navigate(`/product/${product.id}`)}
          >
              Buy Now
          </button>
          <button
              className="btn animate__animated animate__fadeIn"
              style={{
          background: "#fff",
          color: "#23395d",
          border: "2px solid #23395d",
          borderRadius: "6px",
          padding: "6px 18px",
          fontWeight: 600,
          fontSize: "0.95rem",
          boxShadow: "0 2px 8px #e3f2fd",
          transition: "background 0.2s, color 0.2s",
              }}
              onClick={() => addToCart(product)}
          >
              Add To Cart
          </button>
              </div>
            </div>
              </div>
            </div>
          </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="container my-5">
          <div
            className="d-flex align-items-center mb-4"
            style={{ gap: "1rem" }}
            data-aos="fade-left"
          >
            <h2
          id="catagories"
          className="fw-bold"
          style={{
            fontSize: "2.2rem",
            color: "#4f8a8b",
            letterSpacing: "2px",
            marginBottom: 0,
            textShadow: "0 2px 8px #e3f2fd",
          }}
            >
          <span
            style={{
              background: "linear-gradient(90deg, #4f8a8b 60%, #23395d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            }}
          >
            Shop by Category
          </span>
            </h2>
            <span
          className="badge bg-info text-dark"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "1px",
            padding: "0.5em 1em",
            borderRadius: "8px",
            boxShadow: "0 2px 8px #b3e5fc",
          }}
            >
          Explore
            </span>
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mb-4">
            {/* Running Shoes */}
          <div
            className="col"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveCategory("Running Shoes")}
            data-aos="flip-left"
          >
            <div
              className={`card h-100 text-center border-0 shadow-sm ${
          activeCategory === "Running Shoes" ? "border-primary" : ""
              }`}
              style={{
          background: "linear-gradient(135deg, #e3f2fd 70%, #fff 100%)",
          boxShadow:
            activeCategory === "Running Shoes"
              ? "0 0 16px 2px #1e88e5"
              : "0 2px 8px #e3f2fd",
          borderWidth: activeCategory === "Running Shoes" ? 2 : 0,
              }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <div
            className="mb-3"
            style={{ fontSize: "2.5rem", color: "#1e88e5" }}
          >
            <i className="bi bi-speedometer2"></i>
          </div>
          <h5 className="card-title fw-bold">Running Shoes</h5>
              </div>
            </div>
          </div>
          {/* Casual Sneakers */}
          <div
            className="col"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveCategory("Casual Sneakers")}
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <div
              className={`card h-100 text-center border-0 shadow-sm ${
                activeCategory === "Casual Sneakers" ? "border-danger" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #fffde7 70%, #fff 100%)",
                boxShadow:
                  activeCategory === "Casual Sneakers"
                    ? "0 0 16px 2px #e53935"
                    : "0 2px 8px #ffeaea",
                borderWidth: activeCategory === "Casual Sneakers" ? 2 : 0,
              }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#e53935" }}
                >
                  <i className="bi bi-emoji-sunglasses"></i>
                </div>
                <h5 className="card-title fw-bold">Casual Sneakers</h5>
              </div>
            </div>
          </div>
          {/* Trail/Outdoor */}
          <div
            className="col"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveCategory("Trail/Outdoor")}
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <div
              className={`card h-100 text-center border-0 shadow-sm ${
                activeCategory === "Trail/Outdoor" ? "border-success" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #e8f5e9 70%, #fff 100%)",
                boxShadow:
                  activeCategory === "Trail/Outdoor"
                    ? "0 0 16px 2px #43a047"
                    : "0 2px 8px #e8f5e9",
                borderWidth: activeCategory === "Trail/Outdoor" ? 2 : 0,
              }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#43a047" }}
                >
                  <i className="bi bi-tree-fill"></i>
                </div>
                <h5 className="card-title fw-bold">Trail/Outdoor</h5>
              </div>
            </div>
          </div>
          {/* Formal/Leather */}
          <div
            className="col"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveCategory("Formal/Leather")}
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <div
              className={`card h-100 text-center border-0 shadow-sm ${
                activeCategory === "Formal/Leather" ? "border-secondary" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #fbe9e7 70%, #fff 100%)",
                boxShadow:
                  activeCategory === "Formal/Leather"
                    ? "0 0 16px 2px #6d4c41"
                    : "0 2px 8px #fbe9e7",
                borderWidth: activeCategory === "Formal/Leather" ? 2 : 0,
              }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#6d4c41" }}
                >
                  <i className="bi bi-briefcase-fill"></i>
                </div>
                <h5 className="card-title fw-bold">Formal/Leather</h5>
              </div>
            </div>
          </div>
          {/* Sports/Training */}
          <div
            className="col"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveCategory("Sports/Training")}
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <div
              className={`card h-100 text-center border-0 shadow-sm ${
                activeCategory === "Sports/Training" ? "border-purple" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #f3e5f5 70%, #fff 100%)",
                boxShadow:
                  activeCategory === "Sports/Training"
                    ? "0 0 16px 2px #8e24aa"
                    : "0 2px 8px #f3e5f5",
                borderWidth: activeCategory === "Sports/Training" ? 2 : 0,
              }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="mb-3"
                  style={{ fontSize: "2.5rem", color: "#8e24aa" }}
                >
                  <i className="bi bi-lightning-fill"></i>
                </div>
                <h5 className="card-title fw-bold">Sports/Training</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Category Products: Show Nike running shoes if Running Shoes is active */}
        {activeCategory === "Running Shoes" && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {products.map((shoe, idx) => (
              <div
                className="col"
                key={shoe.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={shoe.images?.[0] || shoe.img}
                    className="card-img-top"
                    alt={shoe.name}
                    style={{ objectFit: "cover", height: "220px" }}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{shoe.name}</h5>
                    <h6 className="card-subtitle mb-2 text-primary">{shoe.price}</h6>
                    <span className="badge bg-secondary mb-2">{shoe.tag}</span>
                    <p className="card-text" style={{ minHeight: 60 }}>{shoe.desc}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center d-flex justify-content-center gap-2">
                    <button
          className="btn btn-primary animate__animated animate__fadeIn"
          onClick={() => navigate(`/product/${shoe.id}`)}
        >
          Buy Now
        </button>
        <button
          className="btn btn-outline-primary animate__animated animate__fadeIn"
          onClick={() => addToCart({
            id: shoe.id,
            name: shoe.name,
            price: shoe.price,
            desc: shoe.desc,
            img: shoe.images?.[0] || shoe.img,
            tag: shoe.tag,
          })}
        >
          Add To Cart
        </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Why Choose Us / Highlights Section */}
      <div className="container my-5">
        <div className="row justify-content-center mb-4">
          <div className="col-auto" data-aos="fade-down">
            <h2
              className="fw-bold text-center"
              style={{ fontSize: "2rem", color: "#1e88e5" }}
            >
              Why Choose Us
            </h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center">
          <div className="col" data-aos="zoom-in">
            <div className="card border-0 shadow-sm h-100 py-4">
              <div className="card-body">
                <div
                  className="mb-2"
                  style={{ fontSize: "2rem", color: "#43a047" }}
                >
                  <i className="bi bi-truck"></i>
                </div>
                <h6 className="fw-bold mb-1">Free Shipping over ₹999</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                  Enjoy free delivery on orders above ₹999.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in" data-aos-delay="100">
            <div className="card border-0 shadow-sm h-100 py-4">
              <div className="card-body">
                <div
                  className="mb-2"
                  style={{ fontSize: "2rem", color: "#e53935" }}
                >
                  <i className="bi bi-arrow-counterclockwise"></i>
                </div>
                <h6 className="fw-bold mb-1">7-Day Easy Returns</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                  Hassle-free returns within 7 days.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in" data-aos-delay="200">
            <div className="card border-0 shadow-sm h-100 py-4">
              <div className="card-body">
                <div
                  className="mb-2"
                  style={{ fontSize: "2rem", color: "#1e88e5" }}
                >
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <h6 className="fw-bold mb-1">100% Genuine Products</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                  Authenticity guaranteed on every purchase.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in" data-aos-delay="300">
            <div className="card border-0 shadow-sm h-100 py-4">
              <div className="card-body">
                <div
                  className="mb-2"
                  style={{ fontSize: "2rem", color: "#8e24aa" }}
                >
                  <i className="bi bi-shield-lock-fill"></i>
                </div>
                <h6 className="fw-bold mb-1">Secure Online Payments</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                  Safe &amp; encrypted payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sample Products Section */}
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col text-center" data-aos="fade-down">
            <h2
              className="fw-bold"
              style={{ fontSize: "2rem", color: "#e53935" }}
            >
              Trending Products
            </h2>
            <p className="text-muted">Check out some of our best picks!</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[0, 1, 2].map((idx) => (
            <div
              className="col"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={Trending[idx].img}
                  className="card-img-top"
                  alt={Trending[idx].name}
                  style={{ objectFit: "cover", height: "220px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{Trending[idx].name}</h5>
                  <h6 className="card-subtitle mb-2 text-primary">
                    {Trending[idx].price}
                  </h6>
                  <p className="card-text">{Trending[idx].desc}</p>
                  {Trending[idx].tag && (
                    <span className="badge bg-success">
                      {Trending[idx].tag}
                    </span>
                  )}
                </div>
                <div className="card-footer bg-transparent border-0 text-center">
                  <button className="btn btn-outline-primary animate__animated animate__fadeIn">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Hero;
