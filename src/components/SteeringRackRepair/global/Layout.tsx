import React, { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/SteeringRackRepair.module.scss";
interface IProps {
  children: JSX.Element;
}
const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
