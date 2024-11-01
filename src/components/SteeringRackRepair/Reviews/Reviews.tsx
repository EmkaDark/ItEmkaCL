"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Reviews.module.scss";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
const Reviews = () => {
  const ref = useRef(null);
  const nRef = useRef(null);
  const pRef = useRef(null);
  return (
    <section className={styles.reviews}>
      <div className={global.container}>
        <h2 className={styles.reviews_header}>Рулевая рейка Омск отзывы</h2>

        <div className={styles.swiper_container}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1.4}
            navigation={{
              prevEl: pRef.current,
              nextEl: nRef.current,
            }}
            pagination={{
              clickable: true,
              el: ref.current,
            }} // Указываем кастомный контейнер
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
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.card}>
                <Image
                  src={"/SteeringRackRepair/reviews1.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className={styles.card_img}
                ></Image>
                <div className={styles.info_group}>
                  <div className={styles.name_group}>
                    <b className={styles.name}>Сергей Ивин</b>
                    <span className={styles.span}>Suzuki Grand Vitara</span>
                  </div>
                  <p className={styles.desc}>
                    Все понятно объяснили, сделали хорошо и довольно быстро. Я
                    доволен
                  </p>
                  <Link className={styles.link} href={"/"}>
                    Оригинал отзыва
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.card}>
                <Image
                  src={"/SteeringRackRepair/reviews2.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className={styles.card_img}
                ></Image>
                <div className={styles.info_group}>
                  <div className={styles.name_group}>
                    <b className={styles.name}>Иван Бриков</b>
                    <span className={styles.span}>Skoda Octavia</span>
                  </div>
                  <p className={styles.desc}>
                    Делают очень качественно. Провел в сервисе 2 часа и все уже
                    сделали
                  </p>
                  <Link className={styles.link} href={"/"}>
                    Оригинал отзыва
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.card}>
                <Image
                  src={"/SteeringRackRepair/reviews3.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className={styles.card_img}
                ></Image>
                <div className={styles.info_group}>
                  <div className={styles.name_group}>
                    <b className={styles.name}>Екатерина Алексеева</b>
                    <span className={styles.span}>Mazda CX-5</span>
                  </div>
                  <p className={styles.desc}>
                    Все понятно объяснили, сделали хорошо и довольно быстро. Я
                    доволен
                  </p>
                  <Link className={styles.link} href={"/"}>
                    Оригинал отзыва
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.card}>
                <Image
                  src={"/SteeringRackRepair/reviews4.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className={styles.card_img}
                ></Image>
                <div className={styles.info_group}>
                  <div className={styles.name_group}>
                    <b className={styles.name}>Илья Иванов</b>
                    <span className={styles.span}>Suzuki Grand Vitara</span>
                  </div>
                  <p className={styles.desc}>
                    Все понятно объяснили, сделали хорошо и довольно быстро. Я
                    доволен
                  </p>
                  <Link className={styles.link} href={"/"}>
                    Оригинал отзыва
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.card}>
                <Image
                  src={"/SteeringRackRepair/reviews1.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className={styles.card_img}
                ></Image>
                <div className={styles.info_group}>
                  <div className={styles.name_group}>
                    <b className={styles.name}>Сергей Ивин</b>
                    <span className={styles.span}>Suzuki Grand Vitara</span>
                  </div>
                  <p className={styles.desc}>
                    Все понятно объяснили, сделали хорошо и довольно быстро. Я
                    доволен
                  </p>
                  <Link className={styles.link} href={"/"}>
                    Оригинал отзыва
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.card}>
                <Image
                  src={"/SteeringRackRepair/reviews2.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className={styles.card_img}
                ></Image>
                <div className={styles.info_group}>
                  <div className={styles.name_group}>
                    <b className={styles.name}>Илья Иванов</b>
                    <span className={styles.span}>Suzuki Grand Vitara</span>
                  </div>
                  <p className={styles.desc}>
                    Все понятно объяснили, сделали хорошо и довольно быстро. Я
                    доволен
                  </p>
                  <Link className={styles.link} href={"/"}>
                    Оригинал отзыва
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.swiperNavPrev} ref={pRef}></div>
          <div className={styles.swiperNavNext} ref={nRef}></div>
          <div className={styles.customw_pagination} ref={ref}></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
