import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";

function AdminLogin() {
  const loginLevel3Style = {
    fontWeight: "bold",
    backgroundColor: "#002B5B",
    color: "white",
    width: "145px",
    textAlign: "left",
    height: "50px",
    lineHeight: "35px",
    borderRadius: "100px 0 0 100px",
    top: "80%",
    right: "0%",
    position: "absolute",
    paddingLeft: "19px",
    border: "none",
    zIndex: "1",
  };
  return (
    <div>
      <Button style={loginLevel3Style} variant="primary" type="button">
        {/* <p>管理員入口</p> */}
        <FontAwesomeIcon icon={faUserGear} />
        &nbsp;&nbsp;管理員入口
      </Button>
    </div>
  );
}

export default AdminLogin;
