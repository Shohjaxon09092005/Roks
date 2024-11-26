import React, { useState } from "react";
import '../styles/online.css'
function Online() {
    
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Yozilgan ma'lumotlar:", formData);
        alert("Siz muvaffaqiyatli yozildingiz! Biz tez orada siz bilan bog'lanamiz.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
      };
  return (
    <div className='container'>
      <div className="appointment-container">
      <h2>Online Qabulga Yozilish</h2>
      <p>Quyidagi formani to‘ldirib, online qabulga yozilishingiz mumkin</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>To'liq Ismingiz</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ismingiz va familiyangiz"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Emailingizni kiriting"
            required
          />
        </div>
        <div className="form-group">
          <label>Telefon Raqam</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+998 XX XXX XX XX"
            required
          />
        </div>
        <div className="form-group">
          <label>Sana</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Vaqt</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Xabar</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Qisqacha izohingiz (ixtiyoriy)"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Yozilish
        </button>
      </form>
    </div>
    </div>
  )
}

export default Online
