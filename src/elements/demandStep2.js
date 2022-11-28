import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import img from "../img/tablet.jpg";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function DemandStep2() {
  const card = {
    marginBottom: "20px",
    marginLeft: "15%",
    marginRight: "15%",
    padding: "40px 40px 40px 40px",
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
  const inputStyle = {
    border: "1.5px solid #90AACB",
    width: "8.5%",
    height: "30px",
  };
  const inputSecStyle = {
    border: "1.5px solid #90AACB",
    width: "75%",
    height: "30px",
  };
  const btnDashStyle = {
    backgroundColor: "#002B5B",
    width: "30px",
    height: "30px",
    paddingTop: "0px",
    textAlign: "left",
    border: "none",
    borderRadius: "100px",
    marginLeft: "3px",
    marginRight: "3px",
  };
  const btnAddStyle = {
    backgroundColor: "#002B5B",
    width: "30px",
    height: "30px",
    paddingTop: "0px",
    textAlign: "left",
    border: "none",
    borderRadius: "100px",
    marginLeft: "3px",
    marginRight: "3px",
    paddingLeft: "9px",
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
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                lineHeight: "30px",
              }}
            >
              需求數量：
              <Button style={btnDashStyle} variant="primary" type="submit">
                -
              </Button>
              <Form.Control style={inputStyle} placeholder="0" />
              <Button style={btnAddStyle} variant="primary" type="submit">
                +
              </Button>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                lineHeight: "30px",
              }}
            >
              需求說明：
              <Form.Control style={inputSecStyle} placeholder="請輸入文字..." />
            </div>
            <br />
            物資提供商家：
            <a style={demandHrefStyle} href="#">
              奕慈麵包坊
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DemandStep2;
