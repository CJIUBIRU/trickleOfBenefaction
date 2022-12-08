import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Navbar from "../elements/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";

import TitleSec from "../elements/titleSec";
import ButtonLink from "../elements/button";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../utils/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function OrgData({
  name,
  status,
  mail,
  demandPurpose,
  authority,
  managerName,
  managerPhone,
  registAdd,
  contactAdd,
  affidavit,
  permit,
  certificate,
}) {
  const btnStyle = {
    position: "absolute",
    marginTop: "40px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
  };
  const h4Style = {
    fontWeight: "bold",
    lineHeight: "100px",
  };
  const nameStyle = {
    lineHeight: "40px",
    marginRight: "10px",
    fontWeight: "bold",
  };
  const ansStyle = {
    height: "40px",
    lineHeight: "40px",
  };

  return (
    <Card.Body>
      <h4 style={h4Style}>一、公益團體基本資料</h4>
      <ol
        style={{ paddingLeft: "50px", fontWeight: "520", marginTop: "8px" }}
        type="a"
      >
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              募捐需求物資團體全銜：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{name}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              審核狀態：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{status}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              登記地址：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{registAdd}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              聯絡地址：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{contactAdd}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              負責人姓名：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{managerName}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              負責人聯絡電話：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{managerPhone}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              機構電子信箱：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{mail}</p>
        </InputGroup>
        <InputGroup className="mb-3">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              現行主管機關：&nbsp;
            </Form.Label>
          </li>
          <p style={ansStyle}>{authority}</p>
        </InputGroup>
        <InputGroup className="mb-6">
          <li>
            <Form.Label htmlFor="basic-url" style={nameStyle}>
              募捐需求物資目的：&nbsp;
            </Form.Label>
          </li>
          <p style={{ lineHeight: "40px" }}>{demandPurpose}</p>
        </InputGroup>
      </ol>

      <h4 style={h4Style}>二、審核資料</h4>
      <ol style={{ lineHeight: "45px", paddingLeft: "50px" }}>
        <li>
          <span style={{ color: "#90AACB", cursor: "pointer" }}>
            {certificate}&nbsp;
            <FontAwesomeIcon icon={faCloudDownload} />
          </span>
        </li>
        <li>
          <span style={{ color: "#90AACB", cursor: "pointer" }}>
            {affidavit}&nbsp;
            <FontAwesomeIcon icon={faCloudDownload} />
          </span>
        </li>
        <li>
          <span style={{ color: "#90AACB", cursor: "pointer" }}>
            {permit}&nbsp;
            <FontAwesomeIcon icon={faCloudDownload} />
          </span>
        </li>
      </ol>
      <div style={btnStyle}>
        <ButtonLink to="/managerProve" name="返回" />
      </div>
    </Card.Body>
  );
}

function ManagerProveData() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }
  const [details, setDetails] = useState([]);

  useEffect(() => {
    let org = JSON.parse(localStorage.getItem("orgData"));
    const q = query(
      collection(db, "charity"),
      where("info.name", "==", org.name)
    );
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

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

  return (
    <div>
      <Navbar />
      <TitleSec name="公益單位申請-資料內容" />
      <Card style={cardStyle}>
        {details.map((item, index) => (
          <OrgData
            key={index}
            id={item.id}
            name={item.data.info.name}
            status={item.data.info.status}
            mail={item.data.info.mail}
            demandPurpose={item.data.info.details.demandPurpose}
            authority={item.data.info.details.authority}
            managerName={item.data.info.manager.name}
            managerPhone={item.data.info.manager.phone}
            registAdd={item.data.info.registAddress}
            contactAdd={item.data.info.contactAddress}
            affidavit={item.data.file.doc.affidavit}
            permit={item.data.file.doc.permit}
            certificate={item.data.file.doc.certificate}
          />
        ))}
      </Card>
    </div>
  );
}

export default ManagerProveData;
