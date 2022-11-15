import React, { Component } from "react";
import { db } from "../utils/firebase";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Card, FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 

function UploadGoods() {
  const [name, setName] = useState("");
  const [store, setStore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await setDoc(doc(db, "goodsDemand", name),{
        name: name,
        store: store,
      });
    }
    catch (err){
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
    margin: "50px 0px 50px 40%",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="上架物資" />
      <br />
      <Container>
        <div>
          <Row>
            <Col>
              <Card>
                <FormControl
                  style={{ margin: "30px", width: "auto" }}
                  disabled
                  value="【春風】超細柔抽取式衛生紙110抽24包.jpg"
                />

                <p
                  style={{
                    width: "30%",
                    marginLeft: "35%",
                    backgroundColor: "#26aa99",
                    color: "#ffffff",
                    marginTop: "10px",
                    marginBottom: "33.5px",
                    textAlign: "center",
                    fontWeight: "bold"
                  }}
                >
                  已上傳
                </p>
              </Card>
            </Col>
            <Col>
              <Card>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入物資名稱"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入合作店家"
                    onChange={(e) => setStore(e.target.value)}
                    type="text"
                    value={store}
                  />
                  <button type="submit" style={subBtnStyle}>
                    上架
                  </button>
                </form>
              </Card>
            </Col>
          </Row>
          <Card style={{ marginTop: "35px" }}>
            <Card.Header
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "#002b5b",
                textAlign: "center",
              }}
            >
              預覽畫面
            </Card.Header>
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default UploadGoods;
