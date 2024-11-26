import React from 'react'
import { FaUserMd } from 'react-icons/fa'; // Ramz uchun
import '../styles/doctors.css'
import doctor1 from '../images/doctor1.jpg'
import doctor2 from '../images/doctor2.jpg'
import doctor3 from '../images/doctor3.jpg'
import doctor4 from '../images/doctor4.jpg'
import { NavLink } from 'react-router-dom';
function Doctors({limit,showAll}) {
    const doctors = [
        {
          id: 1,
          name: 'Dr. Aliyev Samandar',
          position: 'Kardiolog',
          image:doctor1, // Shifokor rasmi URL manzili
        },
        {
          id: 2,
          name: 'Dr. Shukurova Laylo',
          position: 'Nevropatolog',
          image: doctor2,
        },
         {
          id: 3,
          name: 'Dr. Usmonova Dildora',
          position: 'Travmatolog',
          image: doctor4,
        },
        {
          id: 4,
          name: 'Dr. Karimov Ilyos',
          position: 'Stomatolog',
          image:doctor3,
        },
       
      ];
      const displayedDoctors = showAll ? doctors : doctors.slice(0, limit);
  return (
    <section className="doctors-team">
    <h2 className="section-title">Shifokorlar Jamoasi</h2>
    <p className="section-description">
      Bizning jamoamiz malakali shifokorlardan iborat bo‘lib, ular sog‘lig‘ingizni yaxshilash uchun xizmat qilishga tayyor.
    </p>
    <div className="doctors-grid">
      {displayedDoctors.map((doctor) => (
       <NavLink to={`/DoctorsAbout/${doctor.id}`}>
        <div className="doctor-card" key={doctor.id}>
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-position">{doctor.position}</p>
        </div></NavLink> 
      ))}
    </div>
    <div className="team-button">
      <a href="/doctors" className="btn btn-primary">
        Barcha Shifokorlar <FaUserMd />
      </a>
    </div>
  </section>
  )
}

export default Doctors
