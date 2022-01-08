import { Wrapper } from "./style";
import bg from "../../../../assets/images/profile/bg.png";
import avtaar from "../../../../assets/images/profile/avtaar.png";

const IntroCardTop = (props) => {
  return (
    <Wrapper>
      <div className="intro-background">
        <div className="bg-image">
          <img src={bg} alt="bg-image" />
        </div>
        <div className="profile-info">
          <div className="profile-photo">
            <img src={avtaar} alt="" />
          </div>
          <div className="profile-info">
            <div className="details">
              <h4>Ashish Kumar Gupta</h4>
            </div>
          </div>
          <div className="profile-edit">f adsfasdfasf</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default IntroCardTop;
