import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img from "../img/tablet.jpg";
import ButtonLink from "./button";

function Record() {
  const goDonateStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    marginTop: "15px",
    marginLeft: "25%",
    marginRight: "25%",
    lineHeight: "35px",
    fontSize: "16px",
    width: "50%",
    textAlign: "center",
    height: "36px",
    fontWeight: "bold",
  };
  const card = {
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "45px 40px 10px 40px",
    color: "#002B5B",
  };
  const contentStyle = {
    marginTop: "15px",
    textAlign: "center",
  };
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
    marginLeft: "15%",
    marginRight: "75%",
  };
  const cardText = {
    color: "#6C6C6C",
    textAlign: "left",
    marginLeft: "3px",
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
          <Card.Text style={cardText}>
            需求機構：鈺惠協會
            <br />
            捐贈數量：10
            <br />
            需求說明：提供給偏鄉孩童授課使用
            <br />
            物資提供商家：
            <a style={demandHrefStyle} href="#">
              奕慈麵包坊
            </a>
            <br />
            <hr></hr>
            付款方式：超商代碼
            <br />
            訂單狀態：已完成
            <div style={{marginLeft: "30%", marginTop: "20px"}}>
              <Nav.Link
                style={{
                  color: "#ffffff",
                  backgroundColor: "#002B5B",
                  borderRadius: "30px",
                  fontSize: "16px",
                  width: "120px",
                  textAlign: "center",
                  height: "35px",
                  fontWeight: "bold",
                  lineHeight: "33px"
                }}
                to="/donateRecordList"
                as={Link}
              >
                查看更多
              </Nav.Link>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Record;
