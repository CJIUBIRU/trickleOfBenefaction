import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import PaginationList from "../elements/paginationList";
import MyProduct from "../elements/myProduct";
import TitleSec from "../elements/titleSec";
import Navbar from "../elements/navbar";

function UploadDemand() {
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
