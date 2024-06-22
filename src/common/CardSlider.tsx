import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/CardSlider.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export const CardSlider = () => {
  const TEAMMEMBERS = [
    {
      name: "Ozan",
      title: "Graphic Designer",
      img: "/images/person-3.png",
    },
    {
      name: "Justin D‘Adamo",
      title: "CEO & Founder",
      img: "/images/person-1.png",
    },
    {
      name: "Thomas Ken",
      title: "Lead Developer",
      img: "/images/person-2.png",
    },
    {
      name: "Thomas Ken",
      title: "Lead Developer",
      img: "/images/person-3.png",
    },
    {
      name: "David Valdi",
      title: "Community Manger",
      img: "/images/person-4.png",
    },
    {
      name: "Ozan",
      title: "Graphic Designer",
      img: "/images/person-3.png",
    },
    {
      name: "Justin D‘Adamo",
      title: "CEO & Founder",
      img: "/images/person-1.png",
    },
    {
      name: "Thomas Ken",
      title: "Lead Developer",
      img: "/images/person-2.png",
    },
    {
      name: "Thomas Ken",
      title: "Lead Developer",
      img: "/images/person-3.png",
    },
    {
      name: "David Valdi",
      title: "Community Manger",
      img: "/images/person-4.png",
    },
  ];

  return (
    <div className="container px-0 lg:px-8 relative pt-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        wrapperClass="py-[10rem] relative"
      >
        {TEAMMEMBERS.map((item, index) => (
          <SwiperSlide
            key={index}
            className={` w-[200px] lg:w-[341.43px]  relative bg-[#060609] h-[300.49px]`}
          >
            <div className="w-full overflow-x-hidden h-full border-[2px] border-[#00FF06]">
              <img
                src={item.img}
                alt=""
                className={
                  "object-fill w-full h-full absolute bottom-0 lg:-top-[160px] left-0"
                }
              />
              <div className="w-[273px] z-[999] bg-[#060609] absolute -bottom-10 flex items-center flex-col justify-center border border-[#00FF06] left-1/2 -translate-x-1/2 h-[79px]">
                <p className="text-[#D9D9D9] font-[700] text-[16px] text-center">
                  {item.name}
                </p>
                <h1 className="text-[#D9D9D9] text-center font-[600] text-[20px] leading-[24px]  ">
                  {item.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <img src="/images/swiper.png" className="absolute bottom-20 z-[-1]" />
      </Swiper>
    </div>
  );
};
