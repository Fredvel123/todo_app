import { useSelector } from "react-redux";
import { InsertTaskStyles } from "../../../styles/tasksStyles/InsertTasks";

export default function InsertTasks() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <InsertTaskStyles mode={theme}>
      <input type="text" placeholder="create a new task" />
    </InsertTaskStyles>
  );
}
