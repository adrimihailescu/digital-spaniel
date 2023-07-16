import styled from "styled-components";
import stylesVariables from "../../constants/styles";

export const BurgerButtonComponent = styled.button`
  width: 45px;
  height: 45px;
  position: relative;
  padding: 0;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: ${stylesVariables.color.red};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 18px;
    }

    &:nth-child(3) {
      top: 36px;
    }
  }

  &.open {
    span {
      &:nth-child(1) {
        top: 18px;
        transform: rotate(135deg);
      }

      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }

      &:nth-child(3) {
        top: 18px;
        transform: rotate(-135deg);
      }
    }
  }
`;
