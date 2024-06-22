import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Members = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center mb-20">
        <h1 className=" font-bold lg:text-5xl mb-4 ">CLUB MEMBERS</h1>
        <p>
          It is one of the most popular football clubs that offer <br />
          training programs for the youth, as well as summer camps.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="bg-[#f6f6f6]"
            src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team03.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-[#f6f6f6]"
            src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team07.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-[#f6f6f6]"
            src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/player-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-[#f6f6f6]"
            src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team04.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-[#f6f6f6]"
            src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team08.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Members;
