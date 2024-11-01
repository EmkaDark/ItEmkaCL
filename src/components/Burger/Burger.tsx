"use client";
import React, { useState } from "react";
import styles from "./Burger.module.scss";
import Link from "next/link";
const Burger = () => {
  const [open, setOpen] = useState(false);
  const toogleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <button
        aria-label="Меню"
        className={styles.burger}
        onClick={toogleOpen}
        tabIndex={open ? -1 : 0}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={[styles.burger_container, open ? styles.active : ""].join(
          " "
        )}
      >
        <button
          aria-label="Закрыть меню"
          tabIndex={open ? 0 : -1}
          onClick={toogleOpen}
          className={styles.burger_container_close}
        >
          <span></span>
          <span></span>
        </button>
        <nav className={styles.burger_container_nav}>
          <ul className={styles.burger_container_list}>
            <li className={styles.burger_container_item}>
              <Link
                href={"/#about"}
                className={styles.burger_container_link}
                tabIndex={open ? 0 : -1}
                onClick={toogleOpen}
              >
                О нас
              </Link>
            </li>
            <li className={styles.burger_container_item}>
              <Link
                href={"/#service"}
                className={styles.burger_container_link}
                tabIndex={open ? 0 : -1}
                onClick={toogleOpen}
              >
                Услуги и цены
              </Link>
            </li>
            <li className={styles.burger_container_item}>
              <Link
                href={"/#portfolio"}
                className={styles.burger_container_link}
                tabIndex={open ? 0 : -1}
                onClick={toogleOpen}
              >
                Портфолио
              </Link>
            </li>
            <li className={styles.burger_container_item}>
              <Link
                href={"/#contacts"}
                className={styles.burger_container_link}
                tabIndex={open ? 0 : -1}
                onClick={toogleOpen}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Burger;
