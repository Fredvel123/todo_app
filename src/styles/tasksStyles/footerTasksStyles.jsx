import styled from "styled-components";
import { dark, light } from "../colors.js";

export const FooterStyles = styled.footer`
  background: ${({ mode }) =>
    mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
  padding: 0 7%;
  padding-top: 3vh;
  p {
    color: gray;
    font-weight: bold;
  }
  .up {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 750px) {
    height: 6vh;
    align-items: center;
  }
`;

export const DownStyles = styled.div`
  padding: 0 7%;
  padding-bottom: 3vh;
  background: ${({ mode }) =>
    mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
  display: flex;
  justify-content: space-between;
  P {
    font-weight: bold;
  }
  .all {
    cursor: pointer;
    color: ${({ color }) => (color.all ? "#009688" : "gray")};
  }
  .completed {
    color: ${({ color }) => (color.completed ? "#009688" : "gray")};
  }
  .activate {
    color: ${({ color }) => (color.activate ? "#009688" : "gray")};
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 750px) {
    margin-top: 2vh;
    padding-bottom: 0;
    height: 8vh;
    align-items: center;
    justify-content: space-evenly;
  }
`;
