import { Wrapper } from "./style";

const PostFeedCard = (props) => {
  const { imageUrl } = props;
  return (
    <Wrapper>
      <div className="feed-image">
        <img src={imageUrl} alt="post-image" />
      </div>
    </Wrapper>
  );
};

export default PostFeedCard;
