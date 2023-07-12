import React from "react";
import WrapperComponent from "./styles";

const Wrapper = (props: any) => {
  return <WrapperComponent>{props.children}</WrapperComponent>;
};

export default Wrapper;
