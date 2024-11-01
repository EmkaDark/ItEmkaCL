"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FC } from "react";
import "./_Slider.scss";
import { Autoplay } from "swiper/modules";

interface SliderProp {
  classPropItem?: string;
  numPreview?: number;
  numPreviewSmall?: number;
  numPreviewTwo?: number;
  numPreviewMiddle?: number;
}

const imageStyle = {
  borderRadius: "5% 5% 0 0",
};

export const Slider: FC<SliderProp> = ({
  classPropItem,
  numPreview,
  numPreviewSmall,
  numPreviewTwo,
  numPreviewMiddle,
}) => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={{
        // Настройки автоплей
        delay: 2000, // Время задержки между слайдами (в миллисекундах)
        disableOnInteraction: false, // Автоплей не останавливается при взаимодействии
      }}
      breakpoints={{
        1289: {
          slidesPerView: numPreview,
        },
        991: {
          slidesPerView: numPreviewMiddle,
        },
        549: {
          slidesPerView: numPreviewTwo,
        },
        0: {
          slidesPerView: numPreviewSmall,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={classPropItem}>
          <Image
            className="image-slide"
            style={imageStyle}
            src={"/joze/ягненок.jpg"}
            objectFit={"cover"}
            alt="ягненок"
            width={100}
            height={217}
          />

          <div className="slider__wrapper-content">
            <div className="slider__wrapper-top">
              <div className="slider__wrapper-h-span">
                <h3 className="slider__h3">Ягненок</h3>

                <span className="slider__span-h3">Вес: 225 г</span>
              </div>

              <p className="slider__text">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </p>
            </div>

            <div className="slider_wrapper-price">
              <span className="slider__price">620 ₽</span>

              <button className="slider__basket">В корзину</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={classPropItem}>
          <Image
            className="image-slide"
            style={imageStyle}
            src={"/joze/индейка.jpg"}
            objectFit={"cover"}
            width={100}
            height={217}
            alt="Логотип"
          />

          <div className="slider__wrapper-content">
            <div className="slider__wrapper-top">
              <div className="slider__wrapper-h-span">
                <h3 className="slider__h3">Индейка</h3>

                <span className="slider__span-h3">Вес: 225 г</span>
              </div>

              <p className="slider__text">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </p>
            </div>

            <div className="slider_wrapper-price">
              <button className="slider__button slider__button-minus"></button>

              <span className="slider__price">450 ₽</span>

              <button className="slider__button slider__button-plus"></button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={classPropItem}>
          <Image
            className="image-slide"
            style={imageStyle}
            src={"/joze/рыба.jpg"}
            objectFit={"cover"}
            alt="Логотип"
            width={100}
            height={217}
          />

          <div className="slider__wrapper-content">
            <div className="slider__wrapper-top">
              <div className="slider__wrapper-h-span">
                <h3 className="slider__h3">Рыба</h3>

                <span className="slider__span-h3">Вес: 225 г</span>
              </div>

              <p className="slider__text">Фаршированная яблоками</p>
            </div>

            <div className="slider_wrapper-price">
              <span className="slider__price">7 900 ₽</span>

              <button className="slider__basket">В корзину</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={classPropItem}>
          <Image
            className="image-slide"
            style={imageStyle}
            src={"/joze/роллы.jpg"}
            objectFit={"cover"}
            alt="Логотип"
            width={100}
            height={217}
          />

          <div className="slider__wrapper-content">
            <div className="slider__wrapper-top">
              <div className="slider__wrapper-h-span">
                <h3 className="slider__h3">Закуски</h3>

                <span className="slider__span-h3">Вес: 225 г</span>
              </div>

              <p className="slider__text">
                Фаршированная рисом, курагой и айвой
              </p>
            </div>

            <div className="slider_wrapper-price">
              <span className="slider__price">3 230 ₽</span>

              <button className="slider__basket">В корзину</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={classPropItem}>
          <Image
            className="image-slide"
            style={imageStyle}
            src={"/joze/ягненок.jpg"}
            objectFit={"cover"}
            alt="Логотип"
            width={100}
            height={217}
          />
          <div className="slider__wrapper-content">
            <div className="slider__wrapper-top">
              <div className="slider__wrapper-h-span">
                <h3 className="slider__h3">Ягненок</h3>

                <span className="slider__span-h3">Вес: 225 г</span>
              </div>

              <p className="slider__text">
                Фаршированный гречневой кашей, курагой, апельсином и зеленым
                яблоком
              </p>
            </div>

            <div className="slider_wrapper-price">
              <span className="slider__price">620 ₽</span>

              <button className="slider__basket">В корзину</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={classPropItem}>
          <Image
            className="image-slide"
            style={imageStyle}
            src={"/joze/рыба.jpg"}
            objectFit={"cover"}
            alt="Логотип"
            width={100}
            height={217}
          />

          <div className="slider__wrapper-content">
            <div className="slider__wrapper-top">
              <div className="slider__wrapper-h-span">
                <h3 className="slider__h3">Рыба</h3>

                <span className="slider__span-h3">Вес: 225 г</span>
              </div>

              <p className="slider__text">Фаршированная яблоками</p>
            </div>

            <div className="slider_wrapper-price">
              <span className="slider__price">7 900 ₽</span>

              <button className="slider__basket">В корзину</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
