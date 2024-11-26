import React, { useState } from 'react'
import '../styles/kirish.css'
function Kirish() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Backendga foydalanuvchi ma'lumotlarini yuborish yoki autentifikatsiya qilish
        console.log("Email:", email, "Password:", password);
    };
    return (
        <div className='container'>
            <div className="login-container">
                <h2>Kirish</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Emailingizni kiriting"
                        required
                    />
                    <label htmlFor="password">Parol</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Parolingizni kiriting"
                        required
                    />
                    <button type="submit" className="login-btn">
                        Kirish
                    </button>
                </form>
                <p className="signup-prompt">
                    Akkauntingiz yo'qmi? <a href="/ro'yxatdan_o'tish">Ro'yxatdan o'ting</a>
                </p>
            </div>
        </div>
    )
}

export default Kirish
