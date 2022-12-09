import React from "react";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function UpdateStores() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }

  let store = JSON.parse(localStorage.getItem('store'));
    // console.log("localstorage",org);

  const [values, setValues] = useState({
      name: store.name,
      address: store.address,
      phone: store.phone
  });

  const handleChange = (e) => {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, 'stores', store.id)
        // console.log(taskDocRef._key.id);
        console.log(taskDocRef);
      try{
          await updateDoc(taskDocRef, {
            name: values.name,
            address: values.address,
            phone: values.phone,
          })
          alert("修改成功")
          navigate("/allStores")
      } catch(err) {
          console.log(err);
          // alert("資料更新有誤：", err)
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
      <TitleSec name="修改合作店家資料" />
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
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={values.name}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入店家地址（如：242新北市新莊區中正路510號）"
                    onChange={handleChange}
                    type="text"
                    name="address"
                    value={values.address}
                  />
                  <FormControl
                    style={{ margin: "30px 30px 0 30px", width: "90%" }}
                    placeholder="輸入電話（如：02-2905-6534）"
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    value={values.phone}
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

export default UpdateStores;
