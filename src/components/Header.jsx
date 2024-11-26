import React, { useRef, useState } from 'react';
import '../styles/header.css';
import logo from '../images/Roks.png'
import { NavLink } from 'react-router-dom';
import burger from '../images/burger-bar.png'
import icon from '../images/search.png'
function Header() {
  const [language, setLanguage] = useState("uz"); // Default til o‘zbekcha

  // Tilni o‘zgartirish funksiyasi
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Til o‘zgartirildi: ${lang}`); // Keyinchalik bu yerga tilni backendga yuborish funksiyasini qo‘shishingiz mumkin.
  };
  const [isSearchActive, setIsSearchActive] = useState(false);
  const modalRef=useRef()
  function delModal(){
    modalRef.current.classList.remove("openModal")
  }
  function openModal(){
    modalRef.current.classList.add("openModal")
  }
  return (
    <div className='header'>
      <div ref={modalRef} className="modal">

        <div className="modal_wrapper">
          <div className="modal_button">
            <button onClick={delModal} className="close-search">
              X
            </button>
          </div>

          <nav className="nav-links">
            <a href="/">Bosh sahifa</a>
            <a href="/Xizmatlar">Xizmatlar</a>
            <a href="/doctors">Shifokorlar</a>
            <a href="/yangiliklar">Yangiliklar</a>
            <a href="/contact">Bog‘lanish</a>
            <NavLink to="/qabul"><button className="request-btn">Online yozilish</button></NavLink>
            <a href="/kirish" className="login">Kirish</a>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo">
            <img src={logo} alt="ROKS.UZ Logo" />
            <span>ROKS.UZ</span>
          </div>
          <div className="menu_wrapper_header">
          {!isSearchActive ? (
            // Oddiy rejim: navigatsiya havolalari
            <nav className="nav-links">
              <a href="/">Bosh sahifa</a>
              <a href="/Xizmatlar">Xizmatlar</a>
              <a href="/doctors">Shifokorlar</a>
              <a href="/yangiliklar">Yangiliklar</a>
              <a href="/contact">Bog‘lanish</a>
              
            </nav>
          ) : (
            // Qidiruv rejimi: input maydoni
            <div className="search-bar">
              <input
                type="text"
                placeholder="Qidirish..."
                className="search-input"
              />
              <button
                className="close-search"
                onClick={() => setIsSearchActive(false)}
              >
                ✖
              </button>
            </div>
          )}
         
          <div className="actions">
            <NavLink to="/qabul"><button className="request-btn">Online yozilish</button></NavLink>
            <a href="/kirish" className="login">Kirish</a>
            <i
              className="search-icon"
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              <img  src={icon} alt="icon" />
            </i>
            {/* Til tanlash */}
            <div className="language-dropdown">
              <button className="language-btn">{language.toUpperCase()}</button>
              <div className="language-menu">
                <span onClick={() => handleLanguageChange("uz")}>O‘zbekcha</span>
                <span onClick={() => handleLanguageChange("ru")}>Русский</span>
                <span onClick={() => handleLanguageChange("en")}>English</span>
              </div>
            </div>
            <img onClick={openModal} className='burgerIcon' src={burger} alt="burgerMenu" />
          </div>
          </div>
          
        </div>

      </div>


    </div>

  );
}

export default Header;
