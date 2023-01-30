import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "../App.css";
import Product from "../elements/product";
import TitleSec from "../elements/titleSec";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import ProductStep1 from "../elements/productStep1";
import ProductStep11 from "../elements/productStep11";
import ProductStep111 from "../elements/productStep111";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
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
              <ProductStep1 />
            </Col>
            <Col>
              <ProductStep11 />
            </Col>
            <Col>
              <ProductStep111 />
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
