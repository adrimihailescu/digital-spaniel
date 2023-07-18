import React, { useState, useEffect, useRef, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, A11y } from "swiper";
import { Heading, Link, Image } from "../../../components";
import { ProjectsSectionComponent, ProjectsCategoryTabs } from "./styles";

import type { Swiper as SwiperType } from "swiper";
import {
  ProjectCategories,
  ProjectProps,
  ProjectsProps,
} from "../../../types/projects";

import "swiper/css";
import "swiper/css/grid";

const Projects: FC<ProjectsProps> = ({ title, cta, categories, items }) => {
  const [activeCategoryItems, setActiveCategoryItems] =
    useState<ProjectProps[]>(items);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [animationSpeed, setAnimationSpeed] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const [swiperDisabledControls, setSwiperDisabledControls] = useState({
    left: true,
    right: false,
  });

  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  const categoryClickHandler = (
    category: ProjectCategories,
    index: number
  ): void => {
    setAnimationSpeed(Math.abs(activeTabIndex - index));
    setActiveTabIndex(index);
    if (category !== ProjectCategories.all) {
      const filteredItems = items.filter((item) => item.category === category);
      setActiveCategoryItems(filteredItems);
    } else {
      setActiveCategoryItems(items);
    }
  };

  const slidePrevHandler = () => {
    console.log(swiperRef);
    swiperRef.current?.slidePrev();
    if (swiperRef.current?.isBeginning) {
      setSwiperDisabledControls({
        left: true,
        right: false,
      });
    }
  };

  const slideNextHandler = () => {
    console.log(swiperRef);
    swiperRef.current?.slideNext();
    if (swiperRef.current?.isEnd) {
      setSwiperDisabledControls({
        left: false,
        right: true,
      });
    }
  };

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <ProjectsSectionComponent id="work">
      <Heading {...title} />
      <ProjectsCategoryTabs
        tabUnderlineLeft={tabUnderlineLeft}
        tabUnderlineWidth={tabUnderlineWidth}
        animationSpeed={animationSpeed}
      >
        {categories.map((category, index) => (
          <li key={index}>
            <button
              ref={(el) => (tabsRef.current[index] = el as HTMLButtonElement)}
              onClick={() =>
                categoryClickHandler(
                  category.value as ProjectCategories,
                  index as number
                )
              }
            >
              {category.label}
            </button>
          </li>
        ))}
      </ProjectsCategoryTabs>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        direction={"horizontal"}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={30}
        modules={[Grid, A11y]}
        navigation={true}
      >
        {Object.keys(activeCategoryItems).map((index) => {
          return (
            <SwiperSlide key={index}>
              {<Image {...activeCategoryItems[index as any].image} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="bottom-bar">
        <Link {...cta} />
        <div className="swiper-controls">
          <button
            className="slide-left"
            onClick={slidePrevHandler}
            disabled={swiperDisabledControls.left}
          >
            &#60;
          </button>
          <button
            className="slide-right"
            onClick={slideNextHandler}
            disabled={swiperDisabledControls.right}
          >
            &#62;
          </button>
        </div>
      </div>
    </ProjectsSectionComponent>
  );
};

export default Projects;
