"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

import {
  SwiperButtonNext,
  SwiperButtonNextDisabled,
  SwiperButtonPrev,
  SwiperButtonPrevDisbaled,
} from "../SwiperButtons/SwiperButtons";

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
    title: "Saree finishing",
    label: "Starting from",
    price: "150",
    colorcode: "#F7EFE1",
  },
  {
    title: "Underskirt",
    label: "Starting from",
    price: "799",
    colorcode: "#E5F2D7",
  },
  {
    title: "Kurta and top wear",
    label: "Starting from",
    price: "899",
    colorcode: "#E2EAF2",
  },
  {
    title: "Bottom wear",
    label: "Starting from",
    price: "899",
    colorcode: "#E3EDEC",
  },
  {
    title: "Lehenga",
    label: "Starting from",
    price: "1499",
    colorcode: "#E6E1F2",
  },
  {
    title: "Skirts",
    label: "Starting from",
    price: "1199",
    colorcode: "#F4F0D9",
  },
  {
    title: "Jumpsuits",
    label: "Starting from",
    price: "1499",
    colorcode: "#F3E1E1",
  },
  {
    title: "Pants",
    label: "Starting from",
    price: "1299",
    colorcode: "#E9F3E3",
  },
  {
    title: "Western dresses",
    label: "Starting from",
    price: "999",
    colorcode: "#F2E6F3",
  },
  {
    title: "Shorts",
    label: "Starting from",
    price: "999",
    colorcode: "#F3E8E2",
  },
  {
    title: "Jackets",
    label: "Starting from",
    price: "1999",
    colorcode: "#F3F0E2",
  },
];

export default function Choices(props) {
  const [isStart, setIsstart] = useState(true);
  const [isLast, setIsLast] = useState(false);
  return (
    <section className={`${styles.choices} w-100 zIndex1`} {...props}>
      <div className="container">
        <div className={`heading ${styles.heading}`}>
          Our <span>tailoring choices</span>
        </div>
        <Swiper
          updateOnWindowResize={true}
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex === 0) {
              setIsstart(true);
            } else {
              setIsstart(false);
            }
            if (swiper.activeIndex === 3) {
              setIsLast(true);
            } else {
              setIsLast(false);
            }
          }}
          modules={[Grid]}
          breakpoints={{
            0: {
              slidesPerView: 1.4,
              grid: {
                rows: 3,
                fill: "row",
              },
            },
            760: {
              slidesPerView: 1.4,
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
            <SwiperSlide key={index}>
              <List value={value} />
            </SwiperSlide>
          ))}
          <div className={styles.hideSlideNavigation}>
            <div className="navigationlink">
              {!isStart ? <SwiperButtonPrev /> : <SwiperButtonPrevDisbaled />}
              {!isLast ? <SwiperButtonNext /> : <SwiperButtonNextDisabled />}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

const List = ({ value }) => {
  return (
    <div className={styles.list} style={{ backgroundColor: value.colorcode }}>
      <h5 className={styles.listTitle}>{value.title}</h5>
      <div className={styles.listLabel}>
        {value.label} <span>Rs: {value.price}/-</span>
      </div>
    </div>
  );
};
