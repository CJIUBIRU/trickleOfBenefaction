import { Container } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import Record from "../elements/record";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Navbar from "../elements/navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function ForgetPassword() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }
  // const auth = getAuth();

  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  function sendResetEmail() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/loginin");
        alert(
          "已寄送密碼重置信至您的電子信箱。\n請依照指示設置密碼，並重新登入！\n註：若找尋不到信件，可查看是否在垃圾郵件中，謝謝"
        );
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
          case "auth/missing-email":
            setErrorMessage("請輸入信箱");
            break;
          default:
        }
      });
  }

  const profileContentStyle = {
    borderRadius: "5px",
    height: "150px",
    color: "#002b5b",
    fontSize: "18px",
    letterSpacing: "1px",
    lineHeight: "40px",
    margin: "0 0 0 5%",
  };

  const textStyle = {
    marginTop: "35px",
  };

  const labelStyle = {
    width: "70%",
    height: "40px",
    borderRadius: "5px",
    marginLeft: "15%",
    marginTop: "50px",
  };

  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    borderColor: "#002B5B",
    fontSize: "16px",
    width: "140px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    lineHeight: "30px",
  };

  const errorMessageStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginTop: "50px",
    border: "1px red solid",
    backgroundColor: "#FFECEC",
    width: "95%",
    height: "35px",
    lineHeight: "35px",
    marginLeft: "25px"
  };

  return (
    <div>
      <Navbar />
      <TitleSec name="忘記密碼" />
      <Container>
        <Card style={{ marginTop: "80px", width: "60%", marginLeft: "20%" }}>
          <div style={profileContentStyle}>
            <Col>
              <div style={textStyle}>
                <Form.Control
                  type="email"
                  name="email"
                  style={labelStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="輸入您註冊的電子信箱"
                />
              </div>
            </Col>
          </div>
        </Card>
        {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
        <div style={{ marginLeft: "44.5%", marginTop: "60px" }}>
          <button style={stepBtnStyle} type="submit" onClick={sendResetEmail}>
            確認重置密碼
          </button>
        </div>

        {/* <div style={titleSecPage}> */}
      </Container>
    </div>
  );
}

export default ForgetPassword;
