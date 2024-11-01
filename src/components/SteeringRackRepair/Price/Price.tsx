import React from "react";
import Image from "next/image";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Price.module.scss";
import { logoArr, TLogo } from "./imgData";
const Price = () => {
  return (
    <section className={styles.price}>
      <div className={global.container}>
        <h2 className={styles.price_header}>
          Узнайте цену ремонта рулевой рейки
        </h2>
        <ul className={styles.price_list}>
          {logoArr &&
            logoArr.map((item: TLogo) => (
              <li key={item.id} className={styles.price_item}>
                <Image
                  src={item.path}
                  alt="картинка"
                  width={100}
                  height={100}
                  className={styles.price_img}
                ></Image>
              </li>
            ))}
        </ul>
        <ul className={[styles.price_list, styles.media_list].join(" ")}>
          {logoArr &&
            logoArr.map((item: TLogo) => (
              <li key={item.id} className={styles.price_item}>
                <Image
                  src={item.path}
                  alt="картинка"
                  width={100}
                  height={100}
                  className={styles.price_img}
                ></Image>
              </li>
            ))}
        </ul>
        <ul className={[styles.price_list, styles.media_list].join(" ")}>
          {logoArr &&
            logoArr.map((item: TLogo) => (
              <li key={item.id} className={styles.price_item}>
                <Image
                  src={item.path}
                  alt="картинка"
                  width={100}
                  height={100}
                  className={styles.price_img}
                ></Image>
              </li>
            ))}
        </ul>
        <ul className={[styles.price_list, styles.media_list].join(" ")}>
          {logoArr &&
            logoArr.map((item: TLogo) => (
              <li key={item.id} className={styles.price_item}>
                <Image
                  src={item.path}
                  alt="картинка"
                  width={100}
                  height={100}
                  className={styles.price_img}
                ></Image>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Price;
