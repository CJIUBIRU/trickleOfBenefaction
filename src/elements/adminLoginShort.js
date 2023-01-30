import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AdminLoginShort() {
  const loginLevel3Style = {
    fontWeight: "bold",
    backgroundColor: "#002B5B",
    color: "white",
    width: "50px",
    textAlign: "left",
    height: "50px",
    lineHeight: "35px",
    borderRadius: "100px 0 0 100px",
    top: "80%",
    right: "0%",
    position: "absolute",
    paddingLeft: "19px",
    border: "none",
  };
  return (
    <div>
      <Button
        as={Link}
        to="/loginAdmin"
        style={loginLevel3Style}
        variant="primary"
        type="button"
      >
        {/* <p>管理員入口</p> */}
        <FontAwesomeIcon icon={faUserGear} />
      </Button>
    </div>
  );
}

export default AdminLoginShort;
