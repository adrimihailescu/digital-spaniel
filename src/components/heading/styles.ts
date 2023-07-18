import styled from "styled-components";
import stylesVariables from "../../constants/styles";

export const Heading1Styles = styled.h1`
  color: ${stylesVariables.color.red};
  line-height: 72px;
  font-size: 16px;
  letter-spacing: 0.8px;
  opacity: 0.75;
`;

export const Heading2Style = styled.h2`
  color: ${stylesVariables.color.grey50};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;

  span {
    color: ${stylesVariables.color.grey30};
    font-size: 48px;
    line-height: 57px;
  }
`;

export const Heading3Styles = styled.h3`
  color: ${stylesVariables.color.grey50};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 38px;
  letter-spacing: 2.1px;
  text-transform: uppercase;
`;
