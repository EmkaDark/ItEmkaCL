import { getData } from "@/redux/dataslice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import "./styles/layout.scss";
import React, { FC, useEffect } from "react";
type IProps = {
  children: React.ReactNode;
};
const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [getData]);
  return <div className="layout_qr">{children}</div>;
};

export default Layout;
