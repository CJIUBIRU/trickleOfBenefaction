import React, { useState, useEffect } from "react";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import img from "../img/tablet.jpg";
import { useNavigate } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Container, Nav } from "react-bootstrap";
import TitleSec from "../elements/titleSec";
import Navbar from "../elements/navbar";
import Modal from "react-bootstrap/Modal";
import QrcodeImg from "../img/qrcode.png";

function Task({
  availability,
  charity,
  description,
  name,
  photo,
  quantity,
  received,
  state,
  store,
  uid,
  id,
}) {
  const [user] = useAuthState(auth);

  const card = {
    marginBottom: "20px",
    marginLeft: "10%",
    padding: "30px 40px 30px 40px",
    color: "#002B5B",
    width: "80%",
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar />
      {user.uid === uid && (
        <Container>
          <div style={{ display: "flex", flexDirection: "row" }}>
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
                  需求機構：{charity}
                  <br />
                  需求數量：{quantity}
                  <br />
                  需求說明：{description}
                  <br />
                  物資提供商家：
                  {/* <a style={demandHrefStyle} href="#"> */}
                  {store}
                  {/* </a> */}
                  <br />
                  目前可領取／已領取數量：{availability}2／{received}
                  {/* <br /> */}
                  {/* 目前數量：{received} */}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                marginBottom: "20px",
                color: "#002B5B",
                width: "20%",
                marginRight: "10%",
                paddingTop: "60px",
              }}
            >
              <Nav.Link style={{ textAlign: "center" }} onClick={handleShow}>
                <FontAwesomeIcon
                  icon={faQrcode}
                  style={{ fontSize: "80px", textAlign: "center" }}
                />
                <br />
                <b
                  style={{
                    fontSize: "18px",
                    marginTop: "5px",
                  }}
                >
                  查看取物條碼
                </b>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#e74a3b",
                  }}
                >
                  請在12/20 14:45 前領取完成。
                </p>
              </Nav.Link>
            </Card>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>取物條碼</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
              <img
                src={QrcodeImg}
                alt="qrcode"
                style={{ width: "200px", height: "200px" }}
              ></img>
              <div style={{ color: "#e74a3b" }}>
                ※請注意：
                <br />
                1. 請至合作店家櫃台，出示此QRCode，即可領取物資。
                <br />
                2. 物資領取期限：{" "}
                <i>
                  <u>2022-12-20 14:45:03</u>
                </i>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                關閉
              </Button>
              <Button variant="primary" onClick={handleClose}>
                完成
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </div>
  );
}

function AllQrcode() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "demand"));
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");
  if (!user) {
    navigate("/signIn");
  }
  return (
    <div>
      <Navbar />
      <TitleSec name="我的取件條碼" />
      {details.map((item) => (
        <Task
          id={item.id}
          key={item.id}
          availability={item.data.availability}
          charity={item.data.charity}
          description={item.data.description}
          name={item.data.name}
          photo={item.data.photo}
          quantity={item.data.quantity}
          received={item.data.received}
          state={item.data.state}
          store={item.data.store}
          uid={item.data.uid}
        />
      ))}
    </div>
  );
}

export default AllQrcode;
