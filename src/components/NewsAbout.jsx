import '../styles/newsAbout.css'
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import rasm from '../images/news1.jpg'
const newsData = [
  {
    id: '1',
    title: 'Yangi Klinikalar Ochilishi',
    date: '2024-11-20',
    content: "Shaharimizda 'Salomatlik Haftaligi' bo‘lib o‘tdi. Haftalik davomida sog‘lom turmush tarzini targ‘ib qilish va aholining salomatligini yaxshilashga qaratilgan turli tadbirlar tashkil etildi. Bu tadbirlar qatoriga sog‘lom ovqatlanishni targ‘ib qilish, jismoniy mashqlar marafoni, shifokorlar tomonidan bepul maslahatlar, va aholi orasida turli seminarlar o‘tkazish kiritilgan.Bundan tashqari, ushbu haftalik doirasida tibbiyot sohasidagi yetakchi mutaxassislar ishtirokida sog‘liqni saqlash masalalari bo‘yicha konferensiyalar tashkil etilib, eng so‘nggi diagnostika va davolash texnologiyalari taqdim etildi.Tadbirning asosiy maqsadi aholini sog‘lom turmush tarziga undash va sog‘liqni saqlashning ahamiyatini tushuntirish edi. Ushbu haftalik shaharliklar tomonidan ijobiy qabul qilindi va ko‘pchilik faol ishtirok etdi.",
    image: rasm,
    details: 'Ushbu klinikalar zamonaviy uskunalar va yetuk mutaxassislar bilan ta’minlangan.',
    feedback: ['Yaxshi yangilik!', 'Shifoxona sifati haqida ko‘proq ma’lumot bersangiz.'],
  },
  {
    id: '2',
    title: 'Salomatlik Haftaligi',
    date: '2024-11-18',
    content: 'Shaharimizda “Salomatlik Haftaligi” bo‘lib o‘tdi.',
    image: rasm,
    details: 'Haftalik davomida sog‘lom turmush tarzini targ‘ib qilish bo‘yicha turli tadbirlar o‘tkazildi.',
    feedback: ['Bu haqda ko‘proq o‘qishni xohlar edim.', 'Yaxshi tashabbus!'],
  },
];
function NewsAbout() {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id);



 

  if (!news) {
    return <h2>Yangilik topilmadi</h2>;
  }
  return (
    <div className='NewsAbout'>
     <div className="news-details">
      <img className="news-image" src={news.image} alt={news.title} />
      <div className="news-content">
        <h1>{news.title}</h1>
        <p className="news-date">{news.date}</p>
        <p>{news.content}</p>
      </div>
      <form className="comment-form">
        <h3>Fikr-mulohazalar qoldiring</h3>
        <textarea placeholder="Fikringizni yozing..." rows="4"></textarea>
        <button type="submit">Jo‘natish</button>
      </form>
      <Link to="/yangiliklar" className="back-button">Ortga</Link>
    </div>
    </div>
  )
}

export default NewsAbout
