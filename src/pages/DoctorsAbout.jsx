import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/doctorsAbout.css'
const doctorsData = [
    { 
      id: '1', 
      name: 'Dr. Alisher Ahmedov', 
      specialty: 'Kardiolog', 
      experience: '12 yil', 
      bio: 'Kardiologiya bo\'yicha yetakchi mutaxassis.', 
      photo: 'https://via.placeholder.com/150', 
      workingHours: 'Dushanba-Juma: 09:00 - 18:00', 
      feedback: ['Ajoyib xizmat!', 'Tez va samimiy maslahat oldim.'] 
    },
    { 
      id: '2', 
      name: 'Dr. Malika Shodmonova', 
      specialty: 'Endokrinolog', 
      experience: '8 yil', 
      bio: 'Qandli diabet va endokrin kasalliklar bo\'yicha mutaxassis.', 
      photo: 'https://via.placeholder.com/150', 
      workingHours: 'Dushanba-Payshanba: 10:00 - 17:00', 
      feedback: ['Juda foydali maslahat berdi.', 'Qoniqish hosil qildim.'] 
    },
    { 
      id: '3', 
      name: 'Dr. Malika Shodmonova', 
      specialty: 'Endokrinolog', 
      experience: '8 yil', 
      bio: 'Qandli diabet va endokrin kasalliklar bo\'yicha mutaxassis.', 
      photo: 'https://via.placeholder.com/150', 
      workingHours: 'Dushanba-Payshanba: 10:00 - 17:00', 
      feedback: ['Juda foydali maslahat berdi.', 'Qoniqish hosil qildim.'] 
    },
    { 
      id: '4', 
      name: 'Dr. Malika Shodmonova', 
      specialty: 'Endokrinolog', 
      experience: '8 yil', 
      bio: 'Qandli diabet va endokrin kasalliklar bo\'yicha mutaxassis.', 
      photo: 'https://via.placeholder.com/150', 
      workingHours: 'Dushanba-Payshanba: 10:00 - 17:00', 
      feedback: ['Juda foydali maslahat berdi.', 'Qoniqish hosil qildim.'] 
    },
    // Qo'shimcha shifokorlar ma'lumotlari shu tarzda davom ettiriladi.
  ];
function DoctorsAbout() {
    const { id } = useParams();
    const doctor = doctorsData.find((doc) => doc.id === id);
  
    const [feedback, setFeedback] = useState('');
    const [allFeedback, setAllFeedback] = useState(doctor?.feedback || []);
  
    const handleFeedbackSubmit = (e) => {
      e.preventDefault();
      if (feedback.trim()) {
        setAllFeedback([...allFeedback, feedback]);
        setFeedback('');
      }
    };
  
    if (!doctor) {
      return <h2>Shifokor topilmadi</h2>;
    }
  
  return (
    <div className='container docAbout'>
       <div className="doctor-details">
      <img src={doctor.photo} alt={doctor.name} />
      <h1>{doctor.name}</h1>
      <p><strong>Mutaxassisligi:</strong> {doctor.specialty}</p>
      <p><strong>Tajriba:</strong> {doctor.experience}</p>
      <p><strong>Batafsil:</strong> {doctor.bio}</p>
      <p><strong>Ish vaqti:</strong> {doctor.workingHours}</p>

      {/* Fikrlar bo'limi */}
      <div className="feedback-section">
        <h2>Fikr-mulohazalar</h2>
        {allFeedback.length ? (
          <ul>
            {allFeedback.map((fb, index) => (
              <li key={index}>{fb}</li>
            ))}
          </ul>
        ) : (
          <p>Hozircha fikr-mulohaza yo'q.</p>
        )}

        {/* Fikr qoldirish formasi */}
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <textarea 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Fikringizni yozing..."
            rows="4"
          ></textarea>
          <button type="submit">Fikr qoldirish</button>
        </form>
      </div>

      
    </div>
    </div>
  )
}

export default DoctorsAbout
