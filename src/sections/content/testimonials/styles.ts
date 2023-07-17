import styled from "styled-components";
import stylesVariables from "../../../constants/styles";

export const TestimonialsSectionComponent = styled.section`
  padding: 50px 0 60px;

  .title {
    padding-left: 35px;
  }

  .swiper {
    padding-top: 50px;
    padding-bottom: 70px;

    .swiper-wrapper {
      .swiper-slide {
        display: flex;
        justify-content: center;
        transition: all 250ms ease-in-out;

        &-active {
          transition: all 250ms ease-in-out;
          & > * {
            background-color: ${stylesVariables.color.grey140};
            box-shadow: 0px 0px 20px ${stylesVariables.color.grey140};
            .quotes {
              &:before,
              &:after {
                color: ${stylesVariables.color.grey100};
              }
            }

            & > * {
              color: ${stylesVariables.color.white};
            }
          }
        }
      }
    }
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 32px;
    bottom: 0;

    .swiper-pagination-bullet {
      width: 24px;
      height: 24px;
      margin: 0;

      &:hover {
        background-color: ${stylesVariables.color.red};
        opacity: 1;
      }

      &-active {
        background-color: ${stylesVariables.color.grey140};
        width: 34px;
        height: 34px;

        &:hover {
          background-color: ${stylesVariables.color.grey140};
          cursor: default;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 128px 0 128px;

    .title {
      padding-left: 15.75%;
    }

    .swiper {
      padding-top: 100px;
      padding-bottom: 160px;

      .swiper-wrapper {
        .swiper-slide {
          &-active {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1920px) {
    padding: 128px 0 128px;

    .title {
      padding-left: 300px;
    }

    .swiper {
      margin: 0 226px;
    }
  }
`;
