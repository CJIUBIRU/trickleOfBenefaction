import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import DemandStep3 from "../elements/demandStep3";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
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
  return (
    <div>
      <Navbar />
      <TitleSec name="刊登物資需求" />
      <Container>
        <TitleStep name="STEP3&nbsp;-&nbsp;確認並送出" />
        <div>
          <DemandStep3 />
        </div>
        <div>
          <DemandStep3 />
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
          ※需求資訊刊登後，仍可進行更改。
        </p>

        <div style={stepBtnStyle}>
          <div style={returnStepStyle}>
            <ButtonLink to="/demandstep2" name="返回" />
          </div>
          <div style={nextStepStyle}>
            <ButtonLink to="#" name="刊登" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
