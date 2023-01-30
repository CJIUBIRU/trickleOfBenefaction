import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import NavbarNoFunction from "../elements/navbarNoFunction";

function SetPassword() {
  // const auth = getAuth(app);
  const navigate = useNavigate();
  // const [user] = useAuthState(auth);
  // if (!user){
  //   navigate("/signIn");
  // }
  const [emailCharity, setEmailCharity] = useState("charityb@email.com"); // 應為連結傳進來的email，目前先預設假email
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [user] = useAuthState(auth);
  const [charityData, setCharityData] = useState();
  const [charityName2, setCharityName2] = useState();
  // accquire charity data: get charity's name
  useEffect(() => {
    const q = query(
      collection(db, "charity"),
      where("info.mail", "==", emailCharity)
    );
    onSnapshot(q, (querySnapshot) => {
      setCharityData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [emailCharity]);

  // 更新 chairyName
  useEffect(() => {
    if (charityData) {
      setCharityName2(charityData[0].data.info.name);
    } else {
      setCharityName2("");
    }
  }, [charityData]);
  console.log(charityName2);

  const signUp = () => {
    if (password === checkPassword) {
      createUserWithEmailAndPassword(auth, emailCharity, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          addUser(user);
          navigate("/passwordSuccess");
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          // alert(errorCode);
          // alert(errorMessage);
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

  // 新增firebase "charity" 資訊
  function addUser(user) {
    try {
      addDoc(collection(db, "users"), {
        email: emailCharity,
        level: "charity",
        uid: user.uid,
        name: charityName2,
      });
      // auth.signOut();
    } catch (err) {
      console.log(err);
    }
  }

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
    marginTop: "30px",
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
    marginTop: "40px",
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
      <NavbarNoFunction />
      <TitleSec name="基本資料設定" />
      <Container style={{ marginBottom: "50px" }}>
        <Row style={{ fontSize: "35px", marginBottom: "30px" }}>
          <ProgressBar
            style={{
              position: "absolute",
              marginTop: "19px",
              zIndex: "1",
              width: "860px",
              marginLeft: "230px",
            }}
            now={49}
          ></ProgressBar>
          <Col
            style={{ textAlign: "center", marginLeft: "100px", zIndex: "2" }}
          >
            <FontAwesomeIcon
              style={{
                color: "#26aa50",
                marginRight: "60px",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "60px" }}>開始</span>
          </Col>
          <Col style={{ textAlign: "right", zIndex: "2" }}>
            <FontAwesomeIcon
              style={{ color: "lightgray", marginRight: "95px" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "85px" }}>
              設定密碼
            </span>
          </Col>
          <Col
            style={{ zIndex: "2", textAlign: "right", marginRight: "190px" }}
          >
            <FontAwesomeIcon
              style={{ color: "lightgray", marginRight: "25px" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px" }}>填寫機構簡介</span>
          </Col>
        </Row>
        <TitleStep name="STEP1&nbsp;-&nbsp;設定密碼" />
        <Card style={cardStyle}>
          <Card.Body>
            <InputGroup className="mb-3">
              <Form.Label htmlFor="basic-url" style={labelStyle}>
                帳號：
              </Form.Label>
              <Form.Control
                style={inputStyle}
                value={emailCharity}
                aria-label="Username"
                aria-describedby="basic-addon1"
                readOnly
                onChange={(e) => setEmailCharity(e.target.value)}
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
          </Card.Body>
        </Card>
        <div>
          {/* <ButtonLink to="/passwordSuccess" name="確定" /> */}
          <button onClick={signUp} style={subBtnStyle}>
            送出
          </button>
        </div>
      </Container>
    </div>
  );
}

export default SetPassword;
