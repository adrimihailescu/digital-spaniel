import styled from "styled-components";
import stylesVariables from "../../../constants/styles";

export const FooterComponent = styled.footer`
  background-color: ${stylesVariables.color.grey10};

  @media only screen and (min-width: 1350px) {
    padding-top: 128px;
    padding-bottom: 32px;
    padding-left: 15.75%;
  }
`;

export const CopyrightAndSocialComponent = styled.div`
  margin-top: 129px;
`;
