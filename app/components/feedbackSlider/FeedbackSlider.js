"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./feedbackSlider.module.css";
import { Rating } from "react-simple-star-rating";

import "swiper/css";
import "swiper/css/navigation";

const ObjectLength = 6;
export default function FeedbackSlider() {
  const [isStart, setIsstart] = useState(true);
  const [isLast, setIsLast] = useState(false);
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className={styles.swiper}
        navigation={false}
        onSlideChange={(swiper) => {
          if (swiper.realIndex === 0) {
            setIsstart(true);
          } else {
            setIsstart(false);
          }
          if (swiper.realIndex === ObjectLength) {
            setIsLast(true);
          } else {
            setIsLast(false);
          }
        }}
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
          {!isStart ? <SwiperButtonPrev /> : <SwiperButtonPrevDisbaled />}
          {!isLast ? <SwiperButtonNext /> : <SwiperButtonNextDisabled />}
        </div>
      </Swiper>
    </>
  );
}

const SwiperButtonNext = (props) => {
  const swiper = useSwiper();
  return (
    <button
      {...props}
      className="swiper-next"
      onClick={() => swiper.slideNext()}
    ></button>
  );
};

const SwiperButtonPrevDisbaled = () => {
  return <button className="swiper-prev swiper-prev-disabled"></button>;
};

const SwiperButtonPrev = (props) => {
  const swiper = useSwiper();
  return (
    <button
      {...props}
      className="swiper-prev"
      onClick={() => swiper.slidePrev()}
    ></button>
  );
};

const SwiperButtonNextDisabled = () => {
  return <button className="swiper-next swiper-next-disabled"></button>;
};
