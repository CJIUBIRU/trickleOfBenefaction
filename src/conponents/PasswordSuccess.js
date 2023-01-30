import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";
import SuccessInfo from "../elements/successInfo";

import NavbarNoFunction from "../elements/navbarNoFunction";

import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PasswordSuccess() {
  const cardStyle = {
    width: "50%",
    color: "black",
    left: "50%",
    marginTop: "200px",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "3%",
    paddingBottom: "6%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };

  const btnStyle = {
    position: "absolute",
    marginTop: "50px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
  };
  return (
    <div>
      <NavbarNoFunction />
      <TitleSec name="基本資料設定" />
      <Container>
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
              style={{ color: "#26aa50", marginRight: "95px" }}
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
      </Container>
      <Card style={cardStyle}>
        <Card.Body>
          <SuccessInfo
            name="密碼設定成功！"
            name2="若未來需更改密碼請至＜帳號管理＞設定。"
            name3=""
          />

          <div style={btnStyle}>
            <ButtonLink to="/charityLogo" name="下一步" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PasswordSuccess;
