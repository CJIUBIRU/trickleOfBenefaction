import React from "react";
import Card from "react-bootstrap/Card";

function Product() {
  const card = {
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "45px 40px 10px 40px",
    color: "#002B5B",
  };
  const contentStyle = {
    marginTop: "15px",
    marginBottom: "5px",
    textAlign: "center",
  };
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
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
        <Card.Img
          style={goodsImgStyle}
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
        />
        <Card.Body style={contentStyle}>
          <Card.Title>
            物資名稱：<b>舒潔棉柔舒適捲筒衛生紙300張x6捲</b>
          </Card.Title>
          <hr></hr>
          <Card.Text style={cardText}>
            需求機構：社團法人台灣怡心寶貝社群協會
            <br />
            需求數量：4
            <br />
            需求說明：提供孩童如廁使用。
            <br />
            物資提供商家：
            <a style={demandHrefStyle} href="#">
              全聯福利中心Pxmart 新莊輔大店
            </a>
            <br />
            單價：$199
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
