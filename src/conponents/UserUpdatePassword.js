import { Container } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

function UserUpdatePassword() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }

  // console.log([user]);

  const [password, setPassword] = useState({
    oldOne: "",
    newOne: "",
  });

  const handleChange = (e) => {
    setPassword((password) => ({
      ...password,
      [e.target.name]: e.target.value,
    }));
  };

  function reauthenticate(password) {
    console.log(password);
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, password.oldOne);
    console.log(password.oldOne);
    reauthenticateWithCredential(user, credential)
        .then(() => {
            // User re-authenticated.
            if (password.oldOne === password.newOne) {
                window.location.reload();
                alert("新密碼與舊密碼一致，請重新設定新密碼");
            } else {
                changePassword(password.newOne);
            }
        })
        .catch((error) => {
            console.log(error);
            const errorMes = error.code;
            console.log(errorMes);
            if (errorMes === 'auth/wrong-password') {
                window.location.reload();
                alert('舊密碼不一致，請輸入正確的密碼');
            }
            // else if ()
        });
}

function changePassword(newPassword) {
    const user = auth.currentUser;
    console.log(newPassword);
    updatePassword(user, newPassword)
        .then(() => {
            console.log("更新完畢");
            navigate("/profile");
            alert("成功設置新密碼！");
        }).catch((error) => {
            console.log(error.message);
        });
}

function sendNewPassword() {
    try {
        reauthenticate(password);
    } catch(err){
        console.log(err.message);
        alert("密碼設置失敗，請重試。");
    }
};

  // console.log("password.oldOne", password.oldOne);
  // console.log("password.newOne", password.newOne);

  const profileContentStyle = {
    borderRadius: "5px",
    height: "200px",
    color: "#002b5b",
    fontSize: "18px",
    letterSpacing: "1px",
    lineHeight: "40px",
    margin: "20px 0 0 5%",
  };
  const titleSecPage = {
    margin: "40px 0px 30px 0px", //上右下左
  };
  const settingsSec = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
  };
  const passwordStyle = {
    marginTop: "70px",
    marginLeft: "45.5%",
  };

  const textStyle = {
    marginTop: "35px",
    width: "70%",
    marginLeft: "11%",
  };

  const nameStyle = {
    lineHeight: "40px",
    marginRight: "10px",
  };
  const labelStyle = {
    width: "30%",
    height: "40px",
    borderRadius: "5px",
  };

  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    borderColor: "#002B5B",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };

  return (
    <div>
      <Navbar />
      <TitleSec name="修改密碼" />
      <Container>
        <Card style={{ marginTop: "60px", width: "60%", marginLeft: "20%" }}>
          <div style={profileContentStyle}>
            <Col>
              <div style={textStyle}>
                <InputGroup style={{marginBottom: "10px"}}>
                  <Form.Label htmlFor="basic-url" style={nameStyle}>
                    輸入舊密碼：&nbsp;
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="oldOne"
                    style={labelStyle}
                    value={password.oldOne}
                    onChange={handleChange}
                    placeholder="請輸入舊密碼"
                  />
                </InputGroup>
                <InputGroup>
                  <Form.Label htmlFor="basic-url" style={nameStyle}>
                    設定新密碼：&nbsp;
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="newOne"
                    style={labelStyle}
                    value={password.newOne}
                    onChange={handleChange}
                    placeholder="請輸入新密碼"
                  />
                </InputGroup>
              </div>
            </Col>
          </div>
        </Card>

        <div style={passwordStyle}>
          <input
            style={stepBtnStyle}
            type="submit"
            value="確認修改"
            onClick={sendNewPassword}
          />
        </div>
      </Container>
    </div>
  );
}

export default UserUpdatePassword;
