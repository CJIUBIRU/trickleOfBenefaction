import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Card, FormControl } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { doc, setDoc, addDoc, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";

function UploadGoods() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  if (!user) {
    navigate("/loginin");
  }
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
        uid: uuidv4(),
      });
      navigate("/uploadGoodsSuccess")
      //alert("物資上架成功。");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'stores'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  const subBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    margin: "25px 0px",
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

              <form onSubmit={handleSubmit}>
                <Card style={{ width: "60%", marginLeft: "20%", paddingBottom: "50px" }}>
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入物資名稱（如：【春風】超細柔抽取式衛生紙110抽24包）"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                  />
                  {/* <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入合作店家（之後改成下拉式選單）"
                    onChange={(e) => setStore(e.target.value)}
                    type="text"
                    value={store}
                  /> */}

                  <Form.Select
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    required
                    onChange={(e) => setStore(e.target.value)}
                  >
                    <option value="">請選擇合作店家</option>
                    {tasks.map((task) => (
                      <option value={task.data.name}>{task.data.name}</option>
                    ))}
                  </Form.Select>
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入商品金額"
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    value={price}
                  />
                </Card>
                <div style={{ marginLeft: "44.3%", marginTop: "80px", width: "auto" }}>

                  {name && price && store && (
                    <button type="submit" style={subBtnStyle}>
                      送出
                    </button>
                  )}
                </div>
                {/* {name && price && store && (
                  <button type="submit" style={subBtnStyle}>
                    送出
                  </button>
                  )} */}
              </form>

            </Col>
          </Row>

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
