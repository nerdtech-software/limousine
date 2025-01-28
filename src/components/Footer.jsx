import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../image/WhatsApp Image 2025-01-28 at 16.53.11_d5ffa21b.jpg';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 text-center text-md-start mb-4">
            <div className="footer-logo">
              <h2>Raja Luxury Limousine</h2>
            </div>
            <img className="footerimg" src={logo} alt=""  />
            <p>
              We accomplish our goals with a dedicated team of professionals
              whose main priority is complete customer satisfaction. We provide
              full-service professional chauffeured services.
            </p>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-telephone"></i> 101 3456 789
              </li>
              <li>
                <i className="bi bi-envelope"></i> demo@gmail.com
              </li>
              <li>
                <i className="bi bi-geo-alt"></i> 132 Dartmouth Street, Boston,
                MA 02156, United States
              </li>
            </ul>
          </div>

          {/* Vehicles */}
          <div className="col-md-2 mb-4">
            <h5>Vehicles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Sedan
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  SUV
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Luxury Sprinter Van
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Stretch Limo
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Stretch SUV
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-4">
          <p>&copy; 2024, All Rights Reserved by Raja Luxury</p>
          <div className="social-icons d-flex justify-content-center mt-2">
            <a
              href="#"
              className="text-white me-3"
              style={{ fontSize: "20px" }}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white me-3"
              style={{ fontSize: "20px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white"
              style={{ fontSize: "20px" }}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;