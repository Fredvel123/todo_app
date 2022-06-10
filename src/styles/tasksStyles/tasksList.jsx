import styled from "styled-components";
import { dark, light } from "../colors.js";

export const TasksListStyles = styled.div`
  background: ${({ mode }) =>
    mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
  padding: 2vh 7%;
  margin-top: 2.5vh;
  border-radius: 4px;
  color: ${({ mode }) => (mode ? "black" : "white")};
  .task {
    display: grid;
    grid-template-columns: 8% 87% 5%;
    align-items: center;
    height: 10vh;
  }
  .invisible {
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 15px;
    height: 15px;
    border: 1px solid
      ${({ mode }) => (mode ? light.DarkGrayishBlue : dark.LightGrayishBlue)};
    border-radius: 50%;
    img {
      opacity: 0;
    }
  }
  .visible {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    border-radius: 100%;
    background: linear-gradient(to left, #743ad5, #d53a9d);
    margin-right: 5px;
    cursor: pointer;
  }
  .cross-icon {
    cursor: pointer;
    padding: 1px;
    border: 1px solid gray;
    font-weight: bold;
  }
  @media screen and (max-width: 750px) {
    .task {
      grid-template-columns: 10% 80% 10%;
      p {
        font-size: 13px;
      }
    }
  }
`;
