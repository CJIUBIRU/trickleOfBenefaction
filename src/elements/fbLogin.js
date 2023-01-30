import React from "react";
import fb from "../img/facebook_logos_PNG19748.png";
import Button from "react-bootstrap/Button";
import {
  FacebookAuthProvider,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function FbLogin() {
  //sign in with facebook
  const navigate = useNavigate();
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial.accessToken;
      let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      console.log(result.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // const [user] = useAuthState(auth);
  // if (user) {
  //   navigate("/");
  // }

  //style
  const mulLoginBtnFbStyle = {
    width: "200px",
    textAlign: "center",
    backgroundColor: "#3b5998",
    border: "none",
    height: "35px",
    paddingBottom: "35px",
    fontSize: "16px",
    marginBottom: "10px",
  };
  const mulLogoFbStyle = {
    height: "25px",
    width: "25px",
    marginRight: "15px",
    marginBottom: "6px",
  };
  return (
    <div>
      <Button
        onClick={FacebookLogin}
        style={mulLoginBtnFbStyle}
        variant="primary"
        type="submit"
      >
        <img style={mulLogoFbStyle} src={fb} alt="fbIcon"></img>
        Facebook登入
      </Button>
    </div>
  );
}

export default FbLogin;
