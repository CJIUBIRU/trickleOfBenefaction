import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function CharityProveList({ id, num, name, time, status, mail }) {
  // ManagerProveMail
  const mailProve = (item) => {
    localStorage.setItem("proveOrg", JSON.stringify(item));
  };

  // ManagerProveData
  const proveData = (item) => {
    localStorage.setItem("orgData", JSON.stringify(item));
  };

  const prove = {
    backgroundColor: "#26aa99",
    display: "inline-block",
    fontSize: "12px",
    padding: "3px",
    letterSpacing: "1px",
    fontWeight: "550",
    borderRadius: "5px",
    color: "white",
  };
  const prove2 = {
    backgroundColor: "#f6c23e",
    display: "inline-block",
    fontSize: "12px",
    padding: "3px",
    letterSpacing: "1px",
    fontWeight: "550",
    borderRadius: "5px",
  };
  const prove3 = {
    backgroundColor: "#e74a3b",
    display: "inline-block",
    fontSize: "12px",
    padding: "3px",
    letterSpacing: "1px",
    fontWeight: "550",
    borderRadius: "5px",
    color: "white",
  };
  const iconStyle = {
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "6px",
    paddingRight: "6px",
    fontSize: "13px",
  };

  return (
    <tr>
      <td>{num}</td>
      <td>{name}</td>
      <td>{time}</td>
      {status === "已啟用" && (
        <td>
          <p style={prove}>{status}</p>
        </td>
      )}
      {status === "待啟用" && (
        <td>
          <p style={prove2}>{status}</p>
        </td>
      )}
      {status === "待審核" && (
        <td>
          <p style={prove3}>{status}</p>
        </td>
      )}
      <td>
        <Button
          as={Link}
          to="/managerProveData"
          onClick={(e) => proveData({ name: name })}
          style={iconStyle}
          variant="success"
        >
          <FontAwesomeIcon icon={faEye} />
        </Button>
        &nbsp;
        {status === "待審核" ? (
          <Button
            as={Link}
            onClick={(e) => mailProve({ name: name, mail: mail, id: id })}
            to="/managerProveMail"
            style={iconStyle}
            variant="primary"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}

function ManagerProve() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "charity"), orderBy("file.time", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const cardStyle = {
    width: "75%",
    color: "black",
    left: "50%",
    marginTop: "60px",
    transform: `translate(${-50}%, ${-5}%)`,
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };

  return (
    <div>
      <Navbar />
      <TitleSec name="機構申請資料審核" />
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
              {details.map((item, index) => (
                <CharityProveList
                  key={index}
                  id={item.id}
                  num={index + 1}
                  name={item.data.info.name}
                  status={item.data.info.status}
                  mail={item.data.info.mail}
                  time={new Date(
                    item.data.file.time.seconds * 1000
                  ).toLocaleDateString("zh-TW")}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ManagerProve;
