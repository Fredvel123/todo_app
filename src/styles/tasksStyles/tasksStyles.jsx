import styles from "styled-components";

export const TasksStyled = styles.div`
  position: relative;
  margin: 0 30%;
  margin-top: -30vh !important ;
  @media screen and (max-width: 900px) {
    margin-top: -25vh;
  }
  @media screen and (max-width: 750px) {
    margin: 0 20%;
  }
  @media screen and (max-width: 500px) {
    margin: 0 5%;
  }
`;
