import React from "react";
import Heading2Style from "./style";

const Heading2 = ({ first, second }: any) => {
  return (
    <Heading2Style>
      {first}
      <br />
      <span>{second}</span>
    </Heading2Style>
  );
};

export default Heading2;
