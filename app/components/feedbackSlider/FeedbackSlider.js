"use client";

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./feedbackSlider.module.css";
import { Rating } from "react-simple-star-rating";

import "swiper/css";
import "swiper/css/navigation";

export const FeedbackSlider = () => {
  return (
    <>
      {" "}
      <Swiper
        navigation={false}
        slidesPerView={3}
        spaceBetween={30}
        className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          760: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={4} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue="5" disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue="5" disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={3} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={4} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={4} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={5} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={5} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperList}>
            <div className={styles.rating}>
              <Rating size={16} initialValue={3} disabled={true} />
            </div>
            <p className={styles.feedback}>
              My experience with Pooja has been excellent! She was absolutely
              outstanding in helping me select the perfect dress for my
              daughter’s birthday. Stitching is perfect will definitely
              recommend her to everyone 😊.{" "}
            </p>
            <div className={styles.authorDetails}>
              <p className={styles.name}>Name</p>
              <p className={styles.city}>City</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="navigationlink">
          <SwiperButtonPrev></SwiperButtonPrev>
          <SwiperButtonNext></SwiperButtonNext>
        </div>
      </Swiper>
    </>
  );
};

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="swiper-next" onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="swiper-prev" onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};
