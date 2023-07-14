import React, { FC } from "react";
import CardItem from "./style";
import { CardProps } from "../../types/card";
import Image from "../image";

const Card: FC<CardProps> = ({ content, image, name, role }) => {
  return (
    <CardItem>
      <blockquote>
        <span className="quotes"></span>
        <span className="content">{content}</span>
      </blockquote>
      <Image {...image} />
      <p className="title">{name}</p>
      <p className="role">{role}</p>
    </CardItem>
  );
};

export default Card;
