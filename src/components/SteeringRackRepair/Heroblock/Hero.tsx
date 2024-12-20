import React from "react";
import styles from "./Hero.module.scss";
import global from "../styles/SteeringRackRepair.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={[global.container, styles.container].join(" ")}>
        <h1 className={styles.hero_header}>
          Профессиональный&nbsp;ремонт рулевых&nbsp;реек в&nbsp;Омске
        </h1>
        <p className={styles.hero_desc}>
          Мы делаем то, что не могут сделать другие! Ну&nbsp;и&nbsp;добавить еще
          текста, чтобы этот текст был в 3 строки. Это будет хорошо
        </p>
        <div className={styles.hero_group}>
          <button className={styles.hero_btn}>
            <span></span>
            оценить&nbsp;ремонт
          </button>
          <span className={styles.hero_link_desc}>
            посмотреть<br></br>видео
          </span>
          <a href="/">
            <span></span>
          </a>
        </div>
        <div className={styles.hero_action}>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_50_1136)">
              <path
                d="M18.9665 30.1756C27.2992 30.1756 34.0543 23.4206 34.0543 15.0878C34.0543 6.75504 27.2992 0 18.9665 0C10.6337 0 3.87866 6.75504 3.87866 15.0878C3.87866 23.4206 10.6337 30.1756 18.9665 30.1756Z"
                fill="#23953D"
              />
              <path
                d="M6.74359 23.9153L1.55225 32.9141L7.6113 32.5924L10.3641 38.0007L15.1664 29.6751C11.7255 28.7849 8.77075 26.7129 6.74359 23.9153Z"
                fill="#2AB160"
              />
              <path
                d="M31.2192 23.8702C29.207 26.6753 26.2523 28.7549 22.8188 29.66L27.6362 38.0005L30.3889 32.5923L36.448 32.9139L31.2192 23.8702Z"
                fill="#2AB160"
              />
              <path
                d="M18.9663 26.024C25.0062 26.024 29.9025 21.1277 29.9025 15.0878C29.9025 9.04789 25.0062 4.15158 18.9663 4.15158C12.9263 4.15158 8.03003 9.04789 8.03003 15.0878C8.03003 21.1277 12.9263 26.024 18.9663 26.024Z"
                fill="#23953D"
              />
              <path
                d="M24.8657 14.0339C25.1291 13.7644 24.9828 13.2927 24.6198 13.2375L21.2421 12.723C21.0957 12.6985 20.9728 12.6066 20.9084 12.4657L19.3981 9.26188C19.2342 8.91271 18.76 8.91271 18.5961 9.26188L17.0916 12.4657C17.0272 12.6004 16.8984 12.6985 16.7579 12.723L13.3802 13.2375C13.0172 13.2927 12.8709 13.7644 13.1343 14.0339L15.5754 16.5271C15.6808 16.6374 15.7276 16.7905 15.7042 16.9375L15.1305 20.4537C15.0661 20.8335 15.4525 21.1276 15.7803 20.9438L18.801 19.2837C18.9298 19.2102 19.0878 19.2102 19.2166 19.2837L22.2373 20.9438C22.5651 21.1215 22.9456 20.8335 22.8871 20.4537L22.3075 16.9375C22.2841 16.7844 22.3309 16.6312 22.4363 16.5271L24.8657 14.0339Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_50_1136">
                <rect width="38" height="38" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className={styles.hero_action_desc}>
            Даем неограниченную гарантию
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
