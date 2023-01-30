import React from "react";
import GoogleLogin from "../elements/googleLogin";
import LineLogin from "../elements/lineLogin";
import FbLogin from "../elements/fbLogin";
import ButtonLink from "../elements/button";
// import Input from "../elements/input";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "react-bootstrap/Button";
import app from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };

  const mulLoginPageStyle = {
    width: "380px",
    height: "100px",
    top: "118%",
    left: "50%",
    position: "absolute",
    margin: "-80px 0px 0px -190px",
    textAlign: "center",
  };
  const loginCardStyle = {
    backgroundColor: "#D7E9F7",
    width: "450px",
    height: "570px",
    position: "absolute",
    top: "50%",
    left: "75%",
    margin: "-295px 0px 0px -225px",
    // boxShadow: "0px 0px 4px 4px #f0f0f0",
    boxShadow: "10px 10px 15px lightgray",
    // boxShadow: "10px 10px 25px #9d9d9d",
    // boxShadow: "6px 6px 8px 8px #E0E0E0",
    borderRadius: "30px",
  };
  const loginContentStyle = {
    width: "380px",
    height: "300px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-225px 0px 0px -190px",
  };
  const titleStyle = {
    color: "#002B5B",
    fontSize: "30px",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "bold",
  };
  const btnContentStyle = {
    width: "240px",
    height: "40px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "0px 0px 0px -125px",
    marginTop: "85px",
    display: "flex",
    flexDirection: "row",
  };
  const inputStyle = {
    marginBottom: "20px",
    border: "1.5px solid #90AACB",
  };
  const levelInStyle = {
    width: "100%",
    marginTop: "-25px",
    marginBottom: "20px",
  };
  const levelInContentStyle = {
    color: "#002b5b",
    backgroundColor: "white",
    // border: "1.5px solid rgb(144, 170, 203)",
    border: "none",
    fontWeight: "bold",
  };
  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };
  const [activeItem, setActiveItem] = React.useState("loginUser");
  return (
    <div>
      <div style={loginCardStyle}>
        <div style={loginContentStyle}>
          <ButtonGroup aria-label="Basic example" style={levelInStyle}>
            <Button
              id="levelIn"
              style={levelInContentStyle}
              variant="secondary"
              active={activeItem === "loginUser"}
              onClick={() => setActiveItem("loginUser")}
            >
              捐贈者入口
            </Button>
            <Button
              id="levelIn"
              style={levelInContentStyle}
              variant="secondary"
              active={activeItem === "loginDemand"}
              onClick={() => setActiveItem("loginDemand")}
            >
              公益單位入口
            </Button>
            <Button
              id="levelIn"
              style={levelInContentStyle}
              variant="secondary"
              active={activeItem === "loginAdmin"}
              onClick={() => setActiveItem("loginAdmin")}
            >
              管理員入口
            </Button>
          </ButtonGroup>
          <p style={titleStyle}>
            {activeItem === "loginUser" && "捐款者，您好："}
            {activeItem === "loginDemand" && "公益單位，您好："}
            {activeItem === "loginAdmin" && "管理者，您好："}
          </p>
          <div>
            <Form.Control
              style={inputStyle}
              type="email"
              placeholder="請輸入帳號"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              style={inputStyle}
              type="password"
              placeholder="請輸入密碼"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={btnContentStyle}>
              <ButtonLink to="/signUp" name="前往註冊" />
              &nbsp;&nbsp;
              <button style={stepBtnStyle} onClick={signIn}>
                登入
              </button>
            </div>
          </div>
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
          <div style={mulLoginPageStyle}>
            {/* <h6>從以下方式進行登入</h6> */}
            <hr></hr>
            <GoogleLogin />
            <LineLogin />
            <FbLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
