import { Wrapper } from "./style";

const ProfileImageUrls = [
  "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8SJZalEzsMbwlSZY4chR62sCdrrNcTYoKA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqlcCYO9lNZ8L49nAUHM1C9Z7naP_Qa5fSQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_asqgHyKDsFBx8Y1KjHXcKWykNuXf5skzEQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU",
];

const PostCenterCirularImage = (props) => {
  return (
    <Wrapper>
      {ProfileImageUrls.map((image, index) => {
        return (
          <div className="image">
            <img src={image} alt="posts" />
            <span className="add-post">+</span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default PostCenterCirularImage;
