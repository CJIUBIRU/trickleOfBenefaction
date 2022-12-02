import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NavbarDemand from "../elements/navbarDemand";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import { useState } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utils/firebase";

function SetPassword() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [user] = useAuthState(auth);

  const signUp = () => {
    if (password === checkPassword) {
      createUserWithEmailAndPassword(auth, "LinYuhui@gmail.com", password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/passwordSuccess");
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          // alert(errorCode);
          // alert(errorMessage);
          console.log(errorCode);
          switch (errorCode) {
            case "auth/email-already-in-use":
              setErrorMessage("信箱已存在");
              break;
            case "auth/invalid-email":
              setErrorMessage("信箱格式不正確");
              break;
            case "auth/weak-password":
              setErrorMessage("密碼強度不足");
              break;
            default:
          }
        });
    } else {
      alert("兩次密碼輸入不相同，請重新輸入。");
    }
  };

  // const handleSubmit = async (e) => {
  //   if (password === checkPassword) {
  //     e.preventDefault();
  //     try {
  //       // await setDoc(doc(db, "goodsDemand", user.uid), {
  //       await addDoc(collection(db, "charity"), {
  //         email: email,
  //         password: password,
  //       });
  //       // navigate("/passwordSuccess");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } else {
  //     alert("兩次密碼輸入不相同，請重新輸入。");
  //   }
  // };

  const cardStyle = {
    width: "50%",
    height: "300px",
    color: "black",
    paddingTop: "40px",
    marginLeft: "25%",
    paddingBottom: "40px",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
    marginTop: "30px"
  };
  const labelStyle = {
    width: "25%",
    textAlign: "center",
    paddingTop: "1%",
  };
  const inputStyle = {
    width: "75%",
    borderRadius: "5px",
  };
  const groupStyle = {
    marginTop: "30px",
  };
  const subBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    marginLeft: "46.5%",
    marginTop: "40px"
  };
  const errorMessageStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginTop: "0px",
    border: "1px red solid",
    backgroundColor: "#FFECEC",
  };
  return (
    <div>
      <NavbarDemand />
      <TitleSec name="基本資料設定" />
      <TitleStep name="STEP1&nbsp;-&nbsp;設定密碼" />
      <Card style={cardStyle}>
        <Card.Body>
          <form>
            {/*  onClick={handleSubmit} */}
            <InputGroup className="mb-3">
              <Form.Label htmlFor="basic-url" style={labelStyle}>
                帳號：
              </Form.Label>
              <Form.Control
                style={inputStyle}
                placeholder="LinYuhui@gmail.com"
                // value={}
                aria-label="Username"
                aria-describedby="basic-addon1"
                readOnly
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3" style={groupStyle}>
              <Form.Label htmlFor="basic-url" style={labelStyle}>
                設定密碼：
              </Form.Label>
              <Form.Control
                style={inputStyle}
                placeholder="輸入密碼"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className="mb-3" style={groupStyle}>
              <Form.Label htmlFor="basic-url" style={labelStyle}>
                確認密碼：
              </Form.Label>
              <Form.Control
                style={{ width: "60%", borderRadius: "5px" }}
                placeholder="輸入密碼"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
                onChange={(e) => setCheckPassword(e.target.value)}
                required
              />
              {password === checkPassword && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: "#1cc88a",
                    fontSize: "20px",
                    marginTop: "8px",
                    marginLeft: "10px",
                  }}
                />
              )}
              {password !== checkPassword && (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: "lightgray",
                    fontSize: "20px",
                    marginTop: "8px",
                    marginLeft: "10px",
                  }}
                />
              )}
            </InputGroup>
            {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
          </form>
        </Card.Body>
      </Card>
      <div>
        {/* <ButtonLink to="/passwordSuccess" name="確定" /> */}
        <button onClick={signUp} style={subBtnStyle}>
          送出
        </button>
      </div>
    </div>
  );
}

export default SetPassword;
