import { Container, Pagination, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import Product from "../elements/product";
import TitleSec from "../elements/titleSec";
import PaginationList from "../elements/paginationList";
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
  const titleSecPage = {
    margin: "40px 0px 30px 0px", //上右下左
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="瀏覽紀錄" />
      <Container>
        <div style={titleSecPage}>
          <Row>
            <Col>
              <Product />
            </Col>
            <Col>
              <Product />
            </Col>
            <Col>
              <Product />
            </Col>
          </Row>
          <Row>
            <Col>
              <Product />
            </Col>
            <Col>
              <Product />
            </Col>
            <Col>
              <Product />
            </Col>
          </Row>
          {/* <PaginationList /> */}
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
