import React from "react";
import Card from "react-bootstrap/Card";
import img from "../img/tablet.jpg";

function ProductStep3() {
  const contentStyle = {
    textAlign: "left",
    marginLeft: "30px",
    letterSpacing: "2px",
  };
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
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
  };
  const userTextStyle = {
    color: "#002b5b",
    fontWeight: "bold",
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
            捐贈數量：<span style={userTextStyle}>10</span>
            <br />
            需求說明：提供給偏鄉孩童授課使用
            <br />
            物資提供商家：
            <a style={demandHrefStyle} href="#">
              奕慈麵包坊
            </a>
            <br />
            單價：$203／台
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductStep3;
