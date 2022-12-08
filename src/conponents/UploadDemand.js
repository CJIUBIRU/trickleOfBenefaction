import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import FromSelect from "../elements/fromSelect";
import Search from "../elements/search";
import DemandStep1 from "../elements/demandStep1";
import ButtonLink from "../elements/button";
import PaginationList from "../elements/paginationList";
import Navbar from "../elements/navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { doc, getDocFromCache } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }
  return (
    <div>
      <Navbar />
      <TitleSec name="刊登物資需求" />
      <Container>
        <TitleStep name="STEP1&nbsp;-&nbsp;選擇需求物資" />
        <Row>
          <Col>
            <DemandStep1 />
          </Col>
          <Col>
            <DemandStep1 />
          </Col>
          <Col>
            <DemandStep1 />
          </Col>
        </Row>
        <PaginationList />
        <div
          style={{
            marginTop: "25px",
            marginBottom: "40px",
            marginLeft: "45%",
            marginRight: "55%",
          }}
        >
          <ButtonLink to="/demandstep2" name="下一步" />
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
