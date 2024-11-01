import React, { FC } from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Header.module.scss";
import Burger from "../Burger";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div
        className={[global.container, global.flex, styles.container].join(" ")}
      >
        <div className={[styles.header_top, global.flex].join(" ")}>
          <div className={[styles.logo_group, global.flex].join(" ")}>
            <a href="/steeringrackrepair" className={styles.logo}>
              <Image
                className={styles.logo_img}
                src="/SteeringRackRepair/logo.png"
                alt="Ремонт рулевых реек"
                width={152}
                height={54}
              />
            </a>
            <p className={styles.header_logo_desc}>
              Рулевые рейки, продажа, ремонт, замена, восстановление
            </p>
          </div>
          <div className={[styles.header_info, global.flex].join(" ")}>
            <div className={[styles.address, global.flex].join(" ")}>
              <div className={[styles.card_svg, global.flex].join(" ")}>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C3.47948 0 0.208496 3.27094 0.208496 7.29146C0.208496 8.99508 0.795816 10.564 1.77856 11.8066L7.5 19L13.2214 11.8066C14.2042 10.564 14.7915 8.99508 14.7915 7.29146C14.7915 3.27094 11.5205 0 7.5 0ZM7.5 10.4763C5.69025 10.4763 4.2179 9.00397 4.2179 7.19422C4.2179 5.38447 5.69025 3.91213 7.5 3.91213C9.30974 3.91213 10.7821 5.38447 10.7821 7.19422C10.7821 9.00397 9.30979 10.4763 7.5 10.4763Z"
                    fill="#2BB261"
                  />
                </svg>
              </div>
              <address className={styles.addres_desc}>
                г.&nbsp;Омск ул.&nbsp;Красный&nbsp;путь,&nbsp;163б
              </address>
            </div>
            <div className={[styles.phone_group, global.flex].join(" ")}>
              <div className={[styles.phone_svg, global.flex].join(" ")}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_62_1128)">
                    <path
                      d="M15.5877 11.8057L13.5991 9.81676C13.0686 9.2862 12.1416 9.2853 11.6102 9.81676L11.2786 10.1484L15.2562 14.1258L15.5877 13.7943C16.1383 13.2437 16.1364 12.3535 15.5877 11.8057Z"
                      fill="#2BB261"
                    />
                    <path
                      d="M10.5973 10.7928C10.1789 11.117 9.58197 11.104 9.19963 10.7208L5.26786 6.78634C4.88464 6.40313 4.87173 5.80575 5.19589 5.38835L1.22743 1.4201C-0.479787 3.4101 -0.413037 6.40863 1.47118 8.29284L7.69313 14.5175C9.50126 16.3256 12.463 16.5654 14.566 14.7612L10.5973 10.7928Z"
                      fill="#2BB261"
                    />
                    <path
                      d="M6.17188 2.38721L4.18335 0.398246C3.65279 -0.132316 2.72582 -0.133222 2.19439 0.398246L1.86279 0.729839L5.84041 4.70724L6.17188 4.37574C6.72244 3.82518 6.72063 2.93505 6.17188 2.38721Z"
                      fill="#2BB261"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_1128">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.phones}>
                <a href="tel:+73812380330" className={styles.phone}>
                  +7&nbsp;(3812)&nbsp;380&nbsp;-&nbsp;330
                </a>
                <button className={[styles.button, global.btn].join(" ")}>
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
          <Burger style={global.btn}></Burger>
        </div>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
