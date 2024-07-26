import { useSwiper } from "swiper/react";

export const SwiperButtonNext = (props) => {
  const swiper = useSwiper();
  return (
    <button
      {...props}
      className="swiper-next"
      onClick={() => swiper.slideNext()}
    ></button>
  );
};

export const SwiperButtonPrevDisbaled = () => {
  return <button className="swiper-prev swiper-prev-disabled"></button>;
};

export const SwiperButtonPrev = (props) => {
  const swiper = useSwiper();
  return (
    <button
      {...props}
      className="swiper-prev"
      onClick={() => swiper.slidePrev()}
    ></button>
  );
};

export const SwiperButtonNextDisabled = () => {
  return <button className="swiper-next swiper-next-disabled"></button>;
};
