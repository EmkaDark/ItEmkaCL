import Link from "next/link";
import React from "react";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={[styles.hero_container, "container"].join(" ")}>
        <h1 className={styles.hero_head}>
          Ваш партнер в создании современных{" "}
          <span className={styles.hero_head_span}>веб-решений</span>
        </h1>
        <p className={styles.hero_desc}>
          Мы — IT студия, которая занимается веб-разработкой для бизнеса любой
          сложности
        </p>
        <div className={styles.hero_content}>
          <p className={styles.hero_sub_desc}>
            Создаем сайты, которые не только красиво выглядят, но и решают
            конкретные задачи вашего бизнеса.
          </p>
          <p className={styles.hero_sub_desc}>
            Индивидуальный подход, современные технологии и креативные решения —
            это то, что мы предлагаем каждому клиенту.
          </p>
          <Link href={"#contacts"} className={styles.hero_link}>
            Связаться снами
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
