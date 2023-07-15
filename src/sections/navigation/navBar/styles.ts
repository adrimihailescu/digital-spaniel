import styled, { css } from "styled-components";
import stylesVariables from "../../../constants/styles";

export const NavBarComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${stylesVariables.color.grey100};

  a {
    img {
      height: 70px;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      a {
        color: red;
      }
    }
  }
`;
