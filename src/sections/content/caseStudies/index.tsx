import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { Description, Heading } from "../../../components";
import { CaseStudiesSectionComponent } from "./styles";
import { Image } from "../../../components";

import { CaseStudiesProps } from "../../../types/caseStudies";

const CaseStudies: FC<CaseStudiesProps> = ({ title, content, items }) => {
  return (
    <CaseStudiesSectionComponent id="blog">
      <div className="title-description">
        <p>Work in Progress section</p>
        <Heading {...title} />
        <Description>{content}</Description>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        centeredSlides
        initialSlide={1}
        slidesPerView={1.5}
      >
        {Object.keys(items).map((_, index) => {
          return (
            <SwiperSlide key={index}>
              {<Image {...items[index]?.image} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CaseStudiesSectionComponent>
  );
};

export default CaseStudies;
