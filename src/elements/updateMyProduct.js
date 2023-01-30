import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import img from "../img/tablet.jpg";
import { db } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { Form } from "react-bootstrap";

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
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
  };
  const navigate = useNavigate();
  let good = JSON.parse(localStorage.getItem("good"));
  const [values, setValues] = useState({
    quantity: good.quantity,
    description: good.description,
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "demand", good.id);
    console.log(taskDocRef);
    console.log(good.id);
    try {
      await updateDoc(taskDocRef, {
        quantity: values.quantity,
        description: values.description,
      });
      alert("修改成功。");
      navigate("/myDemand");
    } catch (err) {
      console.log(err);
      alert("資料更新有誤：", err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "50px" }}>
        <Card style={card}>
          <Card.Img
            style={goodsImgStyle}
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
          />
          <Card.Body style={contentStyle}>
            <Card.Title>
              物資名稱：<b>{good.name}</b>
            </Card.Title>
            <hr></hr>
            <Card.Text style={{ color: "#6C6C6C" }}>
              需求機構：{good.charity}
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                  marginTop: "15px",
                }}
              >
                <div style={{ width: "120px", lineHeight: "38px" }}>
                  需求數量：
                </div>
                <Form.Control
                  placeholder="請輸入需求數量（如：100）"
                  // value={}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  type="text"
                  value={values.quantity}
                  name="quantity"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "120px", lineHeight: "38px" }}>
                  需求說明：
                </div>
                <Form.Control
                  placeholder="請輸入需求說明（如：用途等）"
                  // value={}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  type="text"
                  value={values.description}
                  name="description"
                />
              </div>
              <br />
              物資提供商家：{good.store}
              {/* <a style={demandHrefStyle} href="#"> */}
              {/* </a> */}
              <br />
              目前可領取／已領取數量：{good.availability}／{good.received}
              {/* <br /> */}
              {/* 目前數量：{received} */}
            </Card.Text>
          </Card.Body>
        </Card>
        <div>
          {/* <ButtonLink to="/passwordSuccess" name="確定" /> */}
          <button
            type="submit"
            style={{
              color: "#ffffff",
              backgroundColor: "#002B5B",
              borderRadius: "30px",
              fontSize: "16px",
              width: "120px",
              textAlign: "center",
              height: "35px",
              fontWeight: "bold",
              marginLeft: "46.5%",
              marginTop: "40px",
            }}
          >
            送出
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyProduct;
