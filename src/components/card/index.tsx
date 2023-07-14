import React from "react";
import CardItem from "./style";

const Card = () => {
  return (
    <CardItem>
      <p className="content">
        Working with Digital Spaniel has been a breath of fresh air. Their
        approach and attitude kept me informed and included from the start.
        Super pleased with the end results too!
      </p>
      <img src="/assets/testimonial_face02.jpg" alt="a woman with hat" />
      <p className="title">Paul Simon</p>
      <p className="role">Founder, MegaCorp</p>
    </CardItem>
  );
};

export default Card;
