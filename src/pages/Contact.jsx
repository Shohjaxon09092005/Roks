import React from 'react'
import '../styles/contact.css'
import { FaTelegram,FaInstagram,FaFacebook } from 'react-icons/fa'
function Contact() {
  return (
    <section className="contact-section">
    <h2 className="section-title">Bog'lanish</h2>
    <p className="section-description">
      Biz bilan bog'laning yoki bizga xabar qoldiring!
    </p>
    <div className="container">
      <div className="contact-container">
      {/* Chap tomon: Form */}
      <div className="contact-form">
        <form>
          <label htmlFor="name">Ism</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ismingizni kiriting"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Emailingizni kiriting"
            required
          />
          <label htmlFor="message">Xabar</label>
          <textarea
            id="message"
            name="message"
            placeholder="Xabaringizni kiriting"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Yuborish
          </button>
        </form>
      </div>
      {/* O'ng tomon: Ma'lumot */}
      <div className="contact-info">
        <h3>Biz bilan bog'laning:</h3>
        <p><i className="fas fa-phone"></i> +998 (99) 123-45-67</p>
        <p><i className="fas fa-envelope"></i> info@example.com</p>
        <p><i className="fas fa-map-marker-alt"></i>Sirdaryo, O'zbekiston</p>
        <h4>Ijtimoiy tarmoqlar:</h4>
        <div className="social-icons">
          <a href="#!"><i className="fab fa-telegram"><FaTelegram/></i></a>
          <a href="#!"><i className="fab fa-instagram"><FaInstagram/></i></a>
          <a href="#!"><i className="fab fa-facebook"><FaFacebook/></i></a>
        </div>
        <div className="map-container">
            <iframe
              title="Bizning joylashuv"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.6785512831265!2d68.76355443324482!3d40.52011081541715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2074d4bc1114b%3A0x26c24a38aa3593d6!2sRDM%20Klinikasi!5e0!3m2!1suz!2s!4v1732242162179!5m2!1suz!2s"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
    </div>
    </div>
    
  </section>
  )
}

export default Contact
