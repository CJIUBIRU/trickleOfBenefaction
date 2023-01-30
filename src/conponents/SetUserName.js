import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import NavbarHome from "../elements/navbarHome";
import { Container } from "react-bootstrap";

function SetPassword() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user) {
    navigate("/signIn");
  }
  // const auth = getAuth(app);
  // const [user] = useAuthState(auth);
  // if (!user){
  //   navigate("/signIn");
  // }
  // const [user] = useAuthState(auth);
  let good = JSON.parse(localStorage.getItem("good"));
  const [values, setValues] = useState({
    name: good.name,
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "users", good.id);
    console.log(taskDocRef);
    console.log(good.id);
    try {
      await updateDoc(taskDocRef, {
        name: values.name,
      });
      alert("修改成功");
      navigate("/profile");
    } catch (err) {
      console.log(err);
      alert("資料更新有誤：", err);
    }
  };
  const cardStyle = {
    width: "50%",
    height: "180px",
    color: "black",
    paddingTop: "40px",
    marginLeft: "25%",
    paddingBottom: "40px",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
    marginTop: "30px",
  };
  const labelStyle = {
    textAlign: "center",
    paddingTop: "1%",
  };
  const inputStyle = {
    borderRadius: "5px",
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
    marginTop: "40px",
  };
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="基本資料設定" />
      <Container style={{ marginBottom: "50px" }}>
        <form onSubmit={handleSubmit}>
          <Card style={cardStyle}>
            <Card.Body>
              <InputGroup className="mb-3">
                <Form.Label htmlFor="basic-url" style={labelStyle}>
                  修改使用者名稱：
                </Form.Label>
                <Form.Control
                  style={inputStyle}
                  placeholder="請輸入使用者名稱（如：王小明）"
                  // value={}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  name="name"
                />
              </InputGroup>
            </Card.Body>
          </Card>
          <div>
            {/* <ButtonLink to="/passwordSuccess" name="確定" /> */}
            <button type="submit" style={subBtnStyle}>
              送出
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default SetPassword;
