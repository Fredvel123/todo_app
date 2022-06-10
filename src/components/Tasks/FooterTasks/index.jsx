import { useSelector } from "react-redux";
import {
  DownStyles,
  FooterStyles,
} from "../../../styles/tasksStyles/footerTasksStyles";

export default function FooterTasks({ state, setState }) {
  const theme = useSelector((state) => state.theme.value);
  // change color state
  const changeAllState = () => {
    setState({
      all: true,
      activate: false,
      completed: false,
    });
  };
  const changeActivateState = () => {
    setState({ all: false, activate: true, completed: false });
  };
  const changeCompletedState = () => {
    setState({ all: false, activate: false, completed: true });
  };
  return (
    <>
      <FooterStyles mode={theme}>
        <div className="up">
          <p>5 items left</p>
          <p>Clear completed</p>
        </div>
      </FooterStyles>
      <DownStyles mode={theme} color={state}>
        <p className="all" onClick={changeAllState}>
          All
        </p>
        <p className="activate" onClick={changeActivateState}>
          Active{" "}
        </p>
        <p className="completed" onClick={changeCompletedState}>
          Completed
        </p>
      </DownStyles>
    </>
  );
}
