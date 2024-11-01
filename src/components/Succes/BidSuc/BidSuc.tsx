import React from "react";
import styles from "./BidSuc.module.scss";
const BidSuc = () => {
  return (
    <section className={styles.bid}>
      <div className={[styles.bid_container, "container"].join(" ")}>
        <div className={styles.message}>
          <p className={styles.message_text}>
            Спасибо! Данные успешно отправлены! Мы свяжемся с вами для
            обсуждения проекта
          </p>
        </div>
      </div>
    </section>
  );
};

export default BidSuc;
