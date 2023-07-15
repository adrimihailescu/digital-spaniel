import React from "react";
import { Footer, NavBar } from "../../sections";

const Layout = ({ children, footer, navBar }: any) => {
  return (
    <>
      <NavBar {...navBar} />
      <main>{children}</main>
      <Footer left={footer.left} right={footer.right} />
    </>
  );
};

export default Layout;
