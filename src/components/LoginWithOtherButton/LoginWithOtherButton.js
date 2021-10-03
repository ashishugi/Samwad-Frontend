import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Wrapper, Button } from "./style";

const LoginWithOtherButton = (props) => {
  const { icon } = props;
  return (
    <Wrapper>
      {icon === "google" ? (
        <Button className="GoogleIcon">
          <GoogleIcon style={{ color: "#4da2f9" }} />
          <div className="btn-headline">Continue with Google</div>
        </Button>
      ) : (
        <Button>
          <FacebookIcon style={{ color: "#3c5c99" }} />
          <div className="btn-headline">Continue with Facebook</div>
        </Button>
      )}
    </Wrapper>
  );
};

export default LoginWithOtherButton;
