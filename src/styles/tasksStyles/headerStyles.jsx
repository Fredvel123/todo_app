import styled from "styled-components";

export const HeaderStyles = styled.div`
  background: #00000000;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: white;
    letter-spacing: 10px;
    font-size: 35px;
  }
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    h2 {
      font-size: 31px;
    }
  }
  @media screen and (max-width: 750px) {
    h2 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 25px;
    }
  }
`;
