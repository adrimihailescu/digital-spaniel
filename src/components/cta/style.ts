import styled from "styled-components";
import stylesVariables from "../../constants/styles";

const CTAComponent = styled.a`
  border-bottom: 3px solid #c0345e;
  color: ${stylesVariables.color.darkGrey};
  width: 59px;
  height: 34px;
  opacity: 1;
  text-decoration: none;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
`;

export default CTAComponent;
