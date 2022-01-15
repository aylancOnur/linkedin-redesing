import "./carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
import ext from "../../../assets/ext.png";
import ext2 from "../../../assets/ext2.png";
import ext3 from "../../../assets/ext3.png";

SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel__header">
        <h2>Projects</h2>
        <p>3 of 12</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ext} alt="carousel" />
          <div>
            <h3>Zara redesing concept</h3>
            <p>UX/UI design, 15.07.2019</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={ext2} alt="carousel" />
          <div>
            <h3>SCTHON event brand idendity</h3>
            <p>Graphic design, 03.31.2019</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ext3} alt="carousel" />
          <div>
            <h3>Drozd. Brand İdendity. 2016</h3>
            <p>Graphic design, 03.04.2016</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
      </Swiper>
      <a>SHOW ALL (12)</a>
    </section>
  );
};

export default Carousel;
