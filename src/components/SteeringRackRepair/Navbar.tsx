import React from "react";
import global from "./styles/SteeringRackRepair.module.scss";
import styles from "./Navbar.module.scss";
import Burger from "./Burger";
const Navbar = () => {
  return (
    <div className={styles.header_bottom}>
      <Burger style={[global.btn].join(" ")}></Burger>
      <nav className={styles.nav}>
        <ul className={[styles.nav_list, global.flex].join(" ")}>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="">
              О нас
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="">
              Диагностика
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="">
              Услуги
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="">
              Ремонт рулевых реек
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="">
              Рулевые рейки
            </a>
          </li>
          <li className={styles.nav_item}>
            <ul className={styles.nav_item_list}>
              <li className={styles.nav_item_in}>
                <a className={styles.nav_link} href="">
                  Ремкомплекты
                </a>
              </li>
              <li className={styles.nav_item_in}>
                <a className={styles.nav_link} href="">
                  Полезное
                </a>
              </li>
              <li className={styles.nav_item_in}>
                <a className={styles.nav_link} href="">
                  Контакты
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
