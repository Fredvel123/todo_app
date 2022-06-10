import { useEffect } from "react";
// components
import Wallpaper from "./components/Wallpaper";
import Tasks from "./components/Tasks";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/slices/theme";
// styled components
import { HomeStyles } from "./styles/homeStyles";

export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  // storage theme in localhost
  useEffect(() => {
    const data = localStorage.getItem("theme");
    if (data !== null) {
      dispatch(setTheme(JSON.parse(data)));
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <HomeStyles mode={theme}>
      <Wallpaper />
      <Tasks />
    </HomeStyles>
  );
}
