import React from "react";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Contacting.module.scss";
import Image from "next/image";
import { one, two, three, four } from "./dataarr";
import { carArr } from "./carArr";
const Contacting = () => {
  return (
    <section className={styles.contacting}>
      <div className={global.container}>
        <h2 className={styles.contacting_header}>
          Что вы получите, обратившись к нам?
        </h2>
        <p className={styles.contacting_desc}>
          Важный подзаголовок, желательно, чтобы он был размером и высотой в 2
          строки.
        </p>
        <ul className={styles.contacting_list}>
          <li className={styles.contacting_item}>
            <Image
              src={"/SteeringRackRepair/lupa.png"}
              width={100}
              height={100}
              alt="Лупа"
              className={styles.contacting_img}
            ></Image>
            <b className={styles.contacting_head}>Бесплатная диагностика</b>
            <ul>
              {one &&
                one.map((item, idx) => (
                  <li key={idx}>
                    <p className={styles.contacting_list_desc}>{item}</p>
                  </li>
                ))}
            </ul>
          </li>
          <li className={styles.contacting_item}>
            <Image
              src={"/SteeringRackRepair/kluch.png"}
              width={100}
              height={100}
              alt="Ключ"
              className={styles.contacting_img}
            ></Image>
            <b className={styles.contacting_head}>Бесплатная диагностика</b>
            <ul>
              {two &&
                two.map((item, idx) => (
                  <li key={idx}>
                    <p className={styles.contacting_list_desc}>{item}</p>
                  </li>
                ))}
            </ul>
          </li>
          <li className={styles.contacting_item}>
            <Image
              src={"/SteeringRackRepair/dogovor.png"}
              width={100}
              height={100}
              alt="договор"
              className={styles.contacting_img}
            ></Image>
            <b className={styles.contacting_head}>Бесплатная диагностика</b>
            <ul>
              {three &&
                three.map((item, idx) => (
                  <li key={idx}>
                    <p className={styles.contacting_list_desc}>{item}</p>
                  </li>
                ))}
            </ul>
          </li>
          <li className={styles.contacting_item}>
            <Image
              src={"/SteeringRackRepair/vwpolo.png"}
              width={100}
              height={100}
              alt="VWPolo"
              className={styles.contacting_img}
            ></Image>
            <b className={styles.contacting_head}>Бесплатная диагностика</b>
            <ul>
              {four &&
                four.map((item, idx) => (
                  <li key={idx}>
                    <p className={styles.contacting_list_desc}>{item}</p>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
        <div className={styles.source_conent}></div>

        <div className={styles.table}>
          <div className={styles.table_left}>
            <div className={styles.table_range}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3 className={styles.table_header}>
              1. Выберите марку Вашего автомобиля
            </h3>
            <select name="mark" id="mark" className={styles.table_select}>
              <option value="Марка">Марка автомобиля</option>
              <option value="Марка">Марка автомобиля</option>
              <option value="Марка">Марка автомобиля</option>
              <option value="Марка">Марка автомобиля</option>
            </select>

            <ul
              className={[
                styles.table_car_list,
                styles.table_car_list_none,
              ].join(" ")}
            >
              {carArr &&
                carArr.map((car) => (
                  <li key={car.id} className={styles.table_car_list_item}>
                    <Image
                      src={car.path}
                      width={100}
                      height={100}
                      alt={car.name}
                    ></Image>
                    <span className=""></span>
                    <p>{car.name}</p>
                  </li>
                ))}
            </ul>
            <ul className={styles.table_car_list}>
              {carArr &&
                carArr.map((car) => (
                  <li key={car.id} className={styles.table_car_list_item}>
                    <Image
                      src={car.path}
                      width={100}
                      height={100}
                      alt={car.name}
                    ></Image>
                    <span className=""></span>
                    <p>{car.name}</p>
                  </li>
                ))}
            </ul>
            <button className={styles.table_button}>ДАЛЕЕ</button>
          </div>
          <div className={styles.table_right}>
            <div className={styles.table_right_hero}>
              <div className={styles.table_right_title}>
                <p>Руководитель сервиса</p>
                <b>Олег Кинько</b>
              </div>
              <Image
                src={"/SteeringRackRepair/Oleg.png"}
                width={100}
                height={100}
                alt={"Олег"}
              ></Image>
            </div>
            <div className={styles.table_right_desc_group}>
              <p className={styles.table_right_desc}>
                Здравствуйте, меня зовут Олег. Я помогу вам пройти тест, чтобы
                получить скидку.
              </p>
              <p className={styles.table_right_desc}>
                Ответьте на пару вопросов и я помогу сэкономить вам на ремонте
              </p>
            </div>
            <span className={styles.table_right_span}>
              В конце теста вы получите
            </span>
            <b className={styles.table_right_action}>
              Скидку 15% на ремонт рулевой рейки
            </b>
            <div className={styles.table_right_percent}>
              <b>15%</b>
              <span>Скидка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacting;
