import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InsertTaskStyles } from "../../../styles/tasksStyles/InsertTasks";
import { setTasks } from "../../../redux/slices/tasks.js";

export default function InsertTasks() {
  const theme = useSelector((state) => state.theme.value);
  // tasks
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    if (e.target.value.length < 27) setText(e.target.value);
  };

  const createNewTask = () => {
    if (!tasks.find((t) => t.name === text) & (text.length < 27)) {
      dispatch(setTasks([...tasks, { name: text, done: false }]));
      setText("");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    createNewTask();
  };
  // storage tasks at localstorage
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data !== null) {
      dispatch(setTasks(JSON.parse(data)));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <InsertTaskStyles onSubmit={handlerSubmit} mode={theme}>
      <input
        type="text"
        onChange={handlerChange}
        value={text}
        placeholder="create a new task"
      />
    </InsertTaskStyles>
  );
}
