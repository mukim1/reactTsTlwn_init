import React, { Fragment } from "react";
import Topbar from "../Appbars/Topbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Topbar />
      <div className="max-w-screen-lg mx-auto mt-20 dark:text-white">
        <div className="bg-white dark:bg-gray-800">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
