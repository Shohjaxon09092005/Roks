import React, { useState } from 'react';
import '../styles/yangiliklar.css'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import { NavLink } from 'react-router-dom';
function Yangiliklar() {
  const allNews = [
    {
      id: 1,
      title: 'Yangi klinika ochildi!',
      description: 'Bizning yangi klinikamiz ochilishi munosabati bilan barcha xizmatlar uchun chegirmalar mavjud.',
      image: news1,
      category: 'Sog\'liqni saqlash',
      date: '2024-11-20',
    },
    {
      id: 2,
      title: 'Yilning eng yaxshi shifokori tanlandi!',
      description: 'Dr. Karimov yilning eng yaxshi shifokori unvoniga sazovor bo\'ldi.',
      image: news2,
      category: 'Yangiliklar',
      date: '2024-11-18',
    },
    {
      id: 1,
      title: 'Yangi klinika ochildi!',
      description: 'Bizning yangi klinikamiz ochilishi munosabati bilan barcha xizmatlar uchun chegirmalar mavjud.',
      image: news1,
      category: 'Sog\'liqni saqlash',
      date: '2024-11-20',
    },
    {
      id: 2,
      title: 'Yilning eng yaxshi shifokori tanlandi!',
      description: 'Dr. Karimov yilning eng yaxshi shifokori unvoniga sazovor bo\'ldi.',
      image: news2,
      category: 'Yangiliklar',
      date: '2024-11-18',
    },
    {
      id: 1,
      title: 'Yangi klinika ochildi!',
      description: 'Bizning yangi klinikamiz ochilishi munosabati bilan barcha xizmatlar uchun chegirmalar mavjud.',
      image: news1,
      category: 'Sog\'liqni saqlash',
      date: '2024-11-20',
    },
    {
      id: 2,
      title: 'Yilning eng yaxshi shifokori tanlandi!',
      description: 'Dr. Karimov yilning eng yaxshi shifokori unvoniga sazovor bo\'ldi.',
      image: news2,
      category: 'Yangiliklar',
      date: '2024-11-18',
    },
    // ...yana yangiliklar
  ];

  const [visibleNews, setVisibleNews] = useState(3); // Ko'rinadigan yangiliklar soni

  const handleLoadMore = () => {
    setVisibleNews((prev) => prev + 3); // 3 ta yangilik qo'shib ko'rsatadi
  };
function handleLoadDel(){
  setVisibleNews(3)
}
  return (
    <div className='yangiliklar'>
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Yangiliklar</h2>
          <p className="section-description">Eng so‘nggi yangiliklar va voqealar bilan tanishing.</p>
          <div className="news-grid">
            {allNews.slice(0, visibleNews).map((news) => (
             <NavLink to={`/newsAbout/${news.id}`}>
              <div className="news-card" key={news.id}>
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-content">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-description">{news.description}</p>
                  <div className="news-meta">
                    <span className="news-category">{news.category}</span>
                    <span className="news-date">{news.date}</span>
                  </div>
                </div>
              </div></NavLink> 
            ))}
          </div>
          {visibleNews < allNews.length ? (
            <button className="load-more-btn" onClick={handleLoadMore}>
              Yana ko'rsatish
            </button>
          ):(
            <button className="load-more-btn load-more-btn2 " onClick={handleLoadDel}>
            Yopish
          </button>
          )}</div>

      </section>
    </div>
  )
}

export default Yangiliklar
