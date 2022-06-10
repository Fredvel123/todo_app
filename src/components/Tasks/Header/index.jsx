import { HeaderStyles } from "../../../styles/tasksStyles/headerStyles";
import moonIcon from "../../../assets/images/icon-moon.svg";
import sunIcon from "../../../assets/images/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/slices/theme";

export default function Header() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(setTheme(!theme));
  };
  return (
    <HeaderStyles>
      <h2>TODO</h2>
      <img src={theme ? moonIcon : sunIcon} onClick={changeTheme} alt="icon" />
    </HeaderStyles>
  );
}
