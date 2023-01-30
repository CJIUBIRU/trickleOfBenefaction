import React from "react";
import Card from "react-bootstrap/Card";
// import img from "../img/tablet.jpg";

function DemandStep3({ id, name, store, count, demandInfo, user }) {
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
            物資名稱：<b>{name}</b>
          </Card.Title>
          <hr></hr>
          <Card.Text style={{ color: "#6C6C6C" }}>
            需求機構：{user}
            <br />
            需求數量：{count}
            <br />
            需求說明：{demandInfo}
            <br />
            物資提供商家：
            <a style={demandHrefStyle} href="#">
              {store}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DemandStep3;
