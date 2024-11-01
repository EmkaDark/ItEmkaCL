import React from "react";
import global from "@/components/SteeringRackRepair/styles/SteeringRackRepair.module.scss";
import styles from "./Repair.module.scss";
const Remont = () => {
  return (
    <section className={styles.repair}>
      <div className={global.container}>
        <h2 className={styles.repair_header}>Мы уже отремонтировали</h2>

        <div className={styles.repair_group}>
          <div>
            <span>
              <span>2</span>
            </span>
            <span>
              <span>8</span>
            </span>
            <span>
              <span>5</span>
            </span>
            <span>
              <span>3</span>
            </span>
            <span>
              <span>4</span>
            </span>
          </div>
          <p className={styles.repair_group_desc}>рулевые рейки</p>
        </div>
        <div className={styles.repair_sub}>
          <div className={styles.repair_sub_left}>
            <a href="/" className={styles.play_btn}>
              <span></span>
            </a>
            <a href="/" className={styles.link}>
              посмотреть видео
            </a>
          </div>
          <div className={styles.repair_sub_right}>
            <h3 className={styles.repair_sub_right_header}>
              Почему&nbsp;выбирают наш&nbsp;сервис?
            </h3>
            <p className={styles.repair_sub_right_desc}>
              Важный подзаголовок, желательно, чтобы он был размером и высотой в
              2 строки. А лучше сделать в 3 строки. Так лучше!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Remont;
