import React, { useState, useEffect }  from "react";
import { db } from "../utils/firebase";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Card, FormControl } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { doc, setDoc, addDoc, collection, updateDoc, onSnapshot, query } from "firebase/firestore";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function UpdateGoods() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  if (!user){
    navigate("/loginin");
  }
  let good = JSON.parse(localStorage.getItem('good'));


   const [values, setValues] = useState({
      name: good.name,
      store: good.store,
      price: good.price
  });

  const handleChange = (e) => {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, 'supply', good.id)
        console.log(taskDocRef);
        console.log(good.id)
      try{
          await updateDoc(taskDocRef, {
            
            name: values.name,
            store: values.store,
            price: values.price,
          })
          alert("修改成功")
          navigate("/allGoods")
      } catch(err) {
          console.log(err);
          // alert("資料更新有誤：", err)
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
    margin: "50px 0px 50px 42.5%",
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="修改物資資訊" />
      {/* <TitleStep name="STEP2 - 填寫商品資訊" /> */}
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
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={values.name}
                  />
                  <Form.Select
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    required
                    onChange={handleChange}
                  >
                    <option value={values.store}>{values.store}</option>
                    {tasks.map((task) => (
                      <option value={task.data.name}>{task.data.name}</option>
                    ))}
                  </Form.Select>
                  {/* <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入合作店家（之後改成下拉式選單）"
                    onChange={handleChange}
                    type="text"
                    name="store"
                    value={values.store}
                  /> */}
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入商品金額"
                    onChange={handleChange}
                    type="text"
                    name="price"
                    value={values.price}
                  />
                  <button type="submit" style={subBtnStyle}>
                    送出修改
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

export default UpdateGoods;
