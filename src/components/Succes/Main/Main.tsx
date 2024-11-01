import React, { FC } from "react";
interface IProps {
  children: React.ReactNode;
}
const Main: FC<IProps> = ({ children }) => {
  return <main style={{ flexGrow: 1 }}>{children}</main>;
};

export default Main;
