// redux
import { useSelector } from "react-redux";
// styled components
import { TasksListStyles } from "../../../styles/tasksStyles/tasksList";

export default function TasksList() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <TasksListStyles mode={theme}>
      <p>here will be the tasks</p>
    </TasksListStyles>
  );
}
