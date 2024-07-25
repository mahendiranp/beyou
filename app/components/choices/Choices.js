"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import styles from "./choices.module.css";

import "swiper/css/grid";
import "swiper/css/pagination";

const choices = [
  {
    title: "Saree blouse",
    label: "Starting from",
    price: "999",
    colorcode: "#F5E6E8",
  },
  {
    title: "Saree",
    label: "Starting from",
    price: "999",
    colorcode: "#F7EFE1",
  },
  {
    title: "Underskirt",
    label: "Starting from",
    price: "999",
    colorcode: "#E5F2D7",
  },
  {
    title: "Kurta",
    label: "Starting from",
    price: "999",
    colorcode: "#E2EAF2",
  },
  {
    title: "Bottom wear",
    label: "Starting from",
    price: "999",
    colorcode: "#E3EDEC",
  },
  {
    title: "Lehenga  Skirt",
    label: "Starting from",
    price: "999",
    colorcode: "#E6E1F2",
  },
  {
    title: "Skirts",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
  {
    title: "Topwear",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
  {
    title: "Jumpsuit",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
  {
    title: "Co-ord Sets",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
  {
    title: "Pants & Shorts",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
  {
    title: "Dresses",
    label: "Starting from",
    price: "999",
    colorcode: "#F4F0D9",
  },
];

export default function Choices() {
  const [isStart, setIsstart] = useState(true);
  return (
    <div className={`${styles.choices} w-100`}>
      <div className="container">
        <div className={`heading ${styles.heading}`}>
          Our <span>tailoring choices</span>
        </div>
        <Swiper
          updateOnWindowResize={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          onReachEnd={() => {
            console.log("end");
          }}
          onReachBeginning={() => {
            console.log("start");
            setIsstart(true);
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
            console.log(swiper.slides);
          }}
          onSlideChange={() => setIsstart(false)}
          modules={[Grid]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: {
                rows: 3,
                fill: "row",
              },
            },
            760: {
              slidesPerView: 2,
              grid: {
                rows: 3,
                fill: "row",
              },
            },
            960: {
              slidesPerView: 4,
              grid: {
                rows: 3,
                fill: "row",
              },
            },
          }}
          className="mySwiper"
        >
          {choices.map((value, index) => (
            <SwiperSlide>
              <List value={value} />
            </SwiperSlide>
          ))}
          <div className="navigationlink">
            <SwiperButtonPrev disable={isStart}></SwiperButtonPrev>
            <SwiperButtonNext></SwiperButtonNext>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

const List = ({ value }) => {
  return (
    <div className={styles.list} style={{ backgroundColor: value.colorcode }}>
      <h5 className={styles.listTitle}>{value.title}</h5>
      <div className={styles.listLabel}>
        {value.label} <span>Rs: {value.price} %</span>
      </div>
    </div>
  );
};

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className="swiper-next" onClick={() => swiper.slideNext()}></button>
  );
};

const SwiperButtonPrev = (props) => {
  console.log(props);
  const swiper = useSwiper();
  return (
    <button className="swiper-prev" onClick={() => swiper.slidePrev()}></button>
  );
};
