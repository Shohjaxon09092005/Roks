import React from 'react'
import '../styles/home.css'
import Service from '../components/Service'
import Doctors from '../components/Doctors'
import FeedBack from '../components/FeedBack'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div className='home'> 
    <section className="about-section">
      <div className="section_black">
        <h1 className="title">ROKS.UZ Klinikasi</h1>
        <p className="description">
          Biz yuqori malakali shifokorlar va zamonaviy uskunalar yordamida 
          tibbiy xizmat ko'rsatamiz. Sog'ligingiz biz uchun muhim!
        </p>
        <NavLink to="/qabul"><button className="online-appointment-btn">Online yozilish</button></NavLink>
      </div>
        
      </section>
       <div className="home-page">
      {/* Qisqacha Ma'lumot */}
     

      {/* Slider yoki Banner */}
      <section className="slider-section">
        <div className="slider">
          <div className="slide" style={{ backgroundColor: '#28a745' }}>
            <h2>Aksiya: Tibbiy ko'rikdan o'tish - 20% chegirma!</h2>
            <p>Chegirma faqat 30-noyabrgacha amal qiladi.</p>
          </div>
          <div className="slide" style={{ backgroundColor: '#dc3545' }}>
            <h2>Yangi xizmatlar: Stomatologiya bo'limi ochildi!</h2>
            <p>Sifatli xizmat va qulay narxlar bilan xizmatdamiz.</p>
          </div>
          <div className="slide" style={{ backgroundColor: '#343a40' }}>
            <h2>Onkologiya markazi</h2>
            <p>Hayotingizni saqlash uchun malakali yondashuv!</p>
          </div>
        </div>
      </section>
    </div>
    <div className="container">
      <Service limit={12} showAll={false}/>
      <Doctors limit={4} showAll={false}/>
      <FeedBack/>
    </div>
    </div>
  )
}

export default Home
