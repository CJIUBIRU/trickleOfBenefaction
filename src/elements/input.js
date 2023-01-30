import React from "react";
import Form from "react-bootstrap/Form";

function Input(props) {
  const inputStyle = {
    marginBottom: "20px",
    border: "1.5px solid #90AACB",
  };
  return (
    <div>
      <Form.Control
        style={inputStyle}
        // type={this.props.type}
        // placeholder={this.props.placeholder}
      />
    </div>
  );
}

export default Input;
