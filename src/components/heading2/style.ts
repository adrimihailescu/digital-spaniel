import styled from "styled-components";
import stylesVariables from "../../constants/styles";

const Heading2Style = styled.h2`
  color: ${stylesVariables.color.darkGrey};
  font-size: 48px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 57px;

  span {
    color: ${stylesVariables.color.grey};
    font-size: 48px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    line-height: 57px;
    margin-bottom: 50px;
  }
`;

export default Heading2Style;
