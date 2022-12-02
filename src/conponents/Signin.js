import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonLink from "../elements/button";
import ReturnHome from "../elements/returnHome";
import GoogleLogin from "../elements/googleLogin";
import LineLogin from "../elements/lineLogin";
import FbLogin from "../elements/fbLogin";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Input from "../elements/input";
import app from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../img/coffee.png";
import bgphoto from "../img/bg_chiheisen_green.jpg";

function Login() {
  const [activeItem, setActiveItem] = React.useState("loginUser");

  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyCodeDemand, setVerifyCodeDemand] = useState("");
  const [verifyCodeAdmin, setVerifyCodeAdmin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    setIsLoading(true);
    if (verifyCodeAdmin === "admin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          if (activeItem === "loginUser") {
            navigate("/");
          } else if (activeItem === "loginAdmin") {
            navigate("/homeAdmin");
          } else if (activeItem === "loginDemand") {
            navigate("/homeDemand");
          }
          setIsLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          switch (errorCode) {
            case "auth/user-not-found":
              setErrorMessage("信箱不存在");
              break;
            case "auth/invalid-email":
              setErrorMessage("信箱格式不正確");
              break;
            case "auth/wrong-password":
              setErrorMessage("密碼錯誤");
              break;
            default:
          }
          setIsLoading(false);
        });
    } else if (verifyCodeDemand === "demand") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          if (activeItem === "loginUser") {
            navigate("/");
          } else if (activeItem === "loginAdmin") {
            navigate("/homeAdmin");
          } else if (activeItem === "loginDemand") {
            navigate("/homeDemand");
          }
          setIsLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          switch (errorCode) {
            case "auth/user-not-found":
              setErrorMessage("信箱不存在");
              break;
            case "auth/invalid-email":
              setErrorMessage("信箱格式不正確");
              break;
            case "auth/wrong-password":
              setErrorMessage("密碼錯誤");
              break;
            default:
          }
          setIsLoading(false);
        });
    } else if (activeItem === "loginUser") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          if (activeItem === "loginUser") {
            navigate("/");
          } else if (activeItem === "loginAdmin") {
            navigate("/homeAdmin");
          } else if (activeItem === "loginDemand") {
            navigate("/homeDemand");
          }
          setIsLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          switch (errorCode) {
            case "auth/user-not-found":
              setErrorMessage("信箱不存在");
              break;
            case "auth/invalid-email":
              setErrorMessage("信箱格式不正確");
              break;
            case "auth/wrong-password":
              setErrorMessage("密碼錯誤");
              break;
            default:
          }
          setIsLoading(false);
        });
    }
    if (verifyCodeAdmin !== "admin" && activeItem === "loginAdmin" && verifyCodeAdmin !== "") {
      setErrorMessage("驗證碼錯誤");
    }
    if (verifyCodeDemand !== "demand" && activeItem === "loginDemand" && verifyCodeDemand !== "") {
      setErrorMessage("驗證碼錯誤");
    }
    if (verifyCodeAdmin === "" && activeItem === "loginAdmin") {
      setErrorMessage("請輸入驗證碼");
    }
    if (verifyCodeDemand === "" && activeItem === "loginDemand") {
      setErrorMessage("請輸入驗證碼");
    }
    if (password === ""){
      setErrorMessage("請輸入密碼");
    }
    if (email === ""){
      setErrorMessage("請輸入帳號");
    }
  };

  const loginCardStyle = {
    backgroundColor: "#D7E9F7",
    width: "450px",
    height: "570px",
    position: "absolute",
    top: "50%",
    left: "75%",
    margin: "-300px 0px 0px -225px",
    // boxShadow: "0px 0px 4px 4px #f0f0f0",
    boxShadow: "5px 5px 10px gray",
    // boxShadow: "10px 10px 15px lightgray",
    // boxShadow: "10px 10px 25px #9d9d9d",
    // boxShadow: "6px 6px 8px 8px #E0E0E0",
    borderRadius: "30px",
  };
  const mulLoginPageStyle = {
    width: "380px",
    height: "100px",
    top: "135%",
    left: "50%",
    position: "absolute",
    margin: "-80px 0px 0px -190px",
    textAlign: "center",
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
  const inputStyle = {
    marginBottom: "20px",
    border: "1.5px solid #90AACB",
  };
  const inputSecStyle = {
    marginBottom: "20px",
    border: "1.5px solid #90AACB",
    width: "50%",
  };
  const btnContentStyle = {
    width: "240px",
    height: "40px",
    position: "absolute",
    top: "58.5%",
    left: "50%",
    margin: "0px 0px 0px -125px",
    marginTop: "85px",
    display: "flex",
    flexDirection: "row",
  };
  const loginLogoStyle = {
    width: "650px",
    height: "600px",
    position: "absolute",
    top: "50%",
    margin: "-300px 0px 0px 50px",
  };
  const loginPageStyle = {
    // width: "50%",
  };
  const loginBodyStyle = {
    display: "flex",
    flexDirection: "row",
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
  const levelInStyle = {
    width: "100%",
    marginBottom: "20px",
  };
  const levelInContentStyle = {
    color: "#002b5b",
    backgroundColor: "white",
    // border: "1.5px solid rgb(144, 170, 203)",
    border: "none",
    fontWeight: "bold",
  };
  const errorMessageStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginTop: "10px",
    border: "1px red solid",
    backgroundColor: "#FFECEC",
  };
  return (
    <div style={loginBodyStyle}>
      <img style={{ width: "100%" }} src={bgphoto} alt="bgPhoto" />
      <div style={loginLogoStyle}>
        <img style={loginLogoStyle} src={logo} alt="logoPhoto" />
      </div>
      <div style={loginPageStyle}>
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
              {activeItem === "loginUser" && (
                <Form.Control
                  style={inputStyle}
                  type="password"
                  placeholder="請輸入密碼"
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}
              <div style={{ display: "flex", flexDirection: "row" }}>
                {activeItem === "loginDemand" && (
                  <Form.Control
                    style={inputSecStyle}
                    type="password"
                    placeholder="請輸入密碼"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
                &nbsp;
                {activeItem === "loginDemand" && (
                  <Form.Control
                    style={inputSecStyle}
                    type="password"
                    placeholder="請輸入驗證碼"
                    onChange={(e) => setVerifyCodeDemand(e.target.value)}
                  />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-24px",
                }}
              >
                {activeItem === "loginAdmin" && (
                  <Form.Control
                    style={inputSecStyle}
                    type="password"
                    placeholder="請輸入密碼"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
                &nbsp;
                {activeItem === "loginAdmin" && (
                  <Form.Control
                    style={inputSecStyle}
                    type="password"
                    placeholder="請輸入驗證碼"
                    onChange={(e) => setVerifyCodeAdmin(e.target.value)}
                  />
                )}
              </div>

              <div style={btnContentStyle}>
                <ButtonLink to="/signin" name="前往註冊" />
                &nbsp;&nbsp;
                <button
                  loading={isLoading}
                  style={stepBtnStyle}
                  onClick={signIn}
                >
                  登入
                </button>
              </div>

              {activeItem === "loginUser" && (
                <div
                  style={{
                    marginTop: "30px",
                    textAlign: "center",
                    zIndex: "2",
                  }}
                >
                  <Nav.Link
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1px",
                      textDecoration: "underLine",
                      color: "blue",
                    }}
                    as={Link}
                    to="/forgetPassword"
                  >
                    忘記密碼？請點擊這裡。
                  </Nav.Link>
                </div>
              )}
              {activeItem === "loginDemand" && (
                <div
                  style={{
                    marginTop: "54px",
                    textAlign: "center",
                    zIndex: "2",
                  }}
                >
                  <Nav.Link
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1px",
                      textDecoration: "underLine",
                      color: "blue",
                    }}
                    as={Link}
                    to="/forgetPassword"
                  >
                    忘記密碼？請點擊這裡。
                  </Nav.Link>
                </div>
              )}
              {activeItem === "loginAdmin" && (
                <div
                  style={{
                    marginTop: "54px",
                    textAlign: "center",
                    zIndex: "2",
                  }}
                >
                  <Nav.Link
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1px",
                      textDecoration: "underLine",
                      color: "blue",
                    }}
                    as={Link}
                    to="/forgetPassword"
                  >
                    忘記密碼？請點擊這裡。
                  </Nav.Link>
                </div>
              )}
              {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
            </div>
            <div style={mulLoginPageStyle}>
              <hr style={{ marginTop: "50px" }} />
              <GoogleLogin />
              <FbLogin />
            </div>
          </div>
        </div>
      </div>
      <ReturnHome />
    </div>
  );
}

export default Login;
