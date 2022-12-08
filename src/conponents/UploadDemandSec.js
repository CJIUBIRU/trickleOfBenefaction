import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import DemandStep2 from "../elements/demandStep2";
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
      marginTop: "20px",
    };
    return (
      <div>
        <Navbar />
        <TitleSec name="刊登物資需求" />
        <Container>
          <TitleStep name="STEP2&nbsp;-&nbsp;填寫資料" />
          <div>
            <DemandStep2 />
          </div>
          <div>
            <DemandStep2 />
          </div>
          <div style={stepBtnStyle}>
            <div style={returnStepStyle}>
              <ButtonLink to="/demandstep1" name="返回" />
            </div>
            <div style={nextStepStyle}>
              <ButtonLink to="/demandstep3" name="下一步" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

export default UploadDemand;
