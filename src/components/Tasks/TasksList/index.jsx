// redux
import { useDispatch, useSelector } from "react-redux";
// styled components
import { TasksListStyles } from "../../../styles/tasksStyles/tasksList";
import checkIcon from "../../../assets/images/icon-check.svg";
import crossIcon from "../../../assets/images/icon-cross.svg";
import tasks, { setTasks } from "../../../redux/slices/tasks";

export default function TasksList({ state, setState }) {
  const theme = useSelector((state) => state.theme.value);
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  const changeDoneState = (elem) => {
    dispatch(
      setTasks(
        tasks.map((t) => (t.name === elem ? { ...t, done: !t.done } : t))
      )
    );
  };

  // remove tasks
  const removeTask = (elem) => {
    const currentTasks = tasks.filter((t) => t.name !== elem);
    dispatch(setTasks(currentTasks));
  };
  return (
    <TasksListStyles mode={theme}>
      {state.length > 0 ? (
        state.map((item, index) => (
          <>
            <div className="task" key={index}>
              <div
                onClick={() => changeDoneState(item.name)}
                className={item.done ? "visible" : "invisible"}
              >
                <img src={checkIcon} alt="" />
              </div>

              <p>{item.name}</p>
              {item.done ? (
                <img
                  onClick={() => removeTask(item.name)}
                  src={crossIcon}
                  className="cross-icon"
                  alt="cross-icon"
                />
              ) : null}
            </div>
            <hr />
          </>
        ))
      ) : (
        <p>there are tasks</p>
      )}
    </TasksListStyles>
  );
}
