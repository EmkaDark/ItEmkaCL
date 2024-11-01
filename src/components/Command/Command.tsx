import React from "react";
import { commandData } from "./CommandData";
import Image from "next/image";
import styles from "./Command.module.scss";

const Command = () => {
  return (
    <section className={styles.command} id="about">
      <div className="container">
        <h2 className={styles.command_header}>Наша команда</h2>
        <ul className={styles.command_list}>
          {commandData &&
            commandData.map((item) => (
              <li key={item.id} className={styles.command_item}>
                <div>
                  <Image
                    src={item.img}
                    width={283}
                    height={283}
                    alt={item.development}
                    className={styles.command_img}
                  ></Image>
                </div>
                <strong className={styles.command_dev}>
                  {item.development}
                </strong>
                <span className={styles.command_prof}> {item.profession}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Command;
