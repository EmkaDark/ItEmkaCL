import React from "react";
import Image from "next/image";
import styles from "./WhyWE.module.scss";
import global from "../styles/SteeringRackRepair.module.scss";
const WhyWe = () => {
  return (
    <section className={styles.why}>
      <div className={global.container}>
        <h2 className={styles.why_header}>Почему выбирают именно нас?</h2>
        <ul className={styles.why_list}>
          <li className={styles.why_item}>
            <div className={styles.why_img}>
              <Image
                src={"/SteeringRackRepair/why1.png"}
                width={100}
                height={100}
                alt="why"
              />
            </div>
            <b className={styles.why_desc_head}>Оборудование</b>
            <p className={styles.why_desc}>
              повышенной точности и уникальные технологии ремонта{" "}
            </p>
          </li>
          <li className={styles.why_item}>
            <div className={styles.why_img}>
              <Image
                src={"/SteeringRackRepair/why2.png"}
                width={100}
                height={95}
                alt="why"
              />
            </div>
            <b className={styles.why_desc_head}>Опыт</b>
            <p className={styles.why_desc}>
              12 лет в сфере ремонта рулевого управления
            </p>
          </li>
          <li className={styles.why_item}>
            <div className={styles.why_img}>
              <Image
                src={"/SteeringRackRepair/why3.png"}
                width={100}
                height={100}
                alt="why"
              />
            </div>
            <b className={styles.why_desc_head}>Бессрочная гарантия</b>
            <p className={styles.why_desc}>
              подтвержденная гарантийным талоном
            </p>
          </li>
          <li className={styles.why_item}>
            <div className={styles.why_img}>
              <Image
                src={"/SteeringRackRepair/why4.png"}
                width={100}
                height={100}
                alt="why"
              />
            </div>
            <b className={styles.why_desc_head}>Оплата картой</b>
            <p className={styles.why_desc}>
              принимаем карты Visa, MasterCard, МИР
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyWe;
