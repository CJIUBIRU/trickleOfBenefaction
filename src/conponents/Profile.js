import { Container, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
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
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

function Task({ email }) {
  const [user] = useAuthState(auth);
  return <div>{email === user.email && <p>{email}</p>}</div>;
}
const uploadUserName = (item) => {
  localStorage.setItem('good',JSON.stringify(item));
}
function Task2({ id, email, name }) {
  const [user] = useAuthState(auth);
  return (
    <div>
      {email === user.email && (
        <div style={{display: "flex", flexDirection: "row"}}>
          <p>{name}</p>
          &nbsp;
          <Nav.Link
            as={Link}
            to="/setUserName"
            style={{ border: "none", backgroundColor: "white" }}
            onClick={e => uploadUserName({"id": id, "name": name})}
          >
            <FontAwesomeIcon icon={faPen} />
          </Nav.Link>
        </div>
      )}
    </div>
  );
}
function UploadDemand() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  function verifiedEmail() {
    if (user.emailVerified === false) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // 驗證信發送完成
          navigate("/profile");
          alert(
            "驗證信已發送到您的信箱，請查收。\n註：若找不到信件，可查看是否被寄送至垃圾郵件裡，謝謝。"
          );
        })
        .catch((error) => {
          // 驗證信發送失敗
          console.log(error.message);
          alert("驗證信發送失敗。");
        });
    } else {
      alert("未能抓到user資訊");
    }
  }
  const profileContentStyle = {
    borderRadius: "5px",
    height: "380px",
    color: "#002b5b",
    fontSize: "18px",
    letterSpacing: "1px",
    lineHeight: "40px",
    margin: "0 0 0 5%",
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
    marginTop: "18px",
    display: "flex",
    flexDirection: "row",
  };
  const imgStyle = {
    width: "260px",
    height: "260px",
    margin: "50px 0px 30px 100px",
    borderRadius: "100%",
  };
  const textStyle = {
    marginTop: "35px",
  };
  const imgSecStyle = {
    width: "260px",
    height: "260px",
    margin: "50px 0px 30px 100px",
    borderRadius: "100%",
    backgroundColor: "#fef1e6",
    textAlign: "center",
    lineHeight: "260px",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="個人檔案管理" />
      <Container>
        <Card style={{ marginTop: "40px", width: "80%", marginLeft: "10%" }}>
          <div style={profileContentStyle}>
            <Row>
              <Col>
                <div>
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="profilePhoto"
                      referrerPolicy="no-referrer"
                      style={imgStyle}
                    ></img>
                  )}
                  {!user.photoURL && (
                    <div style={imgSecStyle}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "#002b5b" }}
                      >
                        新增頭像&nbsp;
                        <FontAwesomeIcon icon={faHandPointer} />
                      </a>
                    </div>
                  )}
                </div>
              </Col>
              <Col>
                <div style={textStyle}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "0px",
                    }}
                  >
                    <b>用戶名稱：</b>
                    {details.map((item) => (
                      <Task2
                        id={item.id}
                        key={item.id}
                        name={item.data.name}
                        email={item.data.email}
                      />
                    ))}
                  </div>
                  {/* {!user.displayName && (
                    <p style={{ marginBottom: "-40px", display: "flex", flexDirection: "row" }}>
                      <b>用戶名稱：</b>使用者&nbsp;<Nav.Link as={Link} to="/setUserName" style={{border: "none", backgroundColor: "white"}}><FontAwesomeIcon icon={faPen} /></Nav.Link>&nbsp;
                    </p>
                  )} */}
                  {/* {details.map((item) => (
                      <Task3
                        id={item.id}
                        key={item.id}
                        name={item.data.name}
                        email={item.data.email}
                      />
                    ))} */}
                  <a href="#" style={{ color: "#002b5b" }}></a>
                  <br />
                  <strike>
                    <b>用戶級別：</b>中級會員&nbsp;
                  </strike>
                  <a href="#" style={{ color: "#002b5b" }}>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </a>
                  <br />
                  <strike>
                    <b>用戶累積點數：</b>1032&nbsp;
                  </strike>
                  <a href="#" style={{ color: "#002b5b" }}>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </a>
                  <br />
                  <b>用戶信箱：</b>
                  {user.email}
                  &nbsp;
                  {user.emailVerified == false && (
                    <a
                      href="#"
                      style={{ color: "#002b5b" }}
                      onClick={verifiedEmail}
                    >
                      <FontAwesomeIcon
                        style={{ color: "lightgray" }}
                        icon={faCircleCheck}
                      />
                    </a>
                  )}
                  {user.emailVerified == true && (
                    <a href="#" style={{ color: "#002b5b" }}>
                      <FontAwesomeIcon
                        style={{ color: "#26aa99" }}
                        icon={faCircleCheck}
                      />
                    </a>
                  )}
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "45px",
                    }}
                  >
                    <b>使用者帳號：</b>
                    {details.map((item) => (
                      <Task
                        id={item.id}
                        key={item.id}
                        email={item.data.email}
                      />
                    ))}
                  </div>
                  <a href="#" style={{ color: "#002b5b" }}></a>
                  <strike>
                    <b>手機號碼：</b>0987654321&nbsp;
                  </strike>
                  <a href="#" style={{ color: "#002b5b" }}>
                    <FontAwesomeIcon
                      style={{ color: "lightgray" }}
                      icon={faCircleCheck}
                    />
                  </a>
                  <br />
                  <div style={passwordStyle}>
                    <ButtonLink name="修改密碼" to="/userUpdatePassword" />
                    {/* &nbsp; */}
                    {/* <ButtonLink name="修改資料" /> */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
        {/* <div style={titleSecPage}>
          <h5 style={{ color: "#002b5b", fontWeight: "bold" }}>瀏覽紀錄</h5>
          <Slider {...settingsSec}>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </Slider>
        </div>
        <div style={titleSecPage}>
          <h5 style={{ color: "#002b5b", fontWeight: "bold" }}>捐贈紀錄</h5>
          <Slider {...settingsSec}>
            <div>
              <Record />
            </div>
            <div>
              <Record />
            </div>
            <div>
              <Record />
            </div>
            <div>
              <Record />
            </div>
            <div>
              <Record />
            </div>
            <div>
              <Record />
            </div>
          </Slider>
        </div> */}
      </Container>
    </div>
  );
}

export default UploadDemand;
