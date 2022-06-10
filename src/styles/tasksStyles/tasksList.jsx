import styled from "styled-components";
import { dark, light } from "../colors.js";

export const TasksListStyles = styled.div`
  background: ${({ mode }) =>
    mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
  padding: 2vh 7%;
  margin-top: 2.5vh;
  border-radius: 4px;
  color: ${({ mode }) => (mode ? "black" : "white")};
`;
