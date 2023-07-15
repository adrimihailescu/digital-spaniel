import React, { FC } from "react";
import { NavBarProps } from "../../../types/navigation";
import { Link } from "../../../components";
import { NavBarComponent } from "./styles";

const NavBar: FC<NavBarProps> = ({ logo, links }) => {
  return (
    <NavBarComponent>
      <a href={logo.href}>
        <img alt={logo.alt} src={logo.src} />
      </a>
      <ul>
        {links.map((cta, index) => (
          <li key={index}>
            <Link {...cta} navLink {...{ active: index === 0 }} />
          </li>
        ))}
      </ul>
    </NavBarComponent>
  );
};

export default NavBar;
