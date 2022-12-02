import React, { Component } from "react";
import { db } from "../utils/firebase";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Card, FormControl } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function UploadGoods() {
  const [name, setName] = useState("");
  const [store, setStore] = useState("");
  const [price, setPrice] = useState("");
  // const [user] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await setDoc(doc(db, "goodsDemand", user.uid), {
      await addDoc(collection(db, "goodsDemand"), {
        name: name,
        store: store,
        price: price,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const subBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    margin: "50px 0px 50px 42.5%",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="上架物資" />
      <TitleStep name="STEP2 - 填寫商品資訊" />
      <br />
      <Container>
        <div>
          <Row>
            <Col>
              <Card style={{ width: "60%", marginLeft: "20%" }}>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入物資名稱（如：【春風】超細柔抽取式衛生紙110抽24包）"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入合作店家（之後改成下拉式選單）"
                    onChange={(e) => setStore(e.target.value)}
                    type="text"
                    value={store}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入商品金額"
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    value={price}
                  />
                  <button type="submit" style={subBtnStyle}>
                    送出
                  </button>
                </form>
              </Card>
            </Col>
          </Row>
          {/* {!name && (
            <div
              style={{
                marginLeft: "45.5%",
                marginTop: "80px",
                width: "auto",
                marginBottom: "50px",
              }}
            >
              <button
                style={{
                  color: "#ffffff",
                  backgroundColor: "lightgray",
                  borderRadius: "30px",
                  lineHeight: "30px",
                  fontSize: "16px",
                  width: "120px",
                  textAlign: "center",
                  height: "35px",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                下一步
              </button>
            </div>
          )} */}
          {name && price && store && (
            <div
              style={{
                marginLeft: "45.5%",
                marginTop: "80px",
                width: "auto",
                marginBottom: "50px",
              }}
            >
              <ButtonLink
                as={Link}
                to="/uploadGoodsSuccess"
                name="下一步"
              ></ButtonLink>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default UploadGoods;
