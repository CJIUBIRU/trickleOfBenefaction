import React, { useState } from "react";
// import "../App.css";
//引入資料庫
import { db } from "../utils/firebase";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Card from "react-bootstrap/Card";

import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import { doc, updateDoc } from "firebase/firestore";

import { useNavigate, useLocation } from "react-router";
import NavbarNoFunction from "../elements/navbarNoFunction";

import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CharityInfo() {
  const navigate = useNavigate("");
  const cardStyle = {
    width: "80%",
    color: "black",
    left: "50%",
    marginTop: "130px",
    transform: `translate(${-50}%, ${-10}%)`,
    paddingTop: "25px",
    paddingBottom: "5%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };
  const h4Style = {
    fontWeight: "550",
    marginTop: "30px",
  };
  const infoStyle = {
    marginBottom: "8%",
    margingLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    /* color: #6C6C6C; */
  };
  const changeBtn = {
    position: "absolute",
    marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "30px",
    letterSpacing: "1px",
    marginBottom: "8%",
    color: "#ffffff",
    backgroundColor: "#002B5B",
    lineHeight: "10px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };
  const inputStyle = {
    marginLeft: "10%",
    marginRight: "10%",
  };
  const textareaStyle = {
    marginLeft: "5%",
    marginRight: "5%",
  };
  const nameStyle = {
    lineHeight: "40px",
    marginRight: "10px",
  };
  const labelStyle = {
    height: "40px",
    borderRadius: "5px",
  };

  const location = useLocation();
  const { fromURL } = location.state;
  console.log(fromURL);

  const [charityFundraisingNo, setCharityFundraisingNo] = useState("");
  const [charityTel, setCharityTel] = useState("");
  const [charityCategory, setCharityCategory] = useState("");
  const [charityConcept, setCharityConcept] = useState("");
  const [charityIntro, setCharityIntro] = useState("");
  // console.log(charityCategory);

  const handleUpdate = async (e) => {
    e.preventDefault();
    //mail接值之後要修
    const taskDocRef = doc(db, "charity", "25y5yPR6rG5MvLX9pmM6");

    // console.log(taskDocRef._key.id);
    console.log(taskDocRef);

    try {
      console.log("start");
      await updateDoc(taskDocRef, {
        "file.img.logo": fromURL,
        "info.status": "已啟用",
        "info.fundraisingNo": charityFundraisingNo,
        "info.tel": charityTel,
        "info.details.category": charityCategory,
        "info.details.concept": charityConcept,
        "info.details.intro": charityIntro,
      });
      //console.log('end');
      navigate("/charityInfoSuccess");
    } catch (err) {
      //console.log(err);
      // alert("資料更新有誤：", err)
    }
  };

  return (
    <div>
      <NavbarNoFunction />
      {/* <form className='form' onSubmit={handleSubmit}> */}

      <form className="form">
        <TitleSec name="基本資料設定" />
        <Container>
          <Row style={{ fontSize: "35px", marginBottom: "30px" }}>
            <ProgressBar
              style={{
                position: "absolute",
                marginTop: "19px",
                zIndex: "1",
                width: "860px",
                marginLeft: "230px",
              }}
              now={98}
            ></ProgressBar>
            <Col
              style={{ textAlign: "center", marginLeft: "100px", zIndex: "2" }}
            >
              <FontAwesomeIcon
                style={{
                  color: "#26aa50",
                  marginRight: "60px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
                icon={faCircleCheck}
              />
              <br />
              <span style={{ fontSize: "15px", marginRight: "60px" }}>
                開始
              </span>
            </Col>
            <Col style={{ textAlign: "right", zIndex: "2" }}>
              <FontAwesomeIcon
                style={{
                  color: "#26aa50",
                  marginRight: "95px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
                icon={faCircleCheck}
              />
              <br />
              <span style={{ fontSize: "15px", marginRight: "85px" }}>
                設定密碼
              </span>
            </Col>
            <Col
              style={{ zIndex: "2", textAlign: "right", marginRight: "190px" }}
            >
              <FontAwesomeIcon
                style={{ color: "lightgray", marginRight: "25px" }}
                icon={faCircleCheck}
              />
              <br />
              <span style={{ fontSize: "15px" }}>填寫機構簡介</span>
            </Col>
          </Row>
        </Container>
        <TitleStep name="STEP3&nbsp;-&nbsp;填寫機構簡介" />
        <Card style={cardStyle}>
          <Card.Body>
            <div>
              <div style={infoStyle}>
                {/* <h4 style={h4Style}>一、機構LOGO圖檔</h4><br></br>
                                <div style={inputStyle}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </div> */}
                <h4 style={h4Style}>二、機構基本資料</h4>
                <br></br>
                <div style={inputStyle}>
                  <div>
                    <ol>
                      <InputGroup className="mb-3">
                        <span style={{ width: "25%" }}>
                          <Form.Label htmlFor="basic-url" style={nameStyle}>
                            <li>勸募許可文號：</li>
                          </Form.Label>
                        </span>
                        <span style={{ width: "75%" }}>
                          <Form.Control
                            style={labelStyle}
                            placeholder="請輸入文字"
                            required
                            value={charityFundraisingNo}
                            onChange={(e) =>
                              setCharityFundraisingNo(e.target.value)
                            }
                          />
                        </span>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <span style={{ width: "25%" }}>
                          <Form.Label htmlFor="basic-url" style={nameStyle}>
                            <li>機構聯絡電話：</li>
                          </Form.Label>
                        </span>
                        <span style={{ width: "75%" }}>
                          <Form.Control
                            style={labelStyle}
                            placeholder="請輸入文字"
                            value={charityTel}
                            onChange={(e) => setCharityTel(e.target.value)}
                          />
                        </span>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <span style={{ width: "25%" }}>
                          <Form.Label htmlFor="basic-url" style={nameStyle}>
                            <li>機構類別：</li>
                          </Form.Label>
                        </span>
                        <span style={{ width: "75%" }}>
                          <Form.Select
                            placeholder="請選擇"
                            style={labelStyle}
                            value={charityCategory}
                            required
                            onChange={(e) => setCharityCategory(e.target.value)}
                          >
                            <option value="">請選擇</option>
                            <option value="偏鄉教育">偏鄉教育</option>
                            <option value="老人關懷">老人關懷</option>
                            <option value="動物關懷">動物關懷</option>
                          </Form.Select>
                        </span>
                      </InputGroup>
                      <Form.Label
                        htmlFor="basic-url"
                        style={{ marginTop: "12px", lineHeight: "40px" }}
                      >
                        <li>機構宗旨：</li>
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          style={textareaStyle}
                          as="textarea"
                          placeholder="請輸入文字"
                          value={charityConcept}
                          onChange={(e) => setCharityConcept(e.target.value)}
                        />
                      </InputGroup>
                      <Form.Label
                        htmlFor="basic-url"
                        style={{ marginTop: "12px", lineHeight: "40px" }}
                      >
                        <li>機構簡介：</li>
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          style={textareaStyle}
                          as="textarea"
                          placeholder="請輸入文字"
                          value={charityIntro}
                          onChange={(e) => setCharityIntro(e.target.value)}
                        />
                      </InputGroup>
                      <br></br>
                    </ol>
                  </div>
                </div>

                {/* <Button type='submit' style={changeBtn}>Submit</Button> */}

                <div>
                  {/* <ButtonLink to="/charityInfoSuccess" name="確定上傳" /> */}
                  <input
                    style={changeBtn}
                    type="submit"
                    onClick={handleUpdate}
                    value="確定上傳"
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}

export default CharityInfo;
