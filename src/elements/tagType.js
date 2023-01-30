import React from "react";

function tagType(props) {
  const tagStyle = {
    display: "absolute",
    marginLeft: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    textAlign: "center",
    backgroundColor: "#FFDCB9",
    width: "90px",
    letterSpacing: "1px",
    padding: "5px",
    fontSize: "13px",
    fontWeight: "600",
    borderRadius: "5px",
  };
  return (
    <div>
      <p style={tagStyle}>#{props.name}</p>
    </div>
  );
}

export default tagType;
