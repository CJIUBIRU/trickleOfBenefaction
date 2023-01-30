import { Container } from "react-bootstrap";
import React from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import ProductStep3 from "../elements/productStep3";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  const nextStepStyle = {
    marginLeft: "10px",
  };
  const returnStepStyle = {
    marginLeft: "39%",
  };
  const stepBtnStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "40px",
    marginTop: "25px",
  };
  const payStyle = {
    margin: "20px 15% 40px 15%",
    color: "#002b5b",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="捐贈物資列表" />
      <Container>
        <TitleStep name="STEP3&nbsp;-&nbsp;確認並付款" />
        <div>
          <ProductStep3 />
        </div>
        <div>
          <ProductStep3 />
        </div>
        <div style={payStyle}>
          <h5>
            <b>付款方式：</b>
          </h5>
          <h5
            style={{
              margin: "20px 0px 10px 0px",
              backgroundColor: "#d7e9f7",
              textAlign: "center",
            }}
          >
            超商代碼
          </h5>
          <h5
            style={{
              margin: "20px 0px 10px 0px",
              backgroundColor: "#FFECF5",
              textAlign: "center",
            }}
          >
            ATM轉帳
          </h5>
          <h5
            style={{
              margin: "20px 0px 10px 0px",
              backgroundColor: "#F0FFF0",
              textAlign: "center",
            }}
          >
            多元支付
          </h5>
        </div>
        <p
          style={{
            fontSize: "17px",
            textAlign: "center",
            marginTop: "10px",
            color: "red",
            fontWeight: "bold",
          }}
        >
          ※注意：付款視為捐贈成立，不得取消。
        </p>
        <div style={stepBtnStyle}>
          <div style={returnStepStyle}>
            <ButtonLink to="/donateListSec" name="返回" />
          </div>
          <div style={nextStepStyle}>
            <ButtonLink to="#" name="下一步" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
