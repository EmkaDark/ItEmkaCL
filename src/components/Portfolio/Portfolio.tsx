import React from "react";
import styles from "./Portfolio.module.scss";
import { data } from "./PortfolioLinks";
import Link from "next/link";
const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <h2 className={styles.portfolio_header}>Портфолио</h2>
        <p className={styles.portfolio_desc}>
          Мы гордимся тем, что уже помогли десяткам компаний реализовать их идеи
          в интернете.
          <br />В нашем портфолио — разнообразные проекты: от небольших
          сайтов-визиток до сложных корпоративных решений и интернет-магазинов.
        </p>

        <ul className={styles.portfolio_list}>
          {data &&
            data.map((item) => (
              <li key={item.id} className={styles.portfolio_item}>
                <Link href={item.link} className={styles.portfolio_link}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
