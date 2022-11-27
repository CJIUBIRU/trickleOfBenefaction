import { Container, Form } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Product from "../elements/product";
import TitleSec from "../elements/titleSec";
import Record from "../elements/record";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import ButtonLink from "../elements/button";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

function UploadDemand() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "googleUsers", user.uid), {
      // await addDoc(collection(db, "googleUsers"), {
        email: email,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
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
      <TitleSec name="同步帳號" />
      <Container>
        <Card style={{ width: "60%", marginLeft: "20%" }}>
          <form onClick={handleSubmit}>
            <Form.Control
              style={{ margin: "40px 20px 20px 20px", width: "95%" }}
              value={user.email}
              type="email"
              onChange={(e) => setEmail(user.email)}
              readOnly
            ></Form.Control>
            <Form.Control
              type="password"
              style={{ margin: "50px 20px 20px 20px", width: "95%" }}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="輸入密碼"
            ></Form.Control>
            <button type="submit" style={subBtnStyle}>
              送出
            </button>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default UploadDemand;
