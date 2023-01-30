import React from "react"; 
import Card from "react-bootstrap/Card";
import ButtonLink from "./button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function Product() {
  const [user] = useAuthState(auth);
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
  const goDonateStyle = {
    marginTop: "15px",
    marginLeft: "30%",
  };
  const goDonateSecStyle = {
    marginTop: "15px",
    marginLeft: "20%",
  };
  return (
    <div>
      <Card style={card}>
        <Card.Img style={goodsImgStyle} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg" />
        <Card.Body style={contentStyle}>
          <Card.Title>
            物資名稱：<b>ASUS 平板電腦</b>
          </Card.Title>
          <hr></hr>
          <Card.Text style={cardText}>
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
            <br />
            單價：$203／台
            {!user && (
              <div style={goDonateSecStyle}>
                <button
                  style={{
                    color: "#ffffff",
                    backgroundColor: "lightgray",
                    border: "none",
                    borderRadius: "30px",
                    fontSize: "16px",
                    width: "180px",
                    textAlign: "center",
                    height: "35px",
                    fontWeight: "bold",
                  }}
                >
                  登入後可加入捐贈箱
                </button>
              </div>
            )}
            {user && (
              <div style={goDonateStyle}>
                <ButtonLink to="/donate" name="加入捐贈箱" />
              </div>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
