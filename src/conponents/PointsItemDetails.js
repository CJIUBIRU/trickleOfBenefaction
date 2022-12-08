import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";

import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function PointsItemDetails() {
  const [user] = useAuthState(auth);

  const cardStyle = {
    width: "80%",
    color: "black",
    left: "50%",
    marginTop: "100px",
    transform: `translate(${-50}%, ${-5}%)`,
    paddingTop: "5%",
    paddingBottom: "3%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };
  const h1Style = {
    color: "#002B5B",
    letterSpacing: "1px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const btnStyle = {
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",

    letterSpacing: "1px",
  };
  const imgStyle = {
    padding: "15%",
    paddingTop: "10%",
  };
  const tableStyle = {
    position: "absolute",
    paddingBottom: "40px",
    marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
  };

  const dataStyle = {
    position: "absolute",
    fontWeight: "bold",
    top: "50%",
    transform: `translate(${0}%, ${-50}%)`,
  };

  const borderStyle = {
    border: "none",
  };
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="商品介紹" />
      <Container>
        <Card style={cardStyle}>
          <Card.Body>
            <h1 style={h1Style}>多功能保溫瓶</h1>

            <Row>
              <Col>
                <Card style={borderStyle}>
                  <Card.Body style={{ height: "300px" }}>
                    <Card.Img
                      style={imgStyle}
                      variant="top"
                      src="https://ipifa-cdn.s3-us-west-2.amazonaws.com/m/images/gassist/ec07a711f9064395_m.jpg"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={borderStyle}>
                  <Card.Body style={{ height: "300px" }}>
                    <div style={dataStyle}>
                      <p>商品名稱：多功能保溫瓶</p>
                      <p>
                        點數：<span style={{ color: "#6BBDBD" }}>1200點</span>
                      </p>
                      <p>活動主辦：輔大愛狗社</p>
                      <p>活動日期：2022.10.12～2022.09.31</p>
                      <p>
                        兌換數量：
                        <input />
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div style={{ marginBottom: "40px" }}>
              <table style={tableStyle}>
                <tr>
                  <td style={{ paddingRight: "10px" }}>
                    <div style={btnStyle}>
                      <ButtonLink to="/pointsItem" name="返回" />
                    </div>
                  </td>
                  <td style={{ paddingLeft: "10px" }}>
                    <div style={btnStyle}>
                      <ButtonLink to="/pointsItemSuccess" name="確認" />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default PointsItemDetails;
