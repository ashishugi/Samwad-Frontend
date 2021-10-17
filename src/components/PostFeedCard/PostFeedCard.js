import { useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ForumIcon from "@mui/icons-material/Forum";

import { Wrapper } from "./style";

const PostFeedCard = (props) => {
  const [like, setLike] = useState(false);

  const { imageUrl } = props;

  return (
    <Wrapper>
      <div className="feed-image">
        <img src={imageUrl} alt="post-image" />
      </div>
      <div className="post-info">
        <div className="user-image">
          <img
            src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
            alt="user-photo"
          />
        </div>
        <div className="user-name">
          <p>Din Wichester</p>
        </div>
        <div className="post-actions">
          <div className="post-like" onClick={() => setLike(!like)}>
            {like ? (
              <FavoriteOutlinedIcon className="active-icon" />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            <span className={like ? "active-icon" : ""}>632</span>
          </div>
          <div className="post-reply">
            <ForumIcon />
            <span>23</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostFeedCard;
