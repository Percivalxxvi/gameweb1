import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import clock from "../src/assets/clock.png";
import openfile from "../src/assets/openfile.png";
// import img1 from "../src/assets/news1.jpg";
// import img2 from "../src/assets/news2.jpg";
// import img3 from "../src/assets/news3.jpg";
// import img4 from "../src/assets/news4.jpg";

// Reusable News card (Tailwind)
const Nnews2 = ({ image, txt, date, plat }) => {
  return (
    <div className="relative flex lg:hidden flex-col items-center justify-end w-[350px] h-[500px] overflow-hidden bg-purple-600 transition-all duration-500 rounded-lg mx-auto">
      {/* Background image */}
      <img
        src={image}
        alt="news"
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(3,1,12,0.9)] to-[rgba(154,154,155,0.05)] text-white px-4 py-3 flex flex-col gap-3 transition-all duration-500">
        <h1 className="text-[20px] text-left font-semibold">{txt}</h1>

        {/* Info section */}
        <div className="flex items-center justify-start gap-4 text-xs">
          {/* Date */}
          <div className="flex items-center gap-1">
            <img src={clock} alt="clock" className="w-3 h-3 object-contain" />
            <p>{date}</p>
          </div>

          {/* Platform */}
          <div className="flex items-center gap-1">
            <img
              src={openfile}
              alt="folder"
              className="w-3 h-3 object-contain"
            />
            <p>{plat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slider wrapper
const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const newsData = [
    {
      image:
        "https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p6-pfgmvuhbo2a7mau0c9jp4epi2i5a5hti108tv7sgu8.jpg",
      txt: "New Monster Hunter World Quest Adds Helmet",
      date: "20 Sept 2025",
      plat: "Xbox",
    },
    {
      image:
        "https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p8-pfgmvm0ryjympt6apnw1zyucq1az87vwzudgjq50e8.jpg",
      txt: "See Valve's New Card Game Artifact In Action",
      date: "20 Sept 2025",
      plat: "Wii",
    },
    {
      image:
        "https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p16-pfgmv61iqdcr8ftiayzebkvimhhqld4h9na7e0spc0.jpg",
      txt: "Game Release Dates Far Cry 6 and Red Dead 2",
      date: "20 Sept 2025",
      plat: "PS5",
    },
    {
      image:
        "https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p2-pfgmuvpan6yloq8izcii25hg38wp8ozfk83v3z818g.jpg",
      txt: "Get A Free PC Game Right NowHumble StoreGet A Free PC Game Right NowHumble Store",
      date: "20 Sept 2025",
      plat: "PC",
    },
  ];

  return (
    <div className="w-[90%] max-w-[1200px] lg:hidden">
      <h2 className="text-3xl font-bold text-center  text-purple-700">
        Latest News
      </h2>

      <Slider {...settings}>
        {newsData.map((item, index) => (
          <div key={index}>
            <Nnews2
              image={item.image}
              txt={item.txt}
              date={item.date}
              plat={item.plat}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
