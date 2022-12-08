import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import PaginationList from "../elements/paginationList";
import MyProduct from "../elements/myProduct";
import TitleSec from "../elements/titleSec";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }
  return (
    <div>
      <Navbar />
      <TitleSec name="我的需求" />
      <Container>
        <div>
          <MyProduct />
        </div>
        <div>
          <MyProduct />
        </div>
        <PaginationList />
      </Container>
    </div>
  );
}

export default UploadDemand;
