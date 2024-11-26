import React from 'react'
import '../styles/servicesAbout.css'
import { useParams } from 'react-router-dom';
const servicesData = [
    {
      id: 'uzi',
      name: 'UZI',
      description: 'Ultratovush tekshiruvi — bu organlar va to‘qimalarning holatini baholash uchun ishlatiladigan xavfsiz va tezkor usul.',
      doctors: ['Dr. Abdulla', 'Dr. Mavluda', 'Dr. Shaxzod'],
      price: '100 000 UZS',
      image: 'https://via.placeholder.com/600x300' // Xizmat rasmi
    },
    {
      id: 'neurolog',
      name: 'Nevropatolog',
      description: 'Asab tizimining kasalliklarini diagnostika qilish va davolashda yordam beramiz.',
      doctors: ['Dr. Jamshid', 'Dr. Muhlisa'],
      price: '200 000 UZS',
      image: 'https://via.placeholder.com/600x300'
    },
    // Boshqa xizmatlarni shu yerga qo'shing
  ];
function ServicesAbout() {
    const { id } = useParams();
    const service = servicesData.find((service) => service.id === id);
  
    if (!service) {
      return <div>Xizmat topilmadi!</div>;
    }
  return (
    <div className='container'>
        <div className="service-details">
      <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
      <div className="service-content">
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        <h3>Shifokorlar:</h3>
        <ul>
          {service.doctors.map((doctor, index) => (
            <li key={index}>{doctor}</li>
          ))}
        </ul>
        <h4>Narxi: {service.price}</h4>
      </div>
    </div>
    </div>
  )
}

export default ServicesAbout
