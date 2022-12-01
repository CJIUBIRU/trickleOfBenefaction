import React, { Component } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../img/tablet.jpg";

function MyProduct() {
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
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
  };
  const editIconStyle = {
    backgroundColor: "#f6c23e",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "17px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    border: "none",
    marginBottom: "5px",
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
    border: "none",
  };
  const btnpageStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "14%",
  };
  return (
    <div>
      <Card style={card}>
        <Card.Img style={goodsImgStyle} variant="top" src={img} />
        <Card.Body style={contentStyle}>
          <Card.Title>
            物資名稱：<b>ASUS 平板電腦</b>
          </Card.Title>
          <hr></hr>
          <Card.Text style={{ color: "#6C6C6C" }}>
            需求機構：鈺惠協會
            <br />
            需求數量：10
            <br />
            需求說明：提供給偏鄉孩童授課使用
            <br />
            物資提供商家：
            <a style={demandHrefStyle} href="#">
              奕慈麵包坊
            </a>
          </Card.Text>
        </Card.Body>
        <div style={btnpageStyle}>
          <Button style={editIconStyle} variant="primary" type="submit">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button style={trashIconStyle} variant="primary" type="submit">
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default MyProduct;
