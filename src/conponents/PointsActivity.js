import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Navbar from "../elements/navbar";

import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";

import NavbarHome from "../elements/navbarHome";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function PointsActivity() {
  const [user] = useAuthState(auth);
  const cardStyle = {
    width: "75%",
    color: "black",
    left: "50%",
    marginTop: "100px",
    transform: `translate(${-50}%, ${-10}%)`,
    // // paddingTop: "5%",
    // paddingBottom: "6%",
    // paddingLeft: "8%",
    // paddingRight: "8%",
    letterSpacing: "1px",
  };
  const h2Style = {
    fontWeight: "bold",
  };
  const moreStyle = {
    textAlign: "right",
    paddingRight: "50px",
    // color: "#90AACB",
    fontWeight: "580",
    cursor: "pointer",
  };

  // const btnStyle = {
  //     position: "absolute",
  //     marginTop: "30px",
  //     left: "50%",
  //     transform: `translate(${-50}%, ${-50}%)`,
  //     paddingTop: "5px",
  //     paddingBottom: "5px",
  //     paddingLeft: "15px",
  //     paddingRight: "15px",
  //     borderRadius: "10px",
  //     border: "none",
  //     backgroundColor: "#002B5B",
  //     color: "#FFFFFF",
  //     letterSpacing: "1px",
  // }
  // const h4Style = {
  //     fontWeight: "bold",
  //     lineHeight: "70px",
  // }
  // const pStyle = {
  //     lineHeight: "40px",
  // }
  // const h5Style = {
  //     fontWeight: "550",
  //     lineHeight: "40px"
  // }
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="點數兌換區" />
      <TitleStep name="期間限定活動" />

      <Card style={cardStyle}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

        <Card.Body>
          <div
            style={{
              backgroundColor: "#FFEEDD",
              width: "100%",
              height: "450px",
              marginBottom: "10px",
            }}
          >
            廣告圖
          </div>
          <h2 style={h2Style}>輔大小農市集</h2>
          <Card.Text style={{ fontWeight: "bold" }}>
            活動日期：2022.10.12～2022.09.31
          </Card.Text>
          <Card.Text style={moreStyle}>
            <Link to="/pointsItem" style={{ color: "#90AACB" }}>
              查看兌換商品&nbsp;
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

        <Card.Body>
          <div
            style={{
              backgroundColor: "#FFEEDD",
              width: "100%",
              height: "450px",
              marginBottom: "10px",
            }}
          >
            廣告圖
          </div>
          <h2 style={h2Style}>輔大愛狗社文創商品</h2>
          <Card.Text style={{ fontWeight: "bold" }}>
            活動日期：2022.10.12～2022.09.31
          </Card.Text>
          <Card.Text style={moreStyle}>
            <Link to="/pointsItem" style={{ color: "#90AACB" }}>
              查看兌換商品&nbsp;
              <FontAwesomeIcon icon={faRightLong} />
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PointsActivity;
