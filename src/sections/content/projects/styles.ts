import styled from "styled-components";
import stylesVariables from "../../../constants/styles";
import { ProjectsCategoryTabsProps } from "../../../types/projects";

export const ProjectsSectionComponent = styled.section`
  padding: 45px 20px 35px 35px;

  .swiper {
    margin-bottom: 63px;
  }

  .bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .swiper-controls {
      display: flex;
      column-gap: 32px;
    }
    button {
      font-size: 35px;
      border: 0;
      outline: 0;
      width: 64px;
      height: 64px;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &.slide-right,
      &.slide-left {
        background-color: ${stylesVariables.color.grey140};
        color: ${stylesVariables.color.white};

        &:hover:not(:disabled) {
          color: ${stylesVariables.color.red};
          background-color: ${stylesVariables.color.white};
          border: 1px solid ${stylesVariables.color.red};
        }

        &:disabled {
          background-color: ${stylesVariables.color.grey80};
          color: ${stylesVariables.color.grey120};
          cursor: not-allowed;
        }
      }
    }
  }

  @media only screen and (min-width: 1350px) {
    padding: 111px 11% 64px 15.75%;
  }
`;

export const ProjectsCategoryTabs = styled.ul<ProjectsCategoryTabsProps>`
  margin: 55px 0 65px;
  padding: 0;
  list-style: none;
  display: inline-flex;
  flex-shrink: 1;
  font-size: 30px;
  position: relative;
  align-items: center;

  &:after,
  &:before {
    position: absolute;
    content: "";
    bottom: 0;
  }
  &:before {
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${stylesVariables.color.grey90};
  }
  &:after {
    transition: all calc(${({ animationSpeed }) => animationSpeed} * 300ms)
      ease-in-out;
    left: ${({ tabUnderlineLeft }) => tabUnderlineLeft}px;
    width: ${({ tabUnderlineWidth }) => tabUnderlineWidth}px;
    height: 3px;
    background-color: ${stylesVariables.color.red};
  }

  li {
    button {
      font-family: "Open Sans";
      font-style: normal;
      font-variant: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: 0px;
      color: ${stylesVariables.color.grey140};
      border: none;
      outline: 0;
      background-color: ${stylesVariables.color.white};
      padding-bottom: 6px;
      min-width: auto;

      text-align: center;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 800px) {
    li {
      button {
        min-width: 190px;
      }
    }
  }
`;
