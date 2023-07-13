import styled from "styled-components";
import stylesVariables from "../../constants/styles";

const CTAComponent = styled.a`
  color: ${stylesVariables.color.darkGrey};
  border-bottom: 3px solid ${stylesVariables.color.red};
  font-size: 20px;
  line-height: 27px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
`;

export default CTAComponent;
