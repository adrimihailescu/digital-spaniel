import React, { FC } from "react";
import { WrapperComponent } from "./styles";
import { WrapperProps } from "../../types/layout";

const Wrapper: FC<WrapperProps> = ({ children, bg }) => {
  return <WrapperComponent bg={bg}>{children}</WrapperComponent>;
};

export default Wrapper;
