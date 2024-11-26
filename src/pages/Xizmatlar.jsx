import React, { useState } from 'react'
import '../styles/servicesApp.css'
import cardiologyImage from '../images/cardiolgy.jpg';
import neurologyImage from '../images/neurology.jpg';
import surgeryImage from '../images/surgery.jpg';
import pediatricsImage from '../images/pediatrics.jpg';
import { NavLink } from 'react-router-dom';
function Xizmatlar() {
  const services = [
    {
      id: 'uzi',
      name: 'Kardiologiya',
      description: 'Yurak va qon tomirlari kasalliklarini davolash.',
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: 'Nevrologiya',
      description: 'Asab tizimi bilan bog‘liq muammolarni hal qilish.',
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: 'Jarrohlik',
      description: 'Malakali jarrohlik amaliyotlari.',
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: 'Pediatriya',
      description: 'Bolalar salomatligi uchun maxsus xizmatlar.',
      image: pediatricsImage,
    },
    {
      id: 'uzi',
      name: 'Kardiologiya',
      description: 'Yurak va qon tomirlari kasalliklarini davolash.',
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: 'Nevrologiya',
      description: 'Asab tizimi bilan bog‘liq muammolarni hal qilish.',
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: 'Jarrohlik',
      description: 'Malakali jarrohlik amaliyotlari.',
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: 'Pediatriya',
      description: 'Bolalar salomatligi uchun maxsus xizmatlar.',
      image: pediatricsImage,
    },
    {
      id: 'uzi',
      name: 'Kardiologiya',
      description: 'Yurak va qon tomirlari kasalliklarini davolash.',
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: 'Nevrologiya',
      description: 'Asab tizimi bilan bog‘liq muammolarni hal qilish.',
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: 'Jarrohlik',
      description: 'Malakali jarrohlik amaliyotlari.',
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: 'Pediatriya',
      description: 'Bolalar salomatligi uchun maxsus xizmatlar.',
      image: pediatricsImage,
    },
    {
      id: 'uzi',
      name: 'Kardiologiya',
      description: 'Yurak va qon tomirlari kasalliklarini davolash.',
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: 'Nevrologiya',
      description: 'Asab tizimi bilan bog‘liq muammolarni hal qilish.',
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: 'Jarrohlik',
      description: 'Malakali jarrohlik amaliyotlari.',
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: 'Pediatriya',
      description: 'Bolalar salomatligi uchun maxsus xizmatlar.',
      image: pediatricsImage,
    },
  ];
  const [visibleCount, setVisibleCount] = useState(8); // Boshlang‘ich ko‘rsatish miqdori

  const showMore = () => {
    setVisibleCount(visibleCount + 4); // Har safar 4 ta qo‘shib ko‘rsatish
  };

  const showLess = () => {
    setVisibleCount(8); // Boshlang‘ich holatga qaytarish
  };
  return (
    <div className='serviceApp'>
      <div className="container">
        <div className="services-page">
          <h1 className="page-title">Bizning Xizmatlarimiz</h1>
          <p className="page-description">
            Biz yuqori darajadagi tibbiy xizmatlarni taqdim etamiz va har bir mijozning salomatligini yaxshilash uchun xizmat qilamiz.
          </p>
          <div className="services-grid">
            {services.slice(0, visibleCount).map((service) => (
              <NavLink to={`/ServicesAbout/${service.id}`}>
                <div className="service-card" key={service.id}>
                  <img src={service.image} alt={service.name} className="service-image" />
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-btn">Batafsil</button>
                </div></NavLink>
            ))}
          </div>
          <div className="services-buttons">
            {visibleCount < services.length ? (
              <button className="btn btn-primary" onClick={showMore}>
                Ko‘proq Ko‘rsatish
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={showLess}>
                Yopish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xizmatlar
