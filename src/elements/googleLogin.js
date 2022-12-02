import React from "react";
import google from "../img/Google__G__Logo.svg.png";
import Button from "react-bootstrap/Button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function GoogleLogin() {
  //sign in with google
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
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
  const mulLoginBtnGoogleStyle = {
    width: "200px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    border: "none",
    height: "35px",
    paddingBottom: "35px",
    fontSize: "16px",
    marginBottom: "10px",
    color: "black",
  };
  const mulLogoGoogleStyle = {
    height: "18px",
    width: "18px",
    marginRight: "15px",
    marginBottom: "3px",
  };
  return (
    <div>
      <Button onClick={GoogleLogin} style={mulLoginBtnGoogleStyle}>
        <img style={mulLogoGoogleStyle} src={google} alt="fbIcon"></img>
        Google登入
      </Button>
    </div>
  );
}

export default GoogleLogin;
