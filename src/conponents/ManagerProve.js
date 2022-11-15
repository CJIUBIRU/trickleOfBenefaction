import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";


function ManagerProve() {

  const cardStyle = {
    width: "75%",
    color: "black",
    left: "50%",
    marginTop: "60px",
    transform: `translate(${-50}%, ${-5}%)`,
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",

  };



  const prove = {
    backgroundColor: "#FFD2D2",
    display: "inline-block",
    fontSize: "12px",
    padding: "3px",
    letterSpacing: "1px",
    fontWeight: "550",
    borderRadius: "5px"
  }
  const pass = {
    backgroundColor: "#DFFFDF",
    display: "inline-block",
    fontSize: "12px",
    padding: "3px",
    letterSpacing: "1px",
    fontWeight: "550",
    borderRadius: "5px"
  }
  const check = {
    backgroundColor: "#FFF4C1",
    display: "inline-block",
    fontSize: "12px",
    padding: "3px",
    letterSpacing: "1px",
    fontWeight: "550",
    borderRadius: "5px"
  }
  const iconStyle = {
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "6px",
    paddingRight: "6px",
    fontSize: "13px"
  }
  return (
    <div>
      <Navbar />
      <TitleSec name="公益單位申請-資料審核" />

      <Card style={cardStyle}>
        <Card.Body>
          <Table striped bordered hover style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>機構名稱</th>
                <th>上傳日期</th>
                <th>審核狀態</th>
                <th>其他</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>財團法人董氏基金會</td>
                <td>2022/09/20</td>
                <td><p style={prove}>待審核</p></td>
                <td><Button as={Link} to="/managerProveData" style={iconStyle} variant="success"><FontAwesomeIcon icon={faEye} /></Button>&nbsp;
                  <Button as={Link} to="/managerProveMail" style={iconStyle} variant="primary"><FontAwesomeIcon icon={faEnvelope} /></Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>財團法人瑞信兒童醫療基金會</td>
                <td>2022/09/25</td>
                <td><p style={pass}>已啟用</p></td>
                <td><Button as={Link} to="/managerProveData" style={iconStyle} variant="success"><FontAwesomeIcon icon={faEye} /></Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>社團法人台灣怡心寶貝社群協會</td>
                <td>2022/09/30</td>
                <td><p style={check}>待啟用</p></td>
                <td><Button as={Link} to="/managerProveData" style={iconStyle} variant="success"><FontAwesomeIcon icon={faEye} /></Button></td>
              </tr>
            </tbody>
          </Table>

        </Card.Body>
      </Card>
    </div>
  )
}

export default ManagerProve;