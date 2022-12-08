import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";
import SuccessInfo from "../elements/successInfo";

import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function PointsItemSuccess() {
  const [user] = useAuthState(auth);

  const cardStyle = {
    width: "50%",
    color: "black",
    left: "50%",
    marginTop: "200px",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "3%",
    paddingBottom: "6%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };

  const btnStyle = {
    position: "absolute",
    marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",

    letterSpacing: "1px",
  };
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="商品兌換成功" />
      <Card style={cardStyle}>
        <Card.Body>
          <SuccessInfo
            name="商品兌換成功！"
            name2="您的剩餘點數為：200點，感謝您對本平台的支持。"
          />
          <div style={btnStyle}>
            <ButtonLink to="/" name="確定" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PointsItemSuccess;
