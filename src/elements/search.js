import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";

function Title() {
  const inputStyle = {};
  return (
    <div>
      <InputGroup style={inputStyle} className="mb-3">
        <Form.Control
          placeholder="請輸入關鍵字"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default Title;
