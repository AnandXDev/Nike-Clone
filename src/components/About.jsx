// AboutUs.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1606813902483-7fa6b4d6b131?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: 2 }}>
            Step Into Performance
          </h1>
          <p className="lead fs-4 mb-4">
            Driven by innovation. Designed for athletes. Inspired by movement.
          </p>
          <a
            href="#team"
            className="btn btn-warning btn-lg shadow"
            style={{ fontWeight: "bold", letterSpacing: 1 }}
          >
            Meet Our Team
          </a>
        </div>
      </section>

      {/* Company Story */}
      <section className="container py-5">
        <div className="row align-items-center flex-md-row flex-column-reverse">
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="fs-5">
              At <span className="text-warning fw-bold">NikeClone</span>, we believe every step should feel
              powerful. Inspired by the excellence of Nike's heritage, we blend
              performance with personality, giving you shoes that push the
              limits of comfort, design, and speed.
            </p>
            <p className="fs-5">
              Whether you're training, running, or making a statement — your
              shoes should move with you, not against you.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <span className="badge bg-warning text-dark me-2">✓</span>
                Innovative Materials & Designs
              </li>
              <li className="mb-2">
                <span className="badge bg-warning text-dark me-2">✓</span>
                Athlete-Tested Comfort
              </li>
              <li>
                <span className="badge bg-warning text-dark me-2">✓</span>
                Inspired by Real Movement
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/002e46f6-562e-4efe-b315-0d4002308115_2500x1666.jpeg"
              className="img-fluid rounded-4 shadow-lg"
              alt="Nike Shoe Innovation"
              style={{ maxHeight: 350, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <h2 className="fw-bold text-warning">10K+</h2>
                <p className="text-muted mb-0">Pairs Sold</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <h2 className="fw-bold text-warning">50+</h2>
                <p className="text-muted mb-0">Cities Served</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <h2 className="fw-bold text-warning">99%</h2>
                <p className="text-muted mb-0">Positive Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100 border-0 rounded-4">
              <div className="card-body">
                <h4 className="fw-bold mb-2">🎯 Our Mission</h4>
                <p className="text-muted fs-5">
                  To empower every athlete with shoes that ignite passion,
                  enhance performance, and express individuality — at every
                  level.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100 border-0 rounded-4">
              <div className="card-body">
                <h4 className="fw-bold mb-2">🚀 Our Vision</h4>
                <p className="text-muted fs-5">
                  To be a next-generation shoe brand that leads innovation,
                  inspires movement, and champions sustainability worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 display-5">Meet Our Team</h2>
          <div className="row justify-content-center">
            {/* Team Member 1 */}
            <div className="col-md-4 mb-4">
              {/* CARD: DO NOT CHANGE */}
              <div className="card bg-secondary text-white border-0 shadow-lg rounded-4 h-100">
                <img
                  src="/Myphoto.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Founder"
                  style={{ height: 320, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #43e97b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      userSelect: "text",
                    }}
                    tabIndex={1}
                  >
                    Anand
                  </h5>
                  <a
                    href="https://www.instagram.com/anandxdev/?__pwa=1"
                    style={{ textDecoration: "none" }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span>
                      <img
                        src="https://www.pngarts.com/files/9/Instagram-Logo-PNG-Image.png"
                        width="20"
                        height="20"
                        alt="Instagram"
                      />
                      &nbsp; anandxdev
                    </span>
                  </a>
                  <p className="card-text mt-2" style={{ color: "#ffc107", fontWeight: 600 }}>
                    Founder & UI Developer
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-4 mb-4">
              {/* CARD: DO NOT CHANGE */}
              <div className="card bg-secondary text-white border-0 shadow-lg rounded-4 h-100">
                <img
                  src="/anshjpg.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Ansh Photo"
                  style={{ height: 320, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #43e97b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      userSelect: "text",
                    }}
                    tabIndex={0}
                    title="Highlight and copy my name!"
                  >
                    Ansh Chaudhary
                  </h5>
                  <a
                    href="https://www.instagram.com/bitastic06?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    style={{ textDecoration: "none" }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span>
                      <img
                        src="https://www.pngarts.com/files/9/Instagram-Logo-PNG-Image.png"
                        width="20"
                        height="20"
                        alt="Instagram"
                      />
                      &nbsp; bitastic06
                    </span>
                  </a>
                  <p className="card-text mt-2" style={{ color: "#43e97b", fontWeight: 600 }}>
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-4 mb-4">
              {/* CARD: DO NOT CHANGE */}
              <div className="card bg-secondary text-white border-0 shadow-lg rounded-4 h-100">
                <img
                  src="/abhijit.jpeg"
                  className="card-img-top rounded-top-4"
                  alt="Abhijit"
                  style={{ height: 332, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #43e97b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      userSelect: "text",
                    }}
                    tabIndex={0}
                  >
                    Abhijit
                  </h5>
                  <a
                    href="https://www.instagram.com/abhijeet.x.07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    style={{ textDecoration: "none" }}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <span>
                      <img
                        src="https://www.pngarts.com/files/9/Instagram-Logo-PNG-Image.png"
                        width="20"
                        height="20"
                        alt="Instagram"
                      />
                      &nbsp; abhijeet.x.07
                    </span>
                  </a>
                  <p className="card-text mt-2" style={{ color: "#ffe066", fontWeight: 600 }}>
                    Marketing & Branding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
