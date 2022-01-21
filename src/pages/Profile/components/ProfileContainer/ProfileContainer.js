import { Wrapper } from "./style";
import IntroCardTop from "../IntroCardTop/IntroCardTop";
const ProfileContainer = (props) => {
  return (
    <Wrapper>
      <div className="intro-card">
        <IntroCardTop />
      </div>
    </Wrapper>
  );
};
export default ProfileContainer;
