import React, { FC } from "react";
import styles from "./Burger.module.scss";
interface IButtonProps {
  style: string;
}
const Burger: FC<IButtonProps> = ({ style }) => {
  return (
    <button className={[styles.burger_btn, style].join(" ")}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
