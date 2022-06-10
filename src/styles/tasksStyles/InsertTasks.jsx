import styled from "styled-components";
import { dark, light } from "../colors.js";

export const InsertTaskStyles = styled.form`
  margin-top: 5vh;
  input {
    border-radius: 4px;
    width: 86%;
    padding: 4vh 7%;
    background: ${({ mode }) =>
      mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
    outline: none;
    border: none;
    font-size: 17px;
    color: ${({ mode }) => (mode ? "black" : "white")};
    &:focus {
      border: none;
    }
  }
  @media screen and (max-width: 500px) {
    input {
      font-size: 13px;
    }
    margin-top: 3.5vh;
  }
`;
