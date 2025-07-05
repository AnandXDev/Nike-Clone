// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 ">
      <div className="container text-md-left">
        <div className="row">

          {/* Resources */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>Find A Store</li>
              <li>Become A Member</li>
              <li>Running Shoe Finder</li>
              <li>Product Advice</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li>Get Help</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>About Nike</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
              <li>Impact</li>
              <li>Report a Concern</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Guides & Policies</h6>
            <ul className="list-unstyled">
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Nike Privacy Policy</li>
              <li>Privacy Settings</li>
            </ul>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6">
            <p>India</p>
          </div>
          <div className="col-md-6 col-lg-6 text-md-end">
            <p>© 2025 Nike, Inc. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
