import { Container } from "react-bootstrap";
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

function UploadDemand() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
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
                  {user.displayName && (
                    <p style={{marginBottom: "-40px"}}>
                      <b>用戶名稱：</b>
                      {user.displayName}&nbsp;
                    </p>
                  )}
                  {!user.displayName && (
                    <p style={{ marginBottom: "-40px" }}>
                      <b>用戶名稱：</b>使用者&nbsp;
                    </p>
                  )}
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
                    <a href="#" style={{ color: "#002b5b" }}>
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
                  <strike>
                    <b>使用者帳號：</b>monica&nbsp;
                  </strike>
                  <a href="#" style={{ color: "#002b5b" }}></a>
                  <br />
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
                    <ButtonLink name="修改密碼" />
                    &nbsp;
                    <ButtonLink name="修改資料" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Card>

        <div style={titleSecPage}>
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
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
