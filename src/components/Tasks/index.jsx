// styled components
import { TasksStyled } from "../../styles/tasksStyles/tasksStyles";
// components
import Header from "./Header";
import InsertTasks from "./InsertTask";
import TasksList from "./TasksList";
import FooterTasks from "./FooterTasks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks.value);
  const [itemState, setItemState] = useState({
    all: true,
    active: false,
    completed: false,
  });
  // "items" are tasks to render but sorted by 'all', 'completed' pr 'active'
  const [items, setItems] = useState([]);
  const getItemSorted = () => {
    if (itemState.all) {
      setItems(tasks);
    }
    if (itemState.completed) {
      const task = tasks.filter((t) => t.done === true);
      setItems(task);
    }
    if (itemState.active) {
      const task = tasks.filter((t) => t.done === false);
      setItems(task);
    }
  };
  useEffect(() => {
    getItemSorted();
  }, [tasks]); // eslint-disable-next-line
  useEffect(() => {
    getItemSorted();
  }, [itemState]); // eslint-disable-next-line
  return (
    <TasksStyled>
      <Header />
      <InsertTasks />
      <TasksList state={items} setState={setItems} />
      <FooterTasks
        tasksLength={items}
        state={itemState}
        setState={setItemState}
      />
    </TasksStyled>
  );
}
