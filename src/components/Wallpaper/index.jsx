// images
import wallpaperLight from "../../assets/images/bg-desktop-light.jpg";
import wallpaperDark from "../../assets/images/bg-desktop-dark.jpg";
// redux
import { useSelector } from "react-redux";
import { WallpaperStyles } from "../../styles/wallpaperStyles";

export default function Wallpaper() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <WallpaperStyles
        src={theme ? wallpaperLight : wallpaperDark}
        alt="wallpaper"
      />
    </>
  );
}
