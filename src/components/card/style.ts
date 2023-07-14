import styled from "styled-components";
import stylesVariables from "../../constants/styles";

const CardItem = styled.div`
  background: ${stylesVariables.color.grey20};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 434px;
  border-radius: 10px;
  padding: 64px 62px;

  blockquote {
    position: relative;
    color: ${stylesVariables.color.grey90};
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    font-variant: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 42px;
    width: 310px;
    text-align: center;
    margin-bottom: 31px;

    .content {
      position: relative;
    }

    .quotes {
      &:after {
        content: close-quote;
        font-size: 154px;
        position: absolute;
        color: ${stylesVariables.color.grey30};
        right: 10px;
        bottom: -42px;
      }
      &:before {
        content: open-quote;
        font-size: 154px;
        position: absolute;
        color: ${stylesVariables.color.grey30};
        left: -32px;
        top: 5px;
      }
    }
  }

  img {
    margin-bottom: 16px;
    border-radius: 50%;
    max-width: 96px;
  }

  .title {
    font-family: "Open Sans", sans-serif;
    color: ${stylesVariables.color.grey140};
    font-weight: normal;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 38px;
    margin-bottom: 8px;
  }

  .role {
    color: ${stylesVariables.color.grey140};
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 38px;
  }
`;

export default CardItem;
