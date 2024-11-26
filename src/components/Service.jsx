import React from 'react'
import { FaUserMd } from 'react-icons/fa';
import '../styles/service.css'
import { NavLink } from 'react-router-dom';
function Service({limit,showAll}) {
    const services = [
        {id: 'uzi', name: 'UZI', doctors: 3 },
        {id: 'neurolog', name: 'Urolog', doctors: 5 },
        {id: 'uzi', name: 'Nevropatolog', doctors: 8 },
        {id: 'uzi', name: 'Endokrinolog', doctors: 4 },
        {id: 'uzi', name: 'Kardiolog', doctors: 3 },
        {id: 'uzi', name: 'Terapevt', doctors: 2 },
        {id: 'uzi', name: 'Ginekolog', doctors: 6 },
        {id: 'uzi', name: 'FGDSK', doctors: 2 },
        {id: 'uzi', name: 'EKG', doctors: 3 },
        {id: 'uzi', name: 'Pediatr', doctors: 3 },
        {id: 'uzi', name: 'MRT', doctors: 1 },
        {id: 'uzi', name: 'Rentgen', doctors: 1 },
        {id: 'uzi', name: 'Laboratoriya', doctors: 3 },
        {id: 'uzi', name: 'Travmatolog', doctors: 5 },
        {id: 'uzi', name: 'Stomatolog', doctors: 3 },
        {id: 'uzi', name: 'MSKT', doctors: 1 },
      ];
      const displayedServices = showAll ? services : services.slice(0, limit);
  return (
    <section className="services">
    <h2 className="services-title">Bizdagi Xizmatlar</h2>
    <div className="services-grid">
      {displayedServices.map((service, index) => (
       <NavLink to={`/ServicesAbout/${service.id}`}>
        <div  key={index} className="service-card">
          <FaUserMd className="service-icon" />
          <h3>{service.name}</h3>
          <p>{service.doctors} Shifokor</p>
        </div></NavLink> 
      ))}
    </div>
    <NavLink to="/Xizmatlar"><button className="view-more-btn">Barcha xizmatlar</button></NavLink>
  </section>
  )
}

export default Service
