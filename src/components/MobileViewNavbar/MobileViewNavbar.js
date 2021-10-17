import { Wrapper } from "./style";
import MenuIcon from "@mui/icons-material/Menu";

const MobileViewNavbar = () => {
  const handleLeftNavbar = (e) => {};
  return (
    <Wrapper>
      <div className="heading">
        <div onClick={(e) => handleLeftNavbar(e)} className="left-toggle-bar">
          <MenuIcon />
        </div>
        Samwad 💬
        <div className="right-toggle-bar">
          <MenuIcon />
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileViewNavbar;
