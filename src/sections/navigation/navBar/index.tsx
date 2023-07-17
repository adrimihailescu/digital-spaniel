import React, { useState, FC } from "react";
import { NavBarProps } from "../../../types/navigation";
import { BurgerButton, Link } from "../../../components";
import { HeaderComponent } from "./styles";
import classNames from "classnames";
import useScrollDirection from "../../../hooks/useScrollDirection";

const NavBar: FC<NavBarProps> = ({ logo, links }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash);
  const {
    isTop,
    scrollDirection,
  }: { isTop: boolean; scrollDirection: string } = useScrollDirection();

  const navItemClickHandler = (urlParam: string) => {
    setActiveLink(urlParam);
    setMobileMenuOpen(false);
  };
  const mobileNavClickHandler = (): void => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <HeaderComponent
      className={classNames({
        defaultPosition: isTop,
        scrollingUp: scrollDirection === "up",
        scrollingDown: scrollDirection === "down",
        mobileMenuOpen: mobileMenuOpen,
      })}
    >
      <div className="logo">
        <a href={logo.href}>
          <img alt={logo.alt} src={logo.src} />
        </a>
      </div>
      <nav>
        <ul>
          <li className="burger-button">
            <BurgerButton
              onClick={mobileNavClickHandler}
              className={classNames({
                open: mobileMenuOpen,
              })}
            />
          </li>
          {links.map((cta, index) => (
            <li key={index} onClick={() => navItemClickHandler(cta.url)}>
              <Link
                {...cta}
                navLink
                className={classNames({
                  isActive: activeLink === cta.url,
                })}
              />
            </li>
          ))}
        </ul>
      </nav>
    </HeaderComponent>
  );
};

export default NavBar;
