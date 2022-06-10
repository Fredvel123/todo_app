// styled components
import { TasksStyled } from "../../styles/tasksStyles/tasksStyles";
// components
import Header from "./Header";
import InsertTasks from "./InsertTask";
import TasksList from "./TasksList";
import FooterTasks from "./FooterTasks";
import { useState } from "react";

export default function Tasks() {
  const [itemState, setItemState] = useState({
    all: true,
    active: false,
    completed: false,
  });
  return (
    <TasksStyled>
      <Header />
      <InsertTasks />
      <TasksList />
      <FooterTasks state={itemState} setState={setItemState} />
    </TasksStyled>
  );
}
