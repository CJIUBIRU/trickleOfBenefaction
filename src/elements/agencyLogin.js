import React from "react";
import { faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

function AgencyLogin() {
  const loginLevel2Style = {
    fontWeight: "bold",
    backgroundColor: "#002B5B",
    color: "white",
    width: "160px",
    textAlign: "left",
    height: "50px",
    lineHeight: "35px",
    borderRadius: "100px 0 0 100px",
    top: "70%",
    right: "0%",
    position: "absolute",
    paddingLeft: "17px",
    border: "none",
    zIndex: "1",
  };
  return (
    <div>
      <Button style={loginLevel2Style} variant="primary" type="button">
        {/* <p>公益單位入口</p> */}
        <FontAwesomeIcon icon={faUsersRectangle} />
        &nbsp;&nbsp;公益單位入口
      </Button>
    </div>
  );
}

export default AgencyLogin;
