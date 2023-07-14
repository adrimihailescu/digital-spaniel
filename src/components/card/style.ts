import styled from "styled-components";
import stylesVariables from "../../constants/styles";

const CardItem = styled.div`
  background: ${stylesVariables.color.grey20} 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 434px;
  border-radius: 10px;
  padding: 64px 62px;

  .content {
    color: ${stylesVariables.color.grey90};
    font: italic normal 600 26px/42px Open Sans;
    width: 310px;
    text-align: center;
    margin-bottom: 31px;
  }

  img {
    margin-bottom: 16px;
    border-radius: 50%;
  }

  .title {
    font-family: "Open Sans", sans-serif;
    color: ${stylesVariables.color.grey140};
    font: normal normal bold 21px/38px Open Sans;
    margin-bottom: 8px;
  }

  .role {
    color: ${stylesVariables.color.grey140};
    font: normal normal normal 21px/38px Open Sans;
  }

  .active {
    background-color: ${stylesVariables.color.grey140} 0% 0% no-repeat
      padding-box;
    color: ${stylesVariables.color.white};
    font: italic normal 600 30px/45px Open Sans;
    box-shadow: 0px 0px 20px ${stylesVariables.color.grey110};
  }
`;

export default CardItem;
