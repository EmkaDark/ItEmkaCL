import React from "react";
import global from "../styles/SteeringRackRepair.module.scss";
import styles from "./Advantages.module.scss";
const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={global.container}>
        <div className={styles.header_group}>
          <span className={styles.advantages_num}>8</span>
          <div className={styles.header_sub_group}>
            <h2 className={styles.advantages_header}>наших преимуществ</h2>
            <p className={styles.advantages_desc}>
              Важный подзаголовок в 1 строку
            </p>
          </div>
        </div>

        <ul className={styles.advantages_list}>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>01</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>
                Бессрочная гарантия{" "}
              </b>
              <p className={styles.advantages_list_desc}>
                Все необходимые для ремонта расходные материалы, запчасти и
                комплектующие имеются в наличии на складе.
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>02</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>
                Ремонт рулевой колонки
              </b>
              <p className={styles.advantages_list_desc}>
                Также наши специалисты осуществляют ремонт и восстановление
                рулевых колонок. Часто люфт в рулевой колонке путают с люфтом в
                рейке....
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>03</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>
                Современное оборудование
              </b>
              <p className={styles.advantages_list_desc}>
                Использование оборудования повышенной точности позволяет нам
                изготавливать и реставрировать детали рулевой рейки на месте,
                без привлечения сторонних организаций, что обеспечивает высокое
                качество и короткие сроки ремонта.
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>04</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>Огромный опыт</b>
              <p className={styles.advantages_list_desc}>
                За многие годы работы накоплен огромный опыт ремонта рулевых
                реек на автомобилях различных марок и моделей, нам известны
                практически все нюансы и неисправности реек, которые могут быть
                устранены нашими специалистами в короткие сроки.
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>05</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>
                Диагностика бесплатно
              </b>
              <p className={styles.advantages_list_desc}>
                Еще один немаловажный фактор, по которому клиенты выбирают
                именно наш сервис – это бесплатная диагностика рулевого
                управления и подвески...
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>06</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>
                Магазин рулевыйх реек
              </b>
              <p className={styles.advantages_list_desc}>
                Также в нашем магазине вы сможете найти в наличии или заказать
                восстановленные рулевые рейки для автомобилей всех марок. Узнать
                цену ремонта рейки на Вашем автомобиле можно в нашем каталоге.
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>07</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>Ремонт за 1 день</b>
              <p className={styles.advantages_list_desc}>
                Большинство клиентов, обратившихся к нам, забирают свой
                отремонтированный автомобиль в день обращения. Узнать более
                подробную информацию по ремонту рулевой рейки, рулевой колонки
                или насоса ГУР, можно по телефону 380-330.
              </p>
            </div>
          </li>
          <li className={styles.advantages_item}>
            <span className={styles.advantages_number}>08</span>
            <div className={styles.advantages_list_group}>
              <b className={styles.advantages_list_header}>Скидка</b>
              <p className={styles.advantages_list_desc}>
                И напоследок, у нас есть для Вас хорошая новость! Любой клиент
                может получить скидку на ремонт рулевой рейки, для этого Вам
                нужно просто оставить заявку на сайте.
              </p>
            </div>
          </li>
        </ul>
        <div className={styles.bid}>
          <p className={styles.bid_desc}>
            Профессионалный ремонт рулевых&nbsp;реек в Омске{" "}
          </p>
          <b className={styles.bid_price}>Цена от 2500 ₽</b>
          <button className={styles.bid_button}>Отправить заявку</button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
