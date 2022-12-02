import React, { Component } from "react";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Container } from "react-bootstrap";
import TitleStep from "../elements/titleStep";

function UploadGoods() {
  return (
    <div>
      <Navbar />
      <TitleSec name="物資一覽表" />
      <br />
      <Container>
      </Container>
    </div>
  );
}

export default UploadGoods;
