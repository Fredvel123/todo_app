import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../../redux/slices/tasks";
import {
  DownStyles,
  FooterStyles,
} from "../../../styles/tasksStyles/footerTasksStyles";

export default function FooterTasks({ tasksLength, state, setState }) {
  const theme = useSelector((state) => state.theme.value);
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  // change color state
  const changeAllState = () => {
    setState({
      all: true,
      active: false,
      completed: false,
    });
  };
  const changeActivateState = () => {
    setState({ all: false, active: true, completed: false });
  };
  const changeCompletedState = () => {
    setState({ all: false, active: false, completed: true });
  };

  const removeAllTasksCompleted = () => {
    const currentTasksNotCompleted = tasks.filter((t) => t.done === false);
    dispatch(setTasks(currentTasksNotCompleted));
  };
  return (
    <>
      <FooterStyles mode={theme}>
        <div className="up">
          <p>{tasksLength.length} items left</p>
          <p onClick={removeAllTasksCompleted}>Clear completed</p>
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
