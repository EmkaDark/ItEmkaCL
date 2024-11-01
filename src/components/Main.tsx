import Link from "next/link";
import React, { FC } from "react";
interface iProps {
  children: React.ReactNode;
}
const Main: FC<iProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
