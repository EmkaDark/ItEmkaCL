import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Burger from "../Burger/Burger";
import { FaPhone } from "react-icons/fa6";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={[styles.header_container, "container"].join(" ")}>
        <div className={styles.header_content}>
          <Link href={"/"} className={styles.header_logo}>
            <Image
              src={"/ITEmka.png"}
              width={180}
              height={44}
              alt="Логотип"
            ></Image>
            <Image
              src={"/ITEmkaMedia.png"}
              width={130}
              height={44}
              alt="Логотип"
              className={styles.header_media}
            ></Image>
          </Link>

          <nav className={styles.header_nav}>
            <ul className={styles.header_list}>
              <li className={styles.header_item}>
                <Link href={"/#about"} className={styles.header_link}>
                  О нас
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link href={"/#service"} className={styles.header_link}>
                  Услуги и цены
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link href={"/#portfolio"} className={styles.header_link}>
                  Портфолио
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link href={"/#contacts"} className={styles.header_link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.phone_group}>
          <a href="tel:+79025684947" className={styles.phone}>
            <FaPhone className={styles.phone_img} />
            +7 (902) 568-49-47
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
