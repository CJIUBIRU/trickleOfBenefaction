import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserLogin() {
  const loginLevel1Style = {
    fontWeight: "bold",
    backgroundColor: "#002B5B",
    color: "white",
    width: "140px",
    textAlign: "left",
    height: "50px",
    lineHeight: "35px",
    borderRadius: "100px 0px 0px 100px",
    top: "60%",
    right: "0%",
    paddingLeft: "20px",
    position: "absolute",
    border: "none",
    zIndex: "1",
  };
  return (
    <div>
      <Button style={loginLevel1Style} variant="primary" type="button">
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <FontAwesomeIcon icon={faUser} />
        &nbsp;&nbsp;捐贈者入口
      </Button>
    </div>
  );
}

export default UserLogin;
