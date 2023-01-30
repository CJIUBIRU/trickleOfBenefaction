import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
// import img from "../img/tablet.jpg";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Qrcode() {
  const card = {
    marginBottom: "20px",
    marginLeft: "15%",
    padding: "30px 40px 30px 40px",
    color: "#002B5B",
    width: "70%",
    display: "flex",
    flexDirection: "row",
  };
  const contentStyle = {
    textAlign: "left",
    marginLeft: "30px",
    letterSpacing: "2px",
  };
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
  };
  const trashIconStyle = {
    backgroundColor: "#e74a3b",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "17px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    lineHeight: "38px",
    marginBottom: "5px",
    border: "none",
  };
  const qrcodeStyle = {
    backgroundColor: "#002b5b",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "17px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    lineHeight: "38px",
    border: "none",
  };
  const btnpageStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
  };
  return (
    <div>
      <Card style={card}>
        <Card.Img
          style={goodsImgStyle}
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
        />
        <Card.Body style={contentStyle}>
          <Card.Title>
            物資名稱：<b></b>
          </Card.Title>
          <hr></hr>
          <Card.Text style={{ color: "#6C6C6C" }}>
            需求機構：
            <br />
            需求數量：
            <br />
            需求說明：
            <br />
            物資提供商家：
            {/* <a style={demandHrefStyle} href="#"> */}
            {/* </a> */}
            <br />
            目前可領取／已領取數量：
            {/* <br /> */}
            {/* 目前數量：{received} */}
          </Card.Text>
        </Card.Body>
        <div style={btnpageStyle}>
          <Nav.Link style={trashIconStyle}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Nav.Link>
          <Nav.Link style={qrcodeStyle} as={Link} to="/qrcodePage">
            <FontAwesomeIcon icon={faQrcode} />
          </Nav.Link>
        </div>
      </Card>
    </div>
  );
}

export default Qrcode;
