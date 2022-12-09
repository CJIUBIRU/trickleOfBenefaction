//打rcc+ENTER
import React, { Component } from "react";
import "../navLink.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Product from "../elements/product";
import Navbar from "../elements/navbar";
import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function NavbarComp() {
  const [user] = useAuthState(auth);
  const bodyStyle = {
    backgroundColor: "#ffffff",
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settingsSec = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  const report1 = {
    height: "300px",
    textAlign: "center",
    lineHeight: "280px",
    backgroundColor: "#FEF1E6",
  };
  const report2 = {
    height: "300px",
    textAlign: "center",
    lineHeight: "280px",
    backgroundColor: "#FEF1E6",
    fontSize: "18px",
    margin: "5px",
  };
  const titleSecPage = {
    margin: "40px 0px 30px 0px", //上右下左
  };
  const titleSec = {
    color: "#002B5B",
    fontWeight: "bold",
  };
  const titleSecContnet = {
    paddingTop: "5px",
  };
  const titleSecInfo = {
    width: "100%",
    height: "250px",
    backgroundColor: "#FEF1E6",
    textAlign: "center",
    lineHeight: "230px",
    fontWeight: "bold",
  };
  const titleBlockStyle = {
    height: "70px",
  };
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <h1 style={{textAlign: "center", marginTop: "350px"}}>首頁</h1>
      {/* <Container>
        <div style={bodyStyle}>
          <div style={titleBlockStyle}></div>
          <div>
            <Slider {...settings}>
              <div>
                <h4 style={report1}>推播1</h4>
              </div>
              <div>
                <h4 style={report1}>推播2</h4>
              </div>
              <div>
                <h4 style={report1}>推播3</h4>
              </div>
              <div>
                <h4 style={report1}>推播4</h4>
              </div>
              <div>
                <h4 style={report1}>推播5</h4>
              </div>
              <div>
                <h4 style={report1}>推播6</h4>
              </div>
            </Slider>
          </div>

          <div style={titleSecPage}>
            <h5 style={titleSec}>最新消息</h5>
            <Slider {...settingsSec}>
              <div>
                <h4 style={report2}>消息1</h4>
              </div>
              <div>
                <h4 style={report2}>消息2</h4>
              </div>
              <div>
                <h4 style={report2}>消息3</h4>
              </div>
              <div>
                <h4 style={report2}>消息4</h4>
              </div>
              <div>
                <h4 style={report2}>消息5</h4>
              </div>
              <div>
                <h4 style={report2}>消息6</h4>
              </div>
            </Slider>
          </div>

          <div style={titleSecPage}>
            <h5 style={titleSec}>機構需求物資</h5>
            <Slider {...settingsSec}>
              <div>
                <Product />
              </div>
              <div>
                <Product />
              </div>
              <div>
                <Product />
              </div>
              <div>
                <Product />
              </div>
              <div>
                <Product />
              </div>
              <div>
                <Product />
              </div>
            </Slider>
          </div>

          <div style={titleSecPage}>
            <h5 style={titleSec}>聯絡我們</h5>
            <div style={titleSecContnet}>
              <div style={titleSecInfo}>基本資訊</div>
            </div>
          </div>
        </div>
      </Container> */}
    </div>
  );
}

export default NavbarComp;
