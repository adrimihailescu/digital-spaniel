import React, { FC, useState, useEffect } from "react";
import { Heading } from "../../../components";
import { TestimonialsProps } from "../../../types/testimonials";
import Card from "../../../components/card";
import { CardProps } from "../../../types/card";

const Testimonials: FC<TestimonialsProps> = ({ title, url }) => {
  const [cardData, setCardData] = useState([]);

  const getData = async () => {
    const response = await fetch("/assets/testimonials.json");
    const { data } = await response.json();
    setCardData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <Heading {...title} />
      <ul>
        {cardData &&
          cardData.map((card, index) => (
            <li key={index}>
              <Card {...(card as CardProps)} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Testimonials;
