import React from "react";
import styles from "./Why.module.scss";

const Why = () => {
  return (
    <section className={styles.why}>
      <div className="container">
        <h1 className={styles.why_header}>Почему выбирают нас?</h1>
        <p className={styles.why_desc}>
          Мы стремимся помогать бизнесам любого размера расти и развиваться в
          онлайн-среде, предоставляя качественные и эффективные веб-решения.
        </p>
        <div className={styles.why_content}>
          <p className={styles.why_text}>
            Наша команда состоит из профессионалов с многолетним опытом в сфере
            веб-разработки
          </p>
        </div>
        <div className={styles.why_content}>
          <p className={styles.why_text}>
            Мы следим за последними тенденциями, внедряем передовые технологии и
            делаем все возможное, чтобы каждый проект был успешным
          </p>
        </div>
        <div className={styles.why_content}>
          <p className={styles.why_text}>
            Мы создаем не просто сайты — мы строим цифровую экосистему для
            вашего бизнеса, которая работает на вас
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
