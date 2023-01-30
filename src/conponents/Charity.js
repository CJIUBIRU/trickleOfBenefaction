import React, { useState, useEffect } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Navbar from "../elements/navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import TagType from "../elements/tagType";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../utils/firebase";

import TitleSec from "../elements/titleSec";
// import CharityCard from '../elements/charityCard';

import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function CharityCard({ id, category, name, mail, tel, logo }) {
  // CharityDetail
  const charityDetailData = (item) => {
    localStorage.setItem("CharityDetail", JSON.stringify(item));
  };

  const cardStyle = {
    width: "280px",
    height: "500px",
  };

  const btnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    border: "none",
  };
  const imgStyle = {
    width: "150px",
    height: "120px",
    margin: "30px",
    borderRadius: "10px",
  };
  const nameStyle = {
    fontWeight: "bold",
    color: "#002B5B",
    textAlign: "center",
    paddingBottom: "10px",
  };
  const dataStyle = {
    textAlign: "center",
    left: "50%",
  };

  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      <Card style={cardStyle}>
        <div style={{ textAlign: "center" }}>
          <Card.Img style={imgStyle} variant="top" src={logo} />
        </div>

        <Card.Body>
          <TagType name={category} />
          <div style={{ height: "160px" }}>
            <Card.Title style={nameStyle}>{name}</Card.Title>
            <Card.Text style={dataStyle}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />：{mail}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />：{tel}
              </p>
            </Card.Text>
          </div>
          <div style={{ marginBottom: "0px", paddingBottom: "0px" }}>
            <div style={{ marginLeft: "65px" }}>
              <Button
                style={btnStyle}
                as={Link}
                to="/charityDetail"
                onClick={(e) => charityDetailData({ name: name })}
                variant="primary"
                name="了解更多"
              >
                了解更多
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

function Charity() {
  const [user] = useAuthState(auth);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "charity"),
      where("info.status", "==", "已啟用")
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
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="合作機構一覽表" />
      <Container>
        {/* , display: "flex", flexDirection: "row" */}
        <div style={{ padding: "30px", textSpacing: "1px" }}>
          <div>
            {details.map((item, index) => (
              <CharityCard
                key={index}
                id={item.id}
                name={item.data.info.name}
                category={item.data.info.details.category}
                mail={item.data.info.mail}
                tel={item.data.info.tel}
                logo={item.data.file.img.logo}
                // fundraisingNo={item.data.info.fundraisingNo}
                // intro={item.data.info.details.intro}
                // demandPurpose={item.data.info.details.demandPurpose}
                // concept={item.data.info.details.concept}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Charity;
