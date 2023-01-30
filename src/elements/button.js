import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Button(props) {
  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    lineHeight: "33px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };
  return (
    <div>
      <Nav.Link as={Link} to={props.to} style={stepBtnStyle}>
        {props.name}
      </Nav.Link>
    </div>
  );
}

export default Button;
