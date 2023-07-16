import React, { FC } from "react";
import { BurgerButtonComponent } from "./styles";
import { BurgerButtonProps } from "../../types/burgerButton";

const BurgerButton: FC<BurgerButtonProps> = ({ className, onClick }) => {
  return (
    <BurgerButtonComponent className={className} onClick={onClick}>
      <span />
      <span />
      <span />
    </BurgerButtonComponent>
  );
};

export default BurgerButton;
