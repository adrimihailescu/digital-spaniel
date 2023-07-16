import styled from "styled-components";
import {
  LayoutItemStyleProps,
  LayoutItemVariant,
  WrapperProps,
} from "../../types/layout";

export const WrapperComponent = styled.section<WrapperProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: ${({ bg }) => bg};

  &.heroVariant {
    padding-top: 80px;

    @media only screen and (min-width: 1350px) {
      padding-top: 0;
    }
  }
`;

export const WrapperItemComponent = styled.div<LayoutItemStyleProps>`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: start;

  h2,
  p {
    margin-bottom: 62px;
  }

  @media only screen and (min-width: 1100px) {
    flex-basis: 50%;
  }

  &.${LayoutItemVariant.heroImageLayout} {
  }

  &.${LayoutItemVariant.textLayout} {
    justify-content: center;
    padding: 45px 20px 35px;

    @media only screen and (min-width: 1350px) {
      padding-left: 15.75%;
      padding-right: 11%;
      padding-top: 178px;
      padding-bottom: 164px;
    }
  }

  &.${LayoutItemVariant.textLayoutFooter} {
    padding: 45px 20px 35px;

    a {
      margin-top: auto;
    }

    @media only screen and (min-width: 1350px) {
      padding-right: 18.45%;
    }
  }

  &.${LayoutItemVariant.linksLayout} {
    padding: 45px 20px 35px;

    > ul {
      column-gap: 30px;
      row-gap: 20px;
    }

    @media only screen and (min-width: 1350px) {
      padding-top: 178px;
      padding-right: 13%;
      padding-left: 64px;

      > ul {
        column-gap: 40px;
        row-gap: 40px;
      }
    }

    @media only screen and (min-width: 1780px) {
      padding-right: 19.8%;
    }
  }

  &.${LayoutItemVariant.linksLayoutFooter} {
    padding: 45px 20px 35px;

    > ul {
      column-gap: 30px;
      row-gap: 20px;
    }

    @media only screen and (min-width: 1350px) {
      > ul {
        column-gap: 128px;
        row-gap: 63px;
      }
    }
  }
`;
