import React, { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const Main: FC<IProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
