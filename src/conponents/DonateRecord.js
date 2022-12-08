import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import RecordList from "./RecordList";
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
  return (
    <div>
      <Navbar />
      <TitleSec name="捐贈紀錄" />
      <Container>
        <div>
          <RecordList />
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
