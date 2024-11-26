import React from 'react'
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    {/* Logo va qisqacha ma'lumot */}
                    <div className="footer-about">
                        <h3 className="footer-logo">ROKS.UZ Klinikasi</h3>
                        <p className="footer-description">
                            Sog‘lig‘ingizni saqlashda sizning ishonchli hamkoringiz!
                        </p>
                    </div>

                    {/* Tezkor havolalar */}
                    <div className="footer-links">
                        <h4>Tezkor Havolalar</h4>
                        <ul>
                            <li><a href="/">Bosh sahifa</a></li>
                            <li><a href="/shifokorlar">Shifokorlar</a></li>
                            <li><a href="/xizmatlar">Xizmatlar</a></li>
                            <li><a href="/aloqa">Biz bilan bog‘laning</a></li>
                        </ul>
                    </div>

                    {/* Aloqa ma'lumotlari */}
                    <div className="footer-contact">
                        <h4>Aloqa</h4>
                        <p><FaPhoneAlt /> +998 (90) 123-45-67</p>
                        <p><FaEnvelope /> info@roks.uz</p>
                        <p><FaMapMarkerAlt /> Sirdaryo, O‘zbekiston</p>
                    </div>

                    {/* Ijtimoiy tarmoqlar */}
                    <div className="footer-socials">
                        <h4>Ijtimoiy Tarmoqlar</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright qismi */}
                <div className="footer-bottom">
                    <p>&copy; 2024 ROKS.UZ Klinikasi. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
