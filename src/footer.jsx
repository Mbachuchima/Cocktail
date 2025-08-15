import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">About Us</h3>
                    <p>At Winn-cocktail, we are passionate about the art of mixology and the joy that comes from crafting and savoring exceptional cocktails.</p>
                </div>
                <div className="footer-section small">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-list">
                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Training</a></li>
                    </ul>
                </div>
                <div className="footer-section medium">
                    <h3 className="footer-heading">Contact</h3>
                    <p>Email: chimambachu2009@outlook.com</p>
                    <p>Phone: +2348168749448</p>
                    <p>Address: Lagos, Nigeria</p>
                </div>
            </div>
            <div className="footer-bottom">
                © 2025 Chima cocktail. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;