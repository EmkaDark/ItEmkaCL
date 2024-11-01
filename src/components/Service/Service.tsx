import React from "react";
import styles from "./Service.module.scss";
import Link from "next/link";
const Service = () => {
  return (
    <section className={styles.service} id="service">
      <div className="container">
        <h2 className={styles.service_header}>Услуги и цены</h2>
        <p className={styles.service_desc}>
          Мы предлагаем полный спектр услуг в области веб-разработки,
          ориентированных на достижение успеха вашего бизнеса в цифровом
          пространстве:
        </p>
        <ul className={styles.service_list}>
          <li className={styles.service_item}>
            <h3 className={styles.service_head}>Создание сайтов</h3>
            <p className={styles.service_sub_desc}>
              от визиток до корпоративных порталов и интернет-магазинов.
            </p>
          </li>
          <li className={styles.service_item}>
            <h3 className={styles.service_head}>Дизайн и UX/UI</h3>
            <p className={styles.service_sub_desc}>
              креативные и удобные решения для вашего сайта.
            </p>
          </li>
          <li className={styles.service_item}>
            <h3 className={styles.service_head}>Разработка на заказ</h3>
            <p className={styles.service_sub_desc}>
              сложные и масштабные веб-проекты по индивидуальному запросу.
            </p>
          </li>
          <li className={styles.service_item}>
            <h3 className={styles.service_head}>Поддержка и сопровождение</h3>
            <p className={styles.service_sub_desc}>
              регулярные обновления, техническая поддержка и улучшения.
            </p>
          </li>
        </ul>
        <Link href="/price" className={styles.service_link}>
          <span>Узнать подробнее</span>
        </Link>
      </div>
    </section>
  );
};

export default Service;
