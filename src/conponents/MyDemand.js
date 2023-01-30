import { Container } from "react-bootstrap";
import React from "react";
import "../App.css";
import MyProduct from "../elements/myProduct";
import TitleSec from "../elements/titleSec";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  return (
    <div>
      <Navbar />
      <TitleSec name="我的需求" />
      <Container>
        <div>
          <MyProduct />
        </div>
        {/* <PaginationList /> */}
      </Container>
    </div>
  );
}

export default UploadDemand;
