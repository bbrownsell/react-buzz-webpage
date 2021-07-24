import React from 'react';
import './../Footer/Footer.css';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <h2>Headline</h2>
                        <p>Footer text</p>
                    </div>
                    <div className="footer-content">
                        <h2>Headline</h2>
                        <p>Footer text</p>
                    </div>
                    <div className="footer-content">
                        <h2>Headline</h2>
                        <p>Footer text</p>
                    </div>
                    <div className="footer-content">
                        <h2>Headline</h2>
                        <p>Footer text</p>
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF className="social-icon"/></a>
                    <a href="http://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="social-icon"/></a>
                    <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="social-icon"/></a>
                    <a href="http://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn className="social-icon"/></a>
                </div>
            </footer>
        </>
    )
}

export default Footer

