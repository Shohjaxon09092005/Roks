import React, { useState } from "react";
import '../styles/signUp.css'
function SignUp() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSignup = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert("Parollar mos kelmadi!");
          return;
        }
        // Backendga ma'lumot yuborish yoki autentifikatsiya qilish
        console.log("Foydalanuvchi ma'lumotlari:", formData);
      };
    
  return (
    <div className="container">
       <div className="signup-container">
      <div className="signup-header">
        <h2>Ro'yxatdan o'tish</h2>
        <p>Hozir ro'yxatdan o'ting va xizmatlardan foydalanishni boshlang!</p>
      </div>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>To'liq ism</label>
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
          <label>Telefon</label>
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
          <label>Parol</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Parol kiriting"
            required
          />
        </div>
        <div className="form-group">
          <label>Parolni tasdiqlang</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Parolni qayta kiriting"
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Ro'yxatdan o'tish
        </button>
      </form>
      <p className="login-prompt">
        Allaqachon akkauntingiz bormi? <a href="/kirish">Kirish</a>
      </p>
    </div>
    </div>
  )
}

export default SignUp
