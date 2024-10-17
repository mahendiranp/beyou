"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./feedbackSlider.module.css";
import { Rating } from "react-simple-star-rating";
import {
  SwiperButtonNext,
  SwiperButtonNextDisabled,
  SwiperButtonPrev,
  SwiperButtonPrevDisbaled,
} from "../SwiperButtons/SwiperButtons";

import "swiper/css";
import "swiper/css/navigation";

const ObjectLength = 6;
export default function FeedbackSlider() {
  const [isStart, setIsstart] = useState(true);
  const [isLast, setIsLast] = useState(false);
  return (
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
            <Rating
              size={18}
              initialValue={5}
              readonly={true}
              fillColor="#E8980C"
            />
          </div>
          <p className={styles.feedback}>
            My experience with Pooja has been excellent! She was absolutely
            outstanding in helping me select the perfect dress for my daughter's
            birthday. She helped in getting all d material & kept me updated.
            Stitching is perfect will definitely recommend her to everyone 😊. I
            promise that u will not be disappointed!!
          </p>
          <div className={styles.authorDetails}>
            <p className={styles.name}>Sahithya</p>
            <p className={styles.city}>Bangalore</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.swiperList}>
          <div className={styles.rating}>
            <Rating
              size={18}
              initialValue={4}
              readonly={true}
              fillColor="#E8980C"
            />
          </div>
          <p className={styles.feedback}>
            Pooja made my dream blouses for both my engagement and wedding, and
            the experience was amazing! She customised every detailing to my
            liking and kept me informed throughout the process. The fit and
            stitching was perfect, and I got many compliments on the design and
            craftsmanship. I can't wait to work with Pooja again in the future!
          </p>
          <div className={styles.authorDetails}>
            <p className={styles.name}>Kalpana</p>
            <p className={styles.city}>Bangalore</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.swiperList}>
          <div className={styles.rating}>
            <Rating
              size={18}
              initialValue={5}
              readonly={true}
              fillColor="#E8980C"
            />
          </div>
          <p className={styles.feedback}>
            Pooja's online service was amazing! From fabric to design,
            everything was easy. Perfect fit, no alterations needed – and she
            customized them beautifully! My wedding reception blouse was a
            showstopper. Thanks for the progress pics and fantastic service. I
            would definitely recommend Pooja.
          </p>
          <div className={styles.authorDetails}>
            <p className={styles.name}>Narthana</p>
            <p className={styles.city}>Bangalore</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.swiperList}>
          <div className={styles.rating}>
            <Rating
              size={18}
              initialValue={5}
              readonly={true}
              fillColor="#E8980C"
            />
          </div>
          <p className={styles.feedback}>
            I’m so happy with my outfits now! I used to pick unique designs, but
            they never quite suited me when finished. Since Pooja began
            designing for me, everything changed. She truly understands my body
            type and recommends styles that not only suit me but also make me
            look amazing. Now, I get compliments from everyone!
          </p>
          <div className={styles.authorDetails}>
            <p className={styles.name}>Gopika</p>
            <p className={styles.city}>Bangalore</p>
          </div>
        </div>
      </SwiperSlide>

      <div className="navigationlink">
        {!isStart ? <SwiperButtonPrev /> : <SwiperButtonPrevDisbaled />}
        {!isLast ? <SwiperButtonNext /> : <SwiperButtonNextDisabled />}
      </div>
    </Swiper>
  );
}
