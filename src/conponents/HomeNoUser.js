//打rcc+ENTER
import React from "react";
import "../navLink.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Product from "../elements/product";
import HomeImg from "../img/home.jpg";

function NavbarComp() {
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
  const titleSec = {
    color: "#002B5B",
    fontWeight: "bold",
  };
  const titleBlockStyle = {
    height: "70px",
  };
  return (
    <div>
      {/* <h1 style={{textAlign: "center", marginTop: "350px"}}>首頁</h1> */}
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

        <div style={{ backgroundColor: "#D7E9F7" }}>
          <Container>
            <div
              style={{
                margin: "40px 0px 0px 0px",
                padding: "20px 0px 30px 0px",
              }}
            >
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
          </Container>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <Container>
            <div style={{ padding: "20px 0px 30px 0px" }}>
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
          </Container>
        </div>

        {/* <Container>
          <div style={{margin: "40px 0px 40px 0px"}}>
            <h5 style={titleSec}>聯絡我們</h5>
            <div style={titleSecContnet}>
              <div style={titleSecInfo}>基本資訊</div>
            </div>
          </div>
        </Container> */}

        <footer
          style={{
            backgroundColor: "#90AACB",
            height: "300px",
            textAlign: "center",
            lineHeight: "300px",
          }}
        >
          聯絡我們
        </footer>
      </div>
    </div>
  );
}

export default NavbarComp;
