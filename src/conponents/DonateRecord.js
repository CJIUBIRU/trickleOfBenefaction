import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import RecordList from "./RecordList";
import Navbar from "../elements/navbar";

class UploadDemand extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TitleSec name="捐贈紀錄"/>
        <Container>
          <div>
            <RecordList />
          </div>
        </Container>
      </div>
    );
  }
}

export default UploadDemand;
