import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";

import ButtonLink from "../elements/button";

import { useState } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

function SetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  // const [user] = useAuthState(auth);

  const handleSubmit = async (e) => {
    if (password === checkPassword) {
      e.preventDefault();
      try {
        // await setDoc(doc(db, "goodsDemand", user.uid), {
        await addDoc(collection(db, "charity"), {
          email: email,
          password: password,
        });
        // navigate("/passwordSuccess");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("兩次密碼輸入不相同，請重新輸入。");
    }
  };

  const cardStyle = {
    width: "50%",
    color: "black",
    left: "50%",
    marginTop: "230px",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5%",
    paddingBottom: "6%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
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
  const btnStyle = {
    position: "absolute",
    marginTop: "50px",
    left: "45%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
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
    margin: "50px 0px 50px 42.5%",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="基本資料設定" />
      <TitleStep name="STEP1&nbsp;-&nbsp;設定密碼" />
      <Card style={cardStyle}>
        <Card.Body>
          <form onClick={handleSubmit}>
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
            <div style={btnStyle}>
              {/* <ButtonLink to="/passwordSuccess" name="確定" /> */}
              <button type="submit" style={subBtnStyle}>
                送出
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SetPassword;
