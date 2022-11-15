import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import ProcessList from "./ProcessList";
import Navbar from "../elements/navbar";

class UploadDemand extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TitleSec name="捐贈進度追蹤"/>
        <Container>
          <div>
            <ProcessList />
          </div>
        </Container>
      </div>
    );
  }
}

export default UploadDemand;
