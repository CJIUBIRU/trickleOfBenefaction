import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Navbar from "../elements/navbar";
// import { hover } from 'npx create-react-app testing-library-project';

import TitleSec from "../elements/titleSec";
import ButtonLink from "../elements/button";
import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function PointsItem() {
  const [user] = useAuthState(auth);
  const cardStyle = {
    width: "20rem",
    height: "400px",
    marginBottom: "20px",
    "&:hover": {
      transform: `scale(1.5)`,
    },
  };

  const btnStyle = {
    position: "absolute",
    // marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-120}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",

    letterSpacing: "1px",
    fontSize: "2px",
  };
  const imgStyle = {
    weidth: "100%",
    height: "200px",
    paddingLeft: "30%",
    paddingRight: "30%",
    paddingBottom: "10%",
    paddingTop: "15%",
  };
  const nameStyle = {
    fontWeight: "bold",
    color: "#002B5B",
    textAlign: "center",
    paddingBottom: "10px",
  };
  const dataStyle = {
    textAlign: "center",
    left: "50%",
  };

  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="輔大愛狗社文創商品" />
      <Container>
        {/* , display: "flex", flexDirection: "row" */}
        <div style={{ padding: "30px", textSpacing: "1px" }}>
          <Row>
            <Col>
              <Card style={cardStyle}>
                <Card.Img
                  style={imgStyle}
                  variant="top"
                  src="https://ipifa-cdn.s3-us-west-2.amazonaws.com/m/images/gassist/ec07a711f9064395_m.jpg"
                />

                <Card.Body>
                  <div style={{ height: "65%" }}>
                    <Card.Title style={nameStyle}>多功能保溫瓶</Card.Title>
                    <Card.Text style={dataStyle}>
                      <p>點數：1200點</p>
                    </Card.Text>
                  </div>
                  <div style={{ marginBottom: "0px", paddingBottom: "0px" }}>
                    <div style={{ marginTop: "40px" }}>
                      <div style={btnStyle}>
                        <ButtonLink to="/pointsItemDetails" name="我要兌換" />
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={cardStyle}>
                <Card.Img
                  style={imgStyle}
                  variant="top"
                  src="https://hinetcdn.waca.ec/uploads/shops/3414/products/70/70424625540c3e642c52ea24566a50cb.jpg"
                />

                <Card.Body>
                  <div style={{ height: "65%" }}>
                    <Card.Title style={nameStyle}>環保提袋</Card.Title>
                    <Card.Text style={dataStyle}>
                      <p>點數：500點</p>
                    </Card.Text>
                  </div>

                  <div
                    style={{
                      height: "15%",
                      marginBottom: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    <Button as={Link} to="/pointsItemDetails" style={btnStyle}>
                      我要兌換
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={cardStyle}>
                <Card.Img
                  style={imgStyle}
                  variant="top"
                  src="https://img.udnfunlife.com/image/product/DS004852/APPROVED/DU00091997/20220705133841226_500.jpg?t=20220708170007"
                />
                <Card.Body>
                  <div style={{ height: "65%" }}>
                    <Card.Title style={nameStyle}>環保餐盒</Card.Title>
                    <Card.Text style={dataStyle}>
                      <p>點數：800點</p>
                    </Card.Text>
                  </div>
                  <div
                    style={{
                      height: "15%",
                      marginBottom: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    <Button as={Link} to="/pointsItemDetails" style={btnStyle}>
                      我要兌換
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default PointsItem;
