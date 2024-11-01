import React from "react";
import YandexMap from "./YandexMap";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Map.module.scss";
const Map = () => {
  return (
    <section className={styles.map}>
      <div className={global.container}>
        <div className={styles.bid}>
          <b className={styles.bid_header}>Запись на ремонт или диагностику</b>
          <form action="" className={styles.bid_form}>
            <input type="text" placeholder="Марка автомобиля" />
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Контактный телефон" />
            <button type="submit">Отправить заявку</button>
          </form>
          <p className={styles.bid_desc}>
            При нажатии на кнопку «Отправить» Вы соглашаетесь на обработку
            персональных данных согласно пользовательского соглашения
          </p>
        </div>
      </div>
      <YandexMap classname={styles.yandex_map} />
    </section>
  );
};

export default Map;
