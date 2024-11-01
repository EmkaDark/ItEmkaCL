import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={[styles.footer_container, "container"].join(" ")}>
        <Link href="/" className={styles.footer_logo}>
          <Image
            src={"/ITEmka.png"}
            alt="IT Emka"
            width={281}
            height={61}
          ></Image>
        </Link>
        <div className={styles.footer_right}>
          <nav>
            <ul className={styles.footer_right_list}>
              <li className={styles.footer_right_item}>
                <Link href="#about" className={styles.footer_right_link}>
                  О нас
                </Link>
              </li>
              <li className={styles.footer_right_item}>
                <Link href="#service" className={styles.footer_right_link}>
                  Услуги и цены
                </Link>
              </li>
              <li className={styles.footer_right_item}>
                <Link href="#portfolio" className={styles.footer_right_link}>
                  Портфолио
                </Link>
              </li>
              <li className={styles.footer_right_item}>
                <Link href="#contacts" className={styles.footer_right_link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <ul className={styles.footer_social_list}>
            <li className={styles.footer_social_item}>
              <a href="" className={styles.footer_social_link}>
                <svg
                  width="40"
                  height="30"
                  viewBox="0 0 40 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "translateX(-5px)" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.0858 23.7093L17.5108 27.9855L15.9347 28.181L12.4075 17.057L0 13.3268L38.1981 0L40 0.0368952L33.9817 30L23.0858 23.7093ZM32.6393 5.6303L15.1366 15.2343L17.1521 23.1042L17.7043 22.9898L19.8085 16.9168L33.7962 5.75574L32.6393 5.6303Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.footer_social_item}>
              <a href="" className={styles.footer_social_link}>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.3202 5.5101C30.578 3.75598 28.5043 2.36554 26.2198 1.41961C23.935 0.473672 21.4849 -0.00883135 19.0119 0.000122365C15.706 0.00335235 12.4587 0.874594 9.59556 2.52659C6.73244 4.17859 4.35391 6.55336 2.69812 9.41307C1.04233 12.2728 0.167447 15.5171 0.161031 18.821C0.154638 22.1251 1.01697 25.3727 2.66166 28.2388L0 38L9.98124 35.3875C12.7374 36.9199 15.8343 37.7366 18.9881 37.7625C24.0018 37.7627 28.8125 35.7837 32.373 32.2563C35.9336 28.7292 37.956 23.9391 38 18.9288C37.9834 16.4287 37.4729 13.9564 36.4983 11.6538C35.5237 9.35108 34.1038 7.26332 32.3202 5.5101ZM19.0119 34.5088C16.2022 34.5107 13.4438 33.7559 11.0269 32.3238L10.4565 31.9675L4.53909 33.535L6.10757 27.7638L5.72733 27.17C3.70553 23.9085 2.95098 20.0189 3.6066 16.2384C4.26223 12.458 6.2825 9.04922 9.28469 6.65777C12.2869 4.26629 16.0624 3.0583 19.8962 3.26262C23.7299 3.46692 27.3557 5.06935 30.0863 7.76634C33.0712 10.6833 34.7799 14.6622 34.8393 18.8338C34.8017 23.0041 33.1175 26.9907 30.1533 29.9265C27.1894 32.8619 23.185 34.509 19.0119 34.5088ZM27.591 22.7763C27.1157 22.5388 24.8105 21.3988 24.3827 21.2563C23.955 21.1138 23.6223 21.0188 23.3133 21.4938C22.8485 22.1306 22.3485 22.7409 21.8161 23.3226C21.5547 23.6551 21.2695 23.6788 20.7942 23.3226C18.0843 22.2524 15.8267 20.2811 14.4015 17.7413C13.9024 16.9101 14.8768 16.9576 15.7799 15.1763C15.8466 15.0479 15.8813 14.9054 15.8813 14.7607C15.8813 14.6161 15.8466 14.4736 15.7799 14.3451C15.7799 14.1076 14.7104 11.7801 14.3302 10.8538C13.95 9.92758 13.5697 10.0701 13.2608 10.0463H12.334C12.0938 10.05 11.8572 10.1049 11.64 10.2073C11.4228 10.3097 11.23 10.4572 11.0744 10.6401C10.5412 11.1583 10.1253 11.7846 9.85471 12.477C9.58415 13.1694 9.46523 13.9116 9.50594 14.6538C9.65495 16.4306 10.3245 18.1239 11.4309 19.5226C13.4561 22.5526 16.2316 25.0071 19.4872 26.6475C21.1947 27.6436 23.1791 28.0602 25.1432 27.835C25.7972 27.7054 26.4168 27.4396 26.9612 27.0549C27.5059 26.6703 27.9634 26.1754 28.3039 25.6025C28.6195 24.9034 28.7189 24.126 28.5891 23.3701C28.3752 23.1326 28.0663 23.0138 27.591 22.7763Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <a href="/" className={styles.policy}>
            Политика конфеденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
