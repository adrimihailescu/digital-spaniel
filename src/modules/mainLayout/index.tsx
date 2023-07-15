import React from "react";
import { Footer, NavBar } from "../../sections";

const Layout = ({ children, footer, navBar }: any) => {
  return (
    <>
      <NavBar {...navBar} />
      <main>{children}</main>
      <Footer {...footer} />
    </>
  );
};

export default Layout;
