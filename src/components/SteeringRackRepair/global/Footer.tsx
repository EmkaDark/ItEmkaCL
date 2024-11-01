import React from "react";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={[styles.footer_container, global.container].join(" ")}>
        <div className={styles.logo_group}>
          <Link href={"/"} className={styles.footer_link}>
            <Image
              src={"/SteeringRackRepair/logo.png"}
              alt="logo"
              width={200}
              height={100}
            ></Image>
          </Link>
          <p className={styles.footer_desc}>
            Компания «Рулевая рейка Омск» Все права защищены © 2010-2019
          </p>
        </div>
        <div className="footer_list_group">
          <h3 className={styles.footer_header}>Разделы</h3>
          <ul className={styles.footer_list}>
            <li className={styles.footer_item}>
              <a href="/" className={styles.footer_link}>
                О нас
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="/" className={styles.footer_link}>
                Услуги
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="/" className={styles.footer_link}>
                Диагностика рулевых реек
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="/" className={styles.footer_link}>
                Рулевые рейки
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="/" className={styles.footer_link}>
                Ремкомплекты
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="/" className={styles.footer_link}>
                Полезное
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_contscts_group">
          <h3 className={styles.footer_header}>Контакты</h3>
          <u className={styles.footer_contacts_list}>
            <li className="footer_contacts_item">
              <a href="/" className={styles.footer_contacts_link}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_45_79)">
                    <path
                      d="M14.6135 11.0676L12.7493 9.20296C12.2519 8.70556 11.3828 8.70471 10.8846 9.20296L10.5737 9.51383L14.3028 13.2426L14.6135 12.9319C15.1297 12.4157 15.128 11.5812 14.6135 11.0676Z"
                      fill="white"
                    />
                    <path
                      d="M9.93501 10.1184C9.54273 10.4223 8.9831 10.4102 8.62465 10.051L4.93862 6.36239C4.57935 6.00313 4.56725 5.44309 4.87115 5.05177L1.15071 1.33154C-0.4498 3.19716 -0.387222 6.00828 1.37923 7.77473L7.21231 13.6104C8.90743 15.3054 11.684 15.5302 13.6556 13.8388L9.93501 10.1184Z"
                      fill="white"
                    />
                    <path
                      d="M5.78611 2.23802L3.92186 0.37337C3.42446 -0.124032 2.55543 -0.124881 2.05721 0.37337L1.74634 0.684238L5.47535 4.41305L5.78611 4.10227C6.30226 3.58612 6.30056 2.75163 5.78611 2.23802Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_79">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                +7 (3812) 380-330
              </a>
            </li>
            <li className="footer_contacts_item">
              <a href="/" className={styles.footer_contacts_link}>
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 4.6748C6.52845 4.6748 5.73804 5.46522 5.73804 6.43677C5.73804 7.40832 6.52845 8.19874 7.5 8.19874C8.47155 8.19874 9.26197 7.40832 9.26197 6.43677C9.26197 5.46522 8.47159 4.6748 7.5 4.6748Z"
                    fill="white"
                  />
                  <path
                    d="M7.50005 0C3.90274 0 0.976074 2.92663 0.976074 6.52394C0.976074 8.04823 1.50157 9.45197 2.38087 10.5638L7.50005 17L12.6192 10.5638C13.4985 9.45197 14.024 8.04823 14.024 6.52394C14.024 2.92663 11.0974 0 7.50005 0ZM7.50005 9.37354C5.8808 9.37354 4.56344 8.05618 4.56344 6.43693C4.56344 4.81769 5.8808 3.50032 7.50005 3.50032C9.1193 3.50032 10.4367 4.81769 10.4367 6.43693C10.4367 8.05618 9.11933 9.37354 7.50005 9.37354Z"
                    fill="white"
                  />
                </svg>
                г. Омск ул. Красный путь, 163б
              </a>
            </li>
            <li className="footer_contacts_item">
              <a href="/" className={styles.footer_contacts_link}>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_45_96)">
                    <path
                      d="M16.8485 12.302C16.8028 12.2255 16.5202 11.6113 15.1601 10.349C13.7362 9.02713 13.9275 9.24177 15.6425 6.95616C16.687 5.56419 17.1046 4.71412 16.9739 4.35072C16.8496 4.00432 16.0813 4.0957 16.0813 4.0957L13.5269 4.11058C13.5269 4.11058 13.3377 4.08508 13.1964 4.16902C13.0593 4.2519 12.9711 4.44316 12.9711 4.44316C12.9711 4.44316 12.5663 5.52062 12.0265 6.43656C10.8885 8.36939 10.4326 8.4714 10.2467 8.35133C9.81422 8.07187 9.9226 7.22712 9.9226 6.62783C9.9226 4.7545 10.2063 3.9735 9.369 3.77161C9.0906 3.70467 8.88659 3.66004 8.17572 3.65261C7.26403 3.64304 6.49153 3.65579 6.05481 3.86937C5.76367 4.01176 5.53946 4.32947 5.67654 4.34753C5.84549 4.36985 6.22801 4.4506 6.43097 4.72687C6.69342 5.08284 6.68386 5.88402 6.68386 5.88402C6.68386 5.88402 6.83475 8.08887 6.33215 8.36302C5.98681 8.55109 5.51396 8.1675 4.4992 6.41319C3.9796 5.51531 3.58644 4.5218 3.58644 4.5218C3.58644 4.5218 3.511 4.33691 3.37605 4.23809C3.21241 4.11802 2.9829 4.07976 2.9829 4.07976L0.553841 4.09464C0.553841 4.09464 0.189376 4.10526 0.0554913 4.26359C-0.0635175 4.40491 0.0459281 4.69606 0.0459281 4.69606C0.0459281 4.69606 1.94795 9.14508 4.10073 11.3882C6.07607 13.4443 8.31811 13.3093 8.31811 13.3093H9.33393C9.33393 13.3093 9.64102 13.2753 9.79722 13.1064C9.94173 12.9512 9.93642 12.6601 9.93642 12.6601C9.93642 12.6601 9.91623 11.2968 10.5495 11.096C11.1733 10.8983 11.9744 12.4136 12.8234 12.9969C13.4652 13.4379 13.953 13.3412 13.953 13.3412L16.2237 13.3093C16.2237 13.3093 17.4117 13.236 16.8485 12.302Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_96">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Наша группа
              </a>
            </li>
          </u>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
