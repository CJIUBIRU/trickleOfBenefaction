import React from "react";

function TitleSec(props) {
  const titleStyle = {
    backgroundColor: "#90aacb",
    color: "#ffffff",
    width: "100%",
    textAlign: "center",
    height: "100px",
    lineHeight: "100px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "1px",
    marginTop: "70px",
  };
  return (
    <div>
      <h2 style={titleStyle}> {props.name} </h2>
    </div>
  );
}

export default TitleSec;
