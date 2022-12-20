import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";

import SuccessInfo from "../elements/successInfo";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "react-bootstrap";

function UploadSuccess() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }
  const cardStyle = {
    width: "50%",
    color: "black",
    left: "50%",
    marginTop: "230px",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "3%",
    paddingBottom: "6%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };

  const btnStyle = {
    position: "absolute",
    marginTop: "45px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="上架物資" />
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
            now={98}
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
              style={{
                color: "#26aa50",
                marginRight: "95px",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "85px" }}>
              上傳圖片
            </span>
          </Col>
          <Col
            style={{ zIndex: "2", textAlign: "right", marginRight: "190px" }}
          >
            <FontAwesomeIcon
              style={{
                color: "#26aa50",
                marginRight: "25px",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px" }}>填寫商品資訊</span>
          </Col>
        </Row>
      </Container>
      <Card style={cardStyle}>
        <Card.Body>
          <SuccessInfo
            name="物資已上架成功！"
            name2="（可至 物資一覽表 查看已上架物資。）"
          />
          <div style={btnStyle}>
            <ButtonLink to="/uploadGoods" name="繼續上架" />
            &nbsp;
            <ButtonLink to="/allGoods" name="物資一覽表" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UploadSuccess;
