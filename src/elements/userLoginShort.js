import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserLoginShort() {
  const loginLevel1Style = {
    fontWeight: "bold",
    backgroundColor: "#002B5B",
    color: "white",
    width: "50px",
    textAlign: "left",
    height: "50px",
    lineHeight: "35px",
    borderRadius: "100px 0 0 100px",
    top: "60%",
    right: "0%",
    paddingLeft: "20px",
    position: "absolute",
    border: "none",
  };
  return (
    <div>
      <Button
        as={Link}
        to="/signIn"
        style={loginLevel1Style}
        variant="primary"
        type="button"
      >
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <FontAwesomeIcon icon={faUser} />
      </Button>
    </div>
  );
}

export default UserLoginShort;
