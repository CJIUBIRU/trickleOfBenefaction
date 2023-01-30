import React from "react";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReturnHome() {
  const homeBtnStyle = {
    fontWeight: "bold",
    backgroundColor: "#002B5B",
    color: "white",
    width: "110px",
    textAlign: "left",
    height: "50px",
    lineHeight: "35px",
    borderRadius: "100px 0px 0px 100px",
    top: "90%",
    right: "0%",
    paddingLeft: "20px",
    position: "absolute",
    border: "none",
  };
  return (
    <div>
      <Button
        as={Link}
        to="/"
        style={homeBtnStyle}
        variant="primary"
        type="button"
      >
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <FontAwesomeIcon icon={faArrowRotateLeft} />
        &nbsp;&nbsp;回首頁
      </Button>
    </div>
  );
}

export default ReturnHome;
