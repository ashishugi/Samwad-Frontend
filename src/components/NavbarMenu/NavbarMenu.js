import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SettingsIcon from "@mui/icons-material/Settings";

import { Wrapper } from "./style";

const NavbarMenu = () => {
  return (
    <Wrapper>
      <div className="content">
        <h4>Menu</h4>
        <div className="navbar">
          <div className="navbar-item">
            <div className="navbar-icon">
              <HomeRoundedIcon />
            </div>
            <div className="navbar-button">Home</div>
          </div>
          <div className="navbar-item">
            <div className="navbar-icon">
              <MessageIcon />
            </div>
            <div className="navbar-button">Message</div>
          </div>
          <div className="navbar-item">
            <div className="navbar-icon">
              <PersonIcon />
            </div>
            <div className="navbar-button">Profile</div>
          </div>
          <div className="navbar-item">
            <div className="navbar-icon">
              <TurnedInIcon />
            </div>
            <div className="navbar-button">Saved Posts</div>
          </div>
          <div className="navbar-item">
            <div className="navbar-icon">
              <SettingsIcon />
            </div>
            <div className="navbar-button">Settings</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavbarMenu;
