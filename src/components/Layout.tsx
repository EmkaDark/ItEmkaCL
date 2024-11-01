import React, { FC } from "react";

interface Iprops {
  children: React.ReactNode;
}
const Layout: FC<Iprops> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
