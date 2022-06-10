import { TasksStyled } from "../../styles/tasksStyles/tasksStyles";
import Header from "./Header";
import InsertTasks from "./InsertTask";

export default function Tasks() {
  return (
    <TasksStyled>
      <Header />
      <InsertTasks />
    </TasksStyled>
  );
}
