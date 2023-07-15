import React, { FC } from "react";
import { WrapperItemComponent } from "./styles";
import { ItemProps } from "../../types/layout";

const Item: FC<ItemProps> = ({ children }) => {
  return <WrapperItemComponent>{children}</WrapperItemComponent>;
};

export default Item;
