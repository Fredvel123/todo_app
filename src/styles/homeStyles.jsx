import styled from "styled-components";
import { light, dark } from "./colors.js";

export const HomeStyles = styled.div`
  min-height: 100vh;
  min-width: 320px;
  background: ${({ mode }) =>
    mode ? light.LightGrayishBlue : dark.VeryDarkBlue};
`;
