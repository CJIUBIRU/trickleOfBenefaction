import React, { Component } from "react";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Container } from "react-bootstrap";

function UploadGoods() {
  return (
    <div>
      <Navbar />
      <TitleSec name="合作店家一覽表" />
      <br />
      <Container>
      </Container>
    </div>
  );
}

export default UploadGoods;
