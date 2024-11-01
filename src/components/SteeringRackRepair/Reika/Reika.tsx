"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Reika.module.scss";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Reika = () => {
  return (
    <section className={styles.reika}>
      <div className={global.container} style={{ position: "relative" }}>
        <h2 className={styles.reika_header}>Рулевая рейка Омск фото</h2>
        <div className={styles.swiper_container}>
          <Swiper
            className={styles.swiper}
            style={{ height: "500px" }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1.2}
            navigation={{
              prevEl: ".swiperNavPrev",
              nextEl: ".swiperNavNext",
            }}
            pagination={{ clickable: true, el: ".custom_pagination" }}
            autoplay={{
              // Настройки автоплей
              delay: 2000, // Время задержки между слайдами (в миллисекундах)
              disableOnInteraction: false, // Автоплей не останавливается при взаимодействии
            }}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
              1140: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.swiper_big_div}>
                <Image
                  src="/SteeringRackRepair/swiper1.png"
                  alt="swiper"
                  width={100}
                  height={100}
                  className="swiper_img"
                />
              </div>
              <div className={styles.dooble_div}>
                <div>
                  <Image
                    src="/SteeringRackRepair/swiper2.png"
                    alt="swiper"
                    width={100}
                    height={100}
                    className="swiper_div_img"
                  />
                </div>
                <div>
                  <Image
                    src="/SteeringRackRepair/swiper3.png"
                    alt="swiper"
                    width={100}
                    height={100}
                    className="swiper_div_img"
                  />
                </div>
              </div>
              <div className={styles.swiper_big_div}>
                <Image
                  src="/SteeringRackRepair/swiper4.png"
                  alt="swiper"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              {" "}
              <div className={styles.swiper_big_div}>
                <Image
                  src="/SteeringRackRepair/swiper1.png"
                  alt="swiper"
                  width={100}
                  height={100}
                  className="swiper_img"
                />
              </div>
              <div className={styles.dooble_div}>
                <div>
                  <Image
                    src="/SteeringRackRepair/swiper2.png"
                    alt="swiper"
                    width={100}
                    height={100}
                    className="swiper_div_img"
                  />
                </div>
                <div>
                  <Image
                    src="/SteeringRackRepair/swiper3.png"
                    alt="swiper"
                    width={100}
                    height={100}
                    className="swiper_div_img"
                  />
                </div>
              </div>
              <div className={styles.swiper_big_div}>
                <Image
                  src="/SteeringRackRepair/swiper4.png"
                  alt="swiper"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              {" "}
              <div className={styles.swiper_big_div}>
                <Image
                  src="/SteeringRackRepair/swiper1.png"
                  alt="swiper"
                  width={100}
                  height={100}
                  className="swiper_img"
                />
              </div>
              <div className={styles.dooble_div}>
                <div>
                  <Image
                    src="/SteeringRackRepair/swiper2.png"
                    alt="swiper"
                    width={100}
                    height={100}
                    className="swiper_div_img"
                  />
                </div>
                <div>
                  <Image
                    src="/SteeringRackRepair/swiper3.png"
                    alt="swiper"
                    width={100}
                    height={100}
                    className="swiper_div_img"
                  />
                </div>
              </div>
              <div className={styles.swiper_big_div}>
                <Image
                  src="/SteeringRackRepair/swiper4.png"
                  alt="swiper"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_ada}>
              <Image
                src="/SteeringRackRepair/swiper1.png"
                alt="swiper"
                width={100}
                height={100}
                className="swiper_img"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_ada}>
              <Image
                src="/SteeringRackRepair/swiper2.png"
                alt="swiper"
                width={100}
                height={100}
                className="swiper_img"
              />
            </SwiperSlide>{" "}
            <SwiperSlide className={styles.swiper_ada}>
              <Image
                src="/SteeringRackRepair/swiper3.png"
                alt="swiper"
                width={100}
                height={100}
                className="swiper_img"
              />
            </SwiperSlide>{" "}
            <SwiperSlide className={styles.swiper_ada}>
              <Image
                src="/SteeringRackRepair/swiper4.png"
                alt="swiper"
                width={100}
                height={100}
                className="swiper_img"
              />
            </SwiperSlide>
          </Swiper>
          <div
            className={[styles.swiperNavPrev, "swiperNavPrev"].join(" ")}
          ></div>
          <div
            className={[styles.swiperNavNext, "swiperNavNext"].join(" ")}
          ></div>
          <div
            className={[styles.custom_pagination, "custom_pagination"].join(
              " "
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Reika;
