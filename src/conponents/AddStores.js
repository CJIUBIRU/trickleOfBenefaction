import React, { useState } from "react";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function UploadGoods() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  // const [user] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await setDoc(doc(db, "goodsDemand", user.uid), {
      await addDoc(collection(db, "stores"), {
        name: name,
        address: address,
        phone: phone,
        uid: uuidv4(),
      });
      window.location.reload();
      alert("新增成功。");
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
      <TitleSec name="新增合作店家" />
      <br />
      <Container>
        <div>
          <Row>
            <Col>
              <Card style={{ width: "60%", marginLeft: "20%" }}>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入店家名稱（如：7-ELEVEN 輔大門市）"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入店家地址（如：242新北市新莊區中正路510號）"
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    value={address}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入電話（如：02-2905-6534）"
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                    value={phone}
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
          {/* {name && price && store && (
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
          )} */}
        </div>
      </Container>
    </div>
  );
}

export default UploadGoods;
