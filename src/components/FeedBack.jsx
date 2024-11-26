import React from 'react'
import '../styles/feedBack.css'
import { FaStar } from "react-icons/fa"; // Reyting yulduzlari uchun
import Slider from "react-slick"; // Slayder kutubxonasi
function FeedBack() {
  const feedbacks = [
    {
      id: 1,
      name: "Olimov Shavkat",
      comment: "Xizmatdan juda mamnunman! Shifokorlar juda mehribon va professional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Karimova Dilnoza",
      comment: "Yaxshi xizmatlar taklif etiladi, lekin qabul uchun kutish biroz uzoq.",
      rating: 4,
    },
    {
      id: 3,
      name: "Rustamov Jamshid",
      comment: "Shifokorlar o'z ishlarini mukammal bilishadi. Juda tavsiya qilaman!",
      rating: 5,
    },
    {
      id: 4,
      name: "Shukurova Laylo",
      comment: "Tez va sifatli xizmat ko‘rsatishadi. Rahmat!",
      rating: 5,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100, 
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

  return (
    <section className="feedback-section">
    <h2 className="section-title">Mijozlar Fikr-Mulohazalari</h2>
    <Slider {...settings}>
      {feedbacks.map((feedback) => (
        <div className="feedback-card" key={feedback.id}>
          <div className="feedback-content">
            <h3 className="customer-name">{feedback.name}</h3>
            <p className="customer-comment">"{feedback.comment}"</p>
            <div className="customer-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < feedback.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </section>
  )
}

export default FeedBack
