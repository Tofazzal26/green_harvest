"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import Image from "next/image";

const ClientBrand: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="md:my-[100px] my-[20px]">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Image
              src="/client1.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100 cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client2.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client3.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client4.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client5.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client6.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client1.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client2.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client3.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client4.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client5.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="/client6.png"
              alt="client"
              width={90}
              height={90}
              className="opacity-50 transition-all hover:opacity-100  cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientBrand;
