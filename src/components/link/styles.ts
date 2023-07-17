import styled, { css } from "styled-components";
import stylesVariables from "../../constants/styles";
import { LinkStyleProps, LinkVariant } from "../../types/link";

const easing = {
  easeInOutQuint: "cubic-bezier(0.83, 0, 0.17, 1)",
};

const handleVariants = ({ variant }: LinkStyleProps) => {
  switch (true) {
    case variant === LinkVariant.simple:
      return css`
        font-size: 21px;
        line-height: 58px;
        color: ${stylesVariables.color.grey90};
        letter-spacing: 0.53px;
      `;
    case variant === LinkVariant.underlined:
      return css`
        font-size: 20px;
        line-height: 27px;
        z-index: 1;

        &.underlinedCta {
          color: ${stylesVariables.color.grey140};

          &:before {
            content: "";
            background-color: ${stylesVariables.color.red};
            position: absolute;
            left: -10px;
            bottom: -3px;
            width: calc(100% + 20px);
            height: 3px;
            transition: height 0.35s ${easing.easeInOutQuint},
              color 0.65s ${easing.easeInOutQuint};
            z-index: -1;
          }

          &:hover {
            color: ${stylesVariables.color.white};

            &:before {
              height: calc(100% + 3px);
            }
          }
        }

        &.underlinedNav {
          color: ${stylesVariables.color.grey140};
          font-size: 30px;
          line-height: 37px;
          transition: all 0.3s ease-in-out;

          &:before {
            content: "";
            background: ${stylesVariables.color.red10};
            display: block;
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 3px;
            z-index: -1;
            transition: all 0.3s ${easing.easeInOutQuint};
          }

          &:hover {
            &:before {
              width: 100%;
            }
          }

          &.isActive {
            color: ${stylesVariables.color.white};

            &:before {
              width: 100%;
              height: calc(100% + 6px);
              background: ${stylesVariables.color.red10};
            }
          }

          @media only screen and (min-width: 800px) {
            font-size: 20px;
            line-height: 27px;

            &.isActive {
              color: ${stylesVariables.color.grey140};

              &:before {
                width: 100%;
                height: 3px;
                background: ${stylesVariables.color.red10};
              }
            }
          }

          @media only screen and (min-width: 1350px) {
            color: ${stylesVariables.color.white};

            &.isActive {
              &:before {
                width: 100%;
                background: ${stylesVariables.color.red10};
              }
            }
          }
        }
      `;
    default:
      break;
  }
};

const LinkItem = styled.a<LinkStyleProps>`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  ${(props) => handleVariants(props)}
`;

export default LinkItem;
