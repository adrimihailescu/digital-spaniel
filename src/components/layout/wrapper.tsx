import React, { FC } from "react";
import WrapperComponent from "./styles";
import { WrapperProps } from "../../types/layout";

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <WrapperComponent>{children}</WrapperComponent>;
};

export default Wrapper;
