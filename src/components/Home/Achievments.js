import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const achievements = [
  {
    title: "🏆 Shining Team Award at Timespro",
   "description": [
  "Outstanding contributions as a Frontend Developer.",
  "Strong teamwork and technical expertise.",
  "Delivered projects 10% faster.",
  "Boosted client satisfaction by 20%."
]

  },
  {
    title: "⏳ Project Timelines Reduced by 30%",
    description: ["Achieved through agile execution."],
  },
  {
    title: "🚀 Successful Product Launch",
    description: ["Delivered a high-impact requirements on time."],
  },
];

const Achievements = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through items
    speed: 800,
    slidesToShow: 1, // Show one achievement at a time
    slidesToScroll: 1,
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Slide every 3s
  };

  return (
    <div className="carousel-container">
    <div className= "carousel-container-header">🏆 Achievements & Milestones</div>
      <Slider {...settings}>
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h2 className="achievement-card-header">{achievement.title}</h2>
            <ul>
              {achievement.description.map((point, i) => (
                <li key={i} className="achievement-card-points">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Achievements;
