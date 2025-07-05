import { useState ,useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Cart from "./components/Cart";

import ProductInfo from "./components/ProductInfo";
import AboutUs from "./components/About";
import Billing from "./components/Billing";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(()=>{
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  
  });

   useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  
  const products = [
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
    
    {
      id: 1001,
      name: "Nike Pegasus 41",
      price: "₹11,895",
      tag: "All‑rounder",
      desc:
        "The Pegasus 41 is Nike’s dependable daily runner—lightweight, responsive React cushioning with Zoom Air, praised by SELF as a balanced do‑it‑all shoe.",
      images: [
        "https://images.openai.com/thumbnails/bd0903e7f4dbf02906516ffe8e53f769.webp",
      ],
    },
    {
      id: 1002,
      name: "Nike Vomero 18",
      price: "₹13,295",
      tag: "Plush Cushion",
      desc:
        "A premium-cushioned daily trainer with soft foam and a smooth, supportive ride—highly rated for long-distance comfort.",
      images: [
        "https://images.openai.com/thumbnails/7486819e44040e640476b994aa259036.webp",
      ],
    },
    {
      id: 1003,
      name: "Nike Downshifter 13",
      price: "₹4,295",
      tag: "Budget Basic",
      desc:
        "A solid entry-level running shoe with lightweight cushioning and breathable mesh, great for beginners or light training at an affordable price.",
      images: [
        "https://images.openai.com/thumbnails/f75bcf402c059dfc9d6965b42cc042f4.webp",
      ],
    },
    {
      id: 1004,
      name: "Nike Run Defy",
      price: "₹3,995",
      tag: "Budget Stability",
      desc:
        "A value-packed sneaker with supportive foam cushioning, decent stability, and versatile enough for road runs or gym sessions.",
      images: [
        "https://images.openai.com/thumbnails/7486819e44040e640476b994aa259036.webp",
      ],
    },
    {
      id: 1005,
      name: "Nike Pegasus 41 (Men’s)",
      price: "₹11,895 (MRP)",
      tag: "Daily Trainer / Bestseller",
      desc:
        "New ReactX foam combined with dual Air Zoom units delivers a springy, responsive ride. Engineered mesh upper enhances breathability and comfort. Ideal for everyday road runs.",
      images: [
        "https://cdn.runrepeat.com/storage/gallery/product_content/40390/nike-pegasus-41-21636083-main.jpg",
      ],
    },
    {
      id: 1006,
      name: "Nike Pegasus 41 GORE‑TEX (Men’s)",
      price: "$136.97 (₹11,300)",
      tag: "Weather‑Resistant",
      desc:
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto%2Cq_auto%3Aeco/de7f0b98-d4ba-44ee-9373-6b9d086b4843/AIR%2BZM%2BPEGASUS%2B41%2BGTX.png",
      images: [
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto%2Cq_auto%3Aeco/de7f0b98-d4ba-44ee-9373-6b9d086b4843/AIR%2BZM%2BPEGASUS%2B41%2BGTX.png",
      ],
    },
    {
      id: 1007,
      name: "Nike Vomero 18 (Men’s)",
      price: "₹13,295 (MRP)",
      tag: "Plush Cushioning",
      desc:
        "https://gazellesports.com/cdn/shop/files/AURORA_FD2722-400_PHSRH000-2000.jpg?v=1728064449",
      images: [
        "https://gazellesports.com/cdn/shop/files/AURORA_FD2722-400_PHSRH000-2000.jpg?v=1728064449",
      ],
    },
    {
      id: 1008,
      name: "Nike Pegasus 41 (Women’s)",
      price: "₹11,895 (MRP)",
      tag: "Lightweight Daily",
      desc:
        "Same responsive ReactX + Air Zoom cushioning scaled for women's fit. Breathable engineered mesh and wide color range make it a daily favorite.",
      images: [
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto%2Cq_auto%3Aeco/dd337ee0-6898-4970-8e72-d7f47d3554fd/W%2BAIR%2BZOOM%2BPEGASUS%2B41.png",
      ],
    },
  
  ];

  

  return (
    <>
      <NavBar cartCount={cartItems.reduce((a, c) => a + c.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Hero addToCart={addToCart} products={products}/>} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          }
        />
        <Route path="/product/:id" element={<ProductInfo products={products} addToCart={addToCart} />} />
        <Route path="/billing" element={<Billing products={products} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
