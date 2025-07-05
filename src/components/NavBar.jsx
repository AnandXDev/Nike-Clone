import React from "react";
import { Link } from "react-router-dom";
function NavBar({ cartCount }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        backgroundColor: "#2C3E50",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        height: "65px",
      }}
    >
      <style>
        {`
          .navbar-nav .nav-link {
            transition: font-weight 0.2s, color 0.2s, transform 0.2s;
          }
          .navbar-nav .nav-link:hover {
            font-weight: bold;
            color: #3498db;
            transform: translateY(-2px) scale(1.05);
          }
        `}
      </style>
      <div className="container-fluid">
        <a href="/">
          <svg
            aria-hidden="true"
            className="swoosh-svg"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
            style={{width: "150px", height: "150px", color: "#111111", marginTop: "10px", marginLeft: "80px", marginBottom: "10px"}}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="text-center">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav gap-5"
              style={{ fontSize: "18px", marginTop: "1px" ,fontWeight: "500", color: "#111111" }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#shop-link"  >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catagories">
                  Catagories
                </a>
              </li>
              <li className="nav-item">
               <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Checkout
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
