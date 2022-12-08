import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Navbar from "../elements/navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import TitleSec from "../elements/titleSec";
import ButtonLink from "../elements/button";
import TitleStep from "../elements/titleStep";
import Button from "react-bootstrap/Button";

import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../utils/firebase";

import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function ApplicationUpload() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [registerAddress, setRegisterAddress] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [mail, setMail] = useState("");
  const [authority, setAuthority] = useState("");
  const [demandPurpose, setDemandPurpose] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "charity"), {
        file: {
          time: Timestamp.now(),
          doc: {
            application: "機構申請書",
            certificate: "法人登記書",
            permit: "政府勸募許可函",
            affidavit: "切結書",
          },
          img: {
            logo: "logo",
            photo: "photo",
          },
        },
        info: {
          name: name,
          mail: mail,
          status: "待審核",
          fundraisingNo: "勸募許可文號",
          tel: "機構聯絡電話",
          registAddress: registerAddress,
          contactAddress: contactAddress,
          manager: {
            name: managerName,
            phone: managerPhone,
          },
          details: {
            category: "機構類別",
            concept: "機構宗旨",
            intro: "機構簡介",
            authority: authority,
            demandPurpose: demandPurpose,
          },
        },
        UniqueId: uuidv4(),
      });
      navigate("/applicationUpload2");
    } catch (err) {
      alert(err);
    }
  };

  const cardStyle = {
    width: "75%",
    color: "black",
    left: "50%",
    marginTop: "100px",
    transform: `translate(${-50}%, ${-5}%)`,
    paddingTop: "5%",
    paddingBottom: "6%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };
  const pageStyle = {
    position: "absolute",
    marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
  };
  const h4Style = {
    fontWeight: "bold",
    lineHeight: "80px",
  };
  const pStyle = {
    lineHeight: "40px",
  };
  const nameStyle = {
    lineHeight: "40px",
    marginRight: "10px",
  };
  const labelStyle = {
    height: "40px",
    borderRadius: "5px",
  };
  const inputStyle = {
    marginLeft: "5%",
    marginRight: "5%",
  };
  return (
    <div>
    {user && <Navbar />}
    {!user && <NavbarHome />}
      <TitleSec name="公益團體申請資料填寫及上傳" />
      <TitleStep name="STEP1&nbsp;-&nbsp;上傳公益團體基本資料" />
      <Card style={cardStyle}>
        <Card.Body>
          <form onSubmit={handleSubmit} name="addTask">
            <h4 style={h4Style}>一、公益團體基本資料</h4>
            <ol
              style={{
                paddingLeft: "50px",
                fontWeight: "520",
                marginTop: "8px",
              }}
              type="a"
            >
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      募捐需求物資團體全銜：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      登記地址：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setRegisterAddress(e.target.value);
                    }}
                    value={registerAddress}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      聯絡地址：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setContactAddress(e.target.value);
                    }}
                    value={contactAddress}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      負責人姓名：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setManagerName(e.target.value);
                    }}
                    value={managerName}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      負責人連絡電話：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setManagerPhone(e.target.value);
                    }}
                    value={managerPhone}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      電子信箱：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                    value={mail}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      現行主管機關：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setAuthority(e.target.value);
                    }}
                    value={authority}
                    placeholder="請輸入文字"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      募捐需求物資目的：&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    type="textarea"
                    placeholder="請輸入文字"
                    onChange={(e) => {
                      setDemandPurpose(e.target.value);
                    }}
                    value={demandPurpose}
                    style={{ height: "100px" }}
                  />
                </span>
              </InputGroup>
              {/* <FormControl label="募捐需求物資團體全銜" type="text" onChange={(e) => { setCharityName(e.target.value) }} value={charityName} />

                            <FormControl label="登記地址" type="text" onChange={(e) => { setCharityAddress(e.target.value) }} value={charityAddress} /> */}
              {/* <InputInfo label="聯絡地址" type="text" />
                                <InputInfo label="負責人姓名" />
                                <InputInfo label="負責人聯絡電話" />
                                <InputInfo label="機構電子信箱" />
                                <InputInfo label="現行主管機關" /> */}
            </ol>

            <div style={pageStyle}>
              {/* <button >確定上傳</button> */}
              <Button
                style={{
                  color: "#ffffff",
                  backgroundColor: "#002B5B",
                  borderRadius: "30px",
                  fontSize: "16px",
                  width: "120px",
                  textAlign: "center",
                  height: "35px",
                  fontWeight: "bold",
                  border: "none"
                }}
                type="submit"
              >
                確定上傳
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApplicationUpload;
