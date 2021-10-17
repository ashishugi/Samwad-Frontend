//components

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Wrapper } from "./style";

const PostRightTopNav = () => {
  return (
    <Wrapper>
      <div className="search">
        <input type="search" placeholder="Search" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="notification">
        <NotificationsIcon />
      </div>
    </Wrapper>
  );
};

export default PostRightTopNav;
