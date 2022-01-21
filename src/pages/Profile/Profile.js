import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import { Wrapper } from "./style";

const Profile = (props) => {
  return (
    <Wrapper>
      <div className="profile-left">
        <LeftNavbar />
      </div>
      <div className="profile-right">
        <ProfileContainer />
      </div>
    </Wrapper>
  );
};

export default Profile;
