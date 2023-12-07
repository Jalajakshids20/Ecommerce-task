import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media">
                {/* Social Media Links */}
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            </div>

            {/* Testimonials */}
            <div className="testimonials">
                <h3>Testimonials</h3>
                <p>"Great products and excellent service!" - Customer A</p>
                <p>"Highly recommended! Will buy again." - Customer B</p>
                {/* Add more testimonials as needed */}
            </div>

            {/* Copyright */}
            <div className="copy">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
