import React, { Component } from "react";
import line from "../img/LINE_logo.svg.webp";
import Button from "react-bootstrap/Button";

function LineLogin() {
  const mulLoginBtnLineStyle = {
    width: "200px",
    textAlign: "center",
    backgroundColor: "#00c300",
    border: "none",
    height: "35px",
    paddingBottom: "35px",
    fontSize: "16px",
    marginBottom: "10px",
    color: "#ffffff",
  };
  const mulLogoLineStyle = {
    height: "27px",
    width: "27px",
    marginRight: "10px",
    marginBottom: "3px",
  };
  return (
    <div>
      <Button style={mulLoginBtnLineStyle} variant="primary" type="submit">
        <img style={mulLogoLineStyle} src={line} alt="fbIcon"></img>
        Line登入
      </Button>
    </div>
  );
}

export default LineLogin;
