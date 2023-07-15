import styled from "styled-components";
import { ItemProps, WrapperProps } from "../../types/layout";

export const WrapperComponent = styled.section<WrapperProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};
`;

export const WrapperItemComponent = styled.section<ItemProps>`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  align-items: start;
`;
