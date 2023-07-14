import React, { FC } from "react";
import { ItemProps } from "../../types/layout";

const Item: FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Item;
