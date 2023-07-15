import styled, { css } from "styled-components";
import stylesVariables from "../../constants/styles";
import { LinkStyleProps, LinkVariant } from "../../types/link";

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

        &.underlinedCta {
          color: ${stylesVariables.color.grey140};
          border-bottom: 3px solid ${stylesVariables.color.red};
        }

        &.underlinedNav {
          color: ${stylesVariables.color.white};
          border-bottom: 3px solid "transparent";

          &.isActive {
            border-bottom: 3px solid ${stylesVariables.color.white};
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
  ${(props) => handleVariants(props)}
`;

export default LinkItem;
