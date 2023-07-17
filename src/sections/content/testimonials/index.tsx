import React, { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Heading } from "../../../components";
import { Card } from "../../../components";
import { TestimonialsSectionComponent } from "./styles";

import { CardProps } from "../../../types/card";
import { TestimonialsProps } from "../../../types/testimonials";

import "swiper/css";
import "swiper/css/pagination";
import { getCardsData } from "../../../reduxStore/testimonialsSlice";

const breakPointsConfig = {
  640: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
  1600: {
    slidesPerView: 3,
  },
};

const Testimonials: FC<TestimonialsProps> = ({ title, url }) => {
  const dispatch = useAppDispatch();
  const { cardsData } = useAppSelector((state) => state.testimonials);

  useEffect(() => {
    dispatch(getCardsData(url));
  }, []);

  return (
    <TestimonialsSectionComponent id="testimonials">
      <div className="title">
        <Heading {...title} />
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        pagination={{ clickable: true }}
        centeredSlides
        initialSlide={1}
        breakpoints={breakPointsConfig}
      >
        {cardsData &&
          cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card {...(card as CardProps)} />
            </SwiperSlide>
          ))}
      </Swiper>
    </TestimonialsSectionComponent>
  );
};

export default Testimonials;
