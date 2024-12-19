"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Brand from "./BrandStyle/Brand.module.css";

const BrandSlider: React.FC = () => {
  return (
    <div className="md:my-[80px]">
      <div className="text-center">
        <h2 className="text-lg md:text-xl text-gray-600">Grow Naturally</h2>
        <h2 className="text-[30px] md:text-[55px] md:leading-[60px] mx-auto md:mt-2 mb-3 md:mb-[40px] md:w-[450px]">
          Choose What's Perfect For Your Field
        </h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider1.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Production</h2>
                <p>Fresh and Natural</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider2.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Harvest</h2>
                <p>Agriculture Farming</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider3.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Plantation</h2>
                <p>Agriculture Farming</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider4.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Production</h2>
                <p>Eco and Agriculture</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider5.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Plantation</h2>
                <p>Fertilizers & Pesticides</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider6.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Harvest</h2>
                <p>Grocery Foods</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider7.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Plantation</h2>
                <p>Organic Products</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider8.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Production</h2>
                <p>Water Irrigation</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${Brand.imageParent} rounded-[30px]`}>
            <div
              className={` ${Brand.container} ${Brand.ImageAnimation} md:w-[420px] rounded-[30px] md:h-[500px] h-[400px] text-white  bg-cover bg-no-repeat bg-center bg-[url('/slider9.png')]`}
            >
              <div className={`${Brand.overlay} rounded-b-[30px]`}>
                <h2>Harvest</h2>
                <p>Leverage Fluid</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandSlider;
