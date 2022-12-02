//打rcc+ENTER
import React, { Component } from "react";
import "../navLink.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Product from "../elements/product";
import NavbarDemand from "../elements/navbarDemand";

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
        <NavbarDemand />
        <Container>
          
        </Container>
      </div>
    );
  }

export default NavbarComp;
