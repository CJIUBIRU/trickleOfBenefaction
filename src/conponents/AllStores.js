import React, { Component } from "react";
import NavbarAdmin from "../elements/navbarAdmin";
import TitleSec from "../elements/titleSec";
import { Container } from "react-bootstrap";

function UploadGoods() {
  return (
    <div>
      <NavbarAdmin />
      <TitleSec name="合作店家一覽表" />
      <br />
      <Container>
      </Container>
    </div>
  );
}

export default UploadGoods;
