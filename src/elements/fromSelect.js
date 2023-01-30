import React from "react";
import Form from "react-bootstrap/Form";

function FromSelect() {
  const selectStyle = {};
  return (
    <div>
      <Form.Select style={selectStyle} aria-label="Default select example">
        <option>請選擇類別</option>
        <option value="1">生活用品類</option>
        <option value="2">食品類</option>
        <option value="3">嬰幼兒用品類</option>
        <option value="4">醫療用品類</option>
        <option value="5">運動用品類</option>
        <option value="6">寵物用品類</option>
        <option value="7">文具用品類</option>
        <option value="8">其他</option>
      </Form.Select>
    </div>
  );
}

export default FromSelect;
