import React, { Component } from "react";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Container } from "react-bootstrap";
import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function UploadGoods() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="合作店家一覽表" />
      <br />
      <Container></Container>
    </div>
  );
}

export default UploadGoods;
