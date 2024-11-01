import React from "react";
import { priceData } from "./priceData";
import styles from "./Price.module.scss";
const Price = () => {
  return (
    <section className={styles.price}>
      <div className={[styles.price_container, "container"].join(" ")}>
        <h1 className={styles.price_header}>Цены</h1>
        <ul className={styles.price_list}>
          {priceData.map((data) => (
            <li className={styles.price_item} key={data.id}>
              <div className={styles.text_group}>
                <strong className={styles.title}>{data.title}</strong>
                <p className={styles.sub_title}>{data.subTitle}</p>
              </div>

              <span className={styles.price_num}>от {data.price}&#8381;*</span>
            </li>
          ))}
        </ul>
        <div className={styles.additional}>
          <p className={styles.additional_text}>
            *Стоимость проекта рассчитывается индивидуально и зависит от объема
            работ
          </p>
        </div>
      </div>
    </section>
  );
};

export default Price;
