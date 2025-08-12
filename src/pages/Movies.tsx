import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import chiefOfWar from "../assets/images/show_1.jpg";
import familyPlan from "../assets/images/show_2.jpg";
import ghosted from "../assets/images/show_3.jpg";
import luck from "../assets/images/show_4.jpg"
import flowerMoon from "../assets/images/show_5.jpg"
import greyhound from "../assets/images/show_6.jpg"
function Movies() {
  const Series = [
    { title: "Chief of War", image: chiefOfWar },
    { title: "The Family Plan", image: familyPlan },
    { title: "Ghosted", image: ghosted },
    { title: "Luck", image: luck },
    { title: "Flower Moon", image: flowerMoon },
    { title: "Greyhound", image: greyhound }
  ];

  return (
<div>
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    slidesPerView={1} 
    centeredSlides={true}
    spaceBetween={10}
    initialSlide={0}
    loop={true}
    breakpoints={{
      390: {
        spaceBetween: 0,
      },
      820: {
        slidesPerView: 2, 
        spaceBetween: 10,
      },
     1080: {
        slidesPerView: 3, 
        spaceBetween: 10,
      },
    }}
  >
    {Series.map((shows, index) => (
      <SwiperSlide key={index}>
        <div className="relative mx-auto pb-8">
          <img
            src={shows.image}
            alt={shows.title}
            className="w-full  transition-opacity duration-300 lg:px-0 pb-1.5" 
          />
          <button className="absolute inset-x-0 bottom-11 mx-auto border border-white bg-white text-black cursor-pointer font-medium px-4 py-2 rounded-3xl w-fit text-xs opacity-90 hover:opacity-100">
            Stream Now
          </button>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <style>
    {`
      .swiper-slide {
        opacity: 0.4;
        transition: opacity 0.3s;
      }
      .swiper-slide-active {
        opacity: 1 !important;
      }
    `}
  </style>
</div>
  );
}

export default Movies;
