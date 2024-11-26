import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.jpg';
import doctor3 from '../images/doctor3.jpg';
import doctor4 from '../images/doctor4.jpg';
import '../styles/doctorsApp.css';
import { NavLink } from 'react-router-dom';

function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Aliyev Samandar',
      position: 'Kardiolog',
      bio: 'Yurak kasalliklari bo‘yicha 10 yillik tajribaga ega.',
      rating: 4.8,
      image: doctor1,
    },
    {
      id: 2,
      name: 'Dr. Shukurova Laylo',
      position: 'Nevropatolog',
      bio: 'Asab tizimi kasalliklarini davolash bo‘yicha mutaxassis.',
      rating: 4.9,
      image: doctor2,
    },
    {
      id: 3,
      name: 'Dr. Usmonova Dildora',
      position: 'Travmatolog',
      bio: 'Suyak va bo‘g‘im jarrohligi bo‘yicha yuqori malakali shifokor.',
      rating: 4.7,
      image: doctor3,
    },
    {
      id: 4,
      name: 'Dr. Karimov Ilyos',
      position: 'Stomatolog',
      bio: 'Og‘iz bo‘shlig‘i muammolarini hal qilishda eng yaxshi tanlov.',
      rating: 4.6,
      image: doctor4,
    },
    {
      id: 1,
      name: 'Dr. Aliyev Samandar',
      position: 'Kardiolog',
      bio: 'Yurak kasalliklari bo‘yicha 10 yillik tajribaga ega.',
      rating: 4.8,
      image: doctor1,
    },
    {
      id: 2,
      name: 'Dr. Shukurova Laylo',
      position: 'Nevropatolog',
      bio: 'Asab tizimi kasalliklarini davolash bo‘yicha mutaxassis.',
      rating: 4.9,
      image: doctor2,
    },
    {
      id: 3,
      name: 'Dr. Usmonova Dildora',
      position: 'Travmatolog',
      bio: 'Suyak va bo‘g‘im jarrohligi bo‘yicha yuqori malakali shifokor.',
      rating: 4.7,
      image: doctor3,
    },
    {
      id: 4,
      name: 'Dr. Karimov Ilyos',
      position: 'Stomatolog',
      bio: 'Og‘iz bo‘shlig‘i muammolarini hal qilishda eng yaxshi tanlov.',
      rating: 4.6,
      image: doctor4,
    },
  ];
  const [doc, setDoc] = useState(4)
  function showMore() {
    setDoc(doc + 4)
  }
  function showLess() {
    setDoc(4)
  }
  return (
    <section className="new-doctors-page">
      <h2 className="section-title">Bizning Malakali Shifokorlar</h2>
      <p className="section-description">
        Bizning shifokorlarimiz sog‘lig‘ingizni yaxshilash uchun tajribaga asoslangan xizmatlar ko‘rsatadi.
      </p>
      <div className="new-doctors-grid">
        {doctors.slice(0, doc).map((doctor) => (
          <NavLink to={`/DoctorsAbout/${doctor.id}`}>
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-position">{doctor.position}</p>
                <p className="doctor-bio">{doctor.bio}</p>
                <div className="doctor-rating">
                  {Array.from({ length: Math.floor(doctor.rating) }, (_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                  {doctor.rating % 1 !== 0 && (
                    <FaStar className="half-star-icon" />
                  )}
                  <span className="rating-number">{doctor.rating.toFixed(1)}</span>
                </div>
              </div>
            </div></NavLink>
        ))}
      </div>
      <div className="doctors-buttons">
        {doc < doctors.length ? (
          <button className="btn btn-primary" onClick={showMore}>
            Ko‘proq Ko‘rsatish
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={showLess}>
            Yopish
          </button>
        )}
      </div>
    </section>
  )
}

export default DoctorsPage
