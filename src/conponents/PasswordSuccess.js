import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";
import SuccessInfo from "../elements/successInfo";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

import NavbarHome from "../elements/navbarHome";
import { useNavigate } from "react-router";

function PasswordSuccess() {
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
    marginTop: "50px",
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
      <TitleSec name="基本資料設定" />

      <Card style={cardStyle}>
        <Card.Body>
          <SuccessInfo
            name="密碼設定成功！"
            name2="若未來需更改密碼請至＜帳號管理＞設定。"
            name3=""
          />

          <div style={btnStyle}>
            <ButtonLink to="/charityInfo" name="下一步" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PasswordSuccess;
