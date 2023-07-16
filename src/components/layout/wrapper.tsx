import React, { FC } from "react";
import { WrapperComponent } from "./styles";
import { WrapperProps } from "../../types/layout";
import classNames from "classnames";

const Wrapper: FC<WrapperProps> = ({ children, bg, heroVariant, id }) => {
  return (
    <WrapperComponent
      id={id}
      bg={bg}
      className={classNames({ heroVariant: heroVariant })}
    >
      {children}
    </WrapperComponent>
  );
};

export default Wrapper;
