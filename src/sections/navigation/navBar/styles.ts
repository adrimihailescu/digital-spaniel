import styled from "styled-components";
import stylesVariables from "../../../constants/styles";

interface HeaderComponentStyles {
  className: string;
}

const easing = {
  easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInExpo: "cubic-bezier(0.7, 0, 0.84, 0)",
};

export const HeaderComponent = styled.header<HeaderComponentStyles>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: ${stylesVariables.color.white};
  padding: 16px 40px 14px 50px;
  z-index: 99;
  top: 0;
  left: 0;
  transition: height 100ms ${easing.easeOutExpo},
    transform 250ms ${easing.easeOutExpo},
    background-color 250ms ${easing.easeOutExpo},
    color 250ms ${easing.easeOutExpo}, transform 250ms ${easing.easeOutExpo};

  ul {
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    margin: 0;
    padding: 60px 0 0 0;
    gap: 60px;
    width: 100%;
    height: 0;
    transition: height 450ms ${easing.easeOutExpo};

    li {
      list-style: none;
    }

    li:not(.burger-button) {
      width: 100%;
      text-align: center;
      opacity: 0;
      visibility: hidden;

      > a {
        display: block;
      }
    }

    .burger-button {
      button {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    @media only screen and (min-width: 800px) {
      padding: 0;
      display: flex;
      flex-direction: row;
      position: static;
      justify-content: space-evenly;
      gap: 24%;
      height: auto;
      width: auto;

      li:not(.burger-button) {
        opacity: 1;
        visibility: visible;
      }

      .burger-button {
        display: none;
      }
    }
  }

  &.mobileMenuOpen {
    height: 100%;

    ul {
      height: 100%;

      li {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media only screen and (min-width: 800px) {
    height: auto;
  }

  &.scrollingUp:not(.mobileMenuOpen) {
    background-color: ${stylesVariables.color.white};
    box-shadow: 0px 16px 17px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(0);

    &.defaultPosition {
      box-shadow: none;
    }
  }

  &.scrollingDown:not(.mobileMenuOpen) {
    background-color: ${stylesVariables.color.white};
    transform: translateY(-100%);
    transition: transform 250ms ${easing.easeInExpo},
      box-shadow 250ms ${easing.easeInExpo};
  }

  @media only screen and (min-width: 1350px) {
    padding: 32px 14.5% 20px 10%;
    background-color: transparent;
    box-shadow: none;

    a {
      transition: color 250ms ${easing.easeInExpo};
    }

    &.scrollingUp:not(.mobileMenuOpen) {
      background-color: ${stylesVariables.color.white};
      box-shadow: 0px 16px 17px 0px rgba(0, 0, 0, 0.1);
      transform: translateY(0);

      a {
        color: ${stylesVariables.color.grey140};
        transition: color 250ms ${easing.easeInExpo};
      }

      &.defaultPosition {
        background-color: transparent;
        box-shadow: none;

        a {
          color: ${stylesVariables.color.white};

          &:before {
            background: ${stylesVariables.color.white};
          }
        }
      }
    }

    &.scrollingDown:not(.mobileMenuOpen) {
      transform: translateY(-100%);
      background-color: transparent;
      transition: transform 250ms ${easing.easeInExpo},
        background-color 250ms ${easing.easeInExpo},
        color 250ms ${easing.easeInExpo}, box-shadow 250ms ${easing.easeInExpo};

      a {
        color: ${stylesVariables.color.grey140};
        transition: color 250ms ${easing.easeInExpo};
      }
    }
  }

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;

    a {
      img {
        height: 50px;
      }
    }

    @media only screen and (min-width: 800px) {
      position: static;
    }
    @media only screen and (min-width: 1350px) {
      a {
        img {
          height: 80px;
        }
      }
    }
  }
`;
