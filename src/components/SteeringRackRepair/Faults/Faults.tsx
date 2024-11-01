import React from "react";
import Image from "next/image";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Faults.module.scss";
const Faults = () => {
  return (
    <section className={styles.faults}>
      <div className={global.container}>
        <h2 className={styles.faults_header}>
          Неисправности рулевой рейки. Как узнать, нужен ли ремонт?
        </h2>
        <p className={styles.faults_desc}>Важный подзаголовок в 1 строку</p>
        <ul className={styles.faults_list}>
          <li className={styles.list_item}>
            <p className={styles.list_desc}>Стук рулевой рейки</p>
            <span className={styles.list_number}>#01</span>
          </li>
          <li className={styles.list_item}>
            <p className={styles.list_desc}>Течь жидкости ГУР</p>
            <span className={styles.list_number}>#02</span>
          </li>
          <li className={styles.list_item}>
            <p className={styles.list_desc}>Избыточный люфт руля</p>
            <span className={styles.list_number}>#03</span>
          </li>
          <li className={styles.list_item}>
            <p className={styles.list_desc}>Тяжело крутится руль</p>
            <span className={styles.list_number}>#04</span>
          </li>
          <li className={[styles.list_item, styles.list_large].join(" ")}>
            <p className={styles.list_desc}>
              Вибрация и удары, передающиеся в руль
            </p>
            <span className={styles.list_number}>#05</span>
          </li>
          <li className={[styles.list_item, styles.list_large].join(" ")}>
            <p className={styles.list_desc}>Плохая управляемость автомобиля</p>
            <span className={styles.list_number}>#06</span>
          </li>
        </ul>
        <div className={styles.form_container}>
          <h3 className={styles.form_header}>
            Нужна ли вам помощь специалиста?{" "}
          </h3>
          <p className={styles.form_desc}>
            Важный подзаголовок, желательно, чтобы он был размером и высотой в 2
            строки.
          </p>
          <form action="" className={styles.form}>
            <textarea
              name={styles.desc}
              placeholder="Опишите вашу проблему"
            ></textarea>
            <div className={styles.form_inputs}>
              <input
                type="text"
                name="имя"
                placeholder="Как к вам можно обращатся?"
              />
              <input
                type="text"
                name="телефон"
                placeholder="Ваш контактный телефон"
              />
            </div>
            <button className={styles.form_button}>Отправить заявку</button>
          </form>
          <div className={styles.form_acces}>
            <p className={styles.number_acces}>
              Ваш номер телефона будет использоваться для связи с вами
            </p>
            <p className={styles.user_agree}>
              При нажатии на кнопку «Отправить» Вы соглашаетесь на обработку
              персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faults;
