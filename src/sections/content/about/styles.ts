import styled from "styled-components";
import stylesVariables from "../../../constants/styles";

export const AboutSectionComponent = styled.section`
  .title {
    padding: 45px 20px 35px 35px;
  }

  @media only screen and (min-width: 1350px) {
    .title {
      padding: 64px 11% 64px 15.75%;
    }
  }
`;

export const MasonryLayout = styled.div`
  padding: 45px 20px 35px;
  width: 100%;
  background-color: ${stylesVariables.color.grey10};
  list-style: none;
  margin: 0;
  display: grid;
  gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "pic1 pic2"
    "pic3 pic4"
    "cta cta";

  img {
    &:nth-child(1) {
      grid-area: pic1;
    }
    &:nth-child(2) {
      grid-area: pic2;
    }
    &:nth-child(3) {
      grid-area: pic3;
    }
    &:nth-child(4) {
      grid-area: pic4;
    }
  }

  .cta-wrapper {
    padding-left: 16px;
    list-style: none;
    grid-area: cta;
    display: flex;
    flex-direction: row;
    gap: 64px;
    margin-top: auto;
  }

  @media only screen and (min-width: 1350px) {
    width: 100%;
    padding: 158px 11% 144px 15.75%;
    grid-template-columns: 5fr 3fr 2fr;
    grid-template-areas:
      "pic1 pic2 pic4"
      "pic1 pic3 pic4"
      "pic1 pic3 ."
      ". pic3 ."
      "cta pic3 .";

    img {
      &:nth-child(3) {
        max-width: 70%;
        margin-left: auto;
      }
    }
  }
`;
