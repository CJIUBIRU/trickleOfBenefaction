import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import DemandStep2 from "../elements/demandStep2";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }

  let list = JSON.parse(localStorage.getItem("cart"));

  // 這個別刪，可能會用到
  // const location = useLocation();
  // const { from } = location.state;
  // console.log(from);

  // 原本的 nextStepStyle
  // const nextStepStyle = {
  //   marginLeft: "10px",
  // };

  // 改掉但會跑版的 nextStepStyle
  const nextStepStyle = {
    marginLeft: "10px",
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    border: "none",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };

  // 原本的 returnStepStyle
  // const returnStepStyle = {
  //   marginLeft: "39%",
  // };

  // 改掉但會跑版的 returnStepStyle
  const returnStepStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    border: "none",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    // marginLeft: "39%",
    // marginTop: "40px"
  };

  const stepBtnStyle = {
    marginBottom: "40px",
    marginTop: "20px",
    textAlign: "center",
  };

  const [demandList, setDemandList] = useState([]);

  return (
    <div>
      <Navbar />
      <TitleSec name="刊登物資需求" />
      <Container>
        <Row style={{ fontSize: "35px", marginBottom: "30px" }}>
          <ProgressBar
            style={{
              position: "absolute",
              marginTop: "19px",
              zIndex: "1",
              width: "1070px",
              marginLeft: "120px",
            }}
            now={66.5}
          ></ProgressBar>
          <Col style={{ textAlign: "center", zIndex: "2" }}>
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
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{ color: "#26aa50", marginLeft: "120px", backgroundColor: "white", borderRadius: "100%" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "92px" }}>
              選擇需求物資
            </span>
          </Col>
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{ color: "lightgray", marginLeft: "150px" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "137px" }}>
              填寫資料
            </span>
          </Col>
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{ color: "lightgray", marginLeft: "180px" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "167px" }}>
              確認付款
            </span>
          </Col>
        </Row>
        <TitleStep name="STEP2&nbsp;-&nbsp;填寫資料" />
        {list ? (
          list.map((item, index) => (
            <>
              <DemandStep2
                key={index}
                id={item.id}
                name={item.name}
                store={item.store}
                demandList={demandList}
                setDemandList={setDemandList}
              />
            </>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
              marginTop: "35px",
            }}
          >
            ※請返回上一頁選擇需求物資。
          </p>
        )}
        <div style={stepBtnStyle}>
          <Link to="/demandstep1">
            <button
              style={returnStepStyle}
              onClick={() => {
                localStorage.removeItem("cart");
                localStorage.removeItem("demandList");
              }}
            >
              返回
            </button>
          </Link>
          {list !== null ? (
            <Link to="/demandstep3">
              <button style={nextStepStyle}>下一步</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
