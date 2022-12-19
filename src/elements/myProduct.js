import React, { useState, useEffect } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import img from "../img/tablet.jpg";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  limit,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Task({
  availability,
  charity,
  description,
  name,
  photo,
  quantity,
  received,
  state,
  store,
  uid,
  id,
}) {
  const [user] = useAuthState(auth);

  const card = {
    marginBottom: "20px",
    marginLeft: "15%",
    padding: "30px 40px 30px 40px",
    color: "#002B5B",
    width: "70%",
    display: "flex",
    flexDirection: "row",
  };
  const contentStyle = {
    textAlign: "left",
    marginLeft: "30px",
    letterSpacing: "2px",
  };
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
    height: "200px",
  };
  const editIconStyle = {
    backgroundColor: "#f6c23e",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "17px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    border: "none",
    marginBottom: "5px",
    lineHeight: "35px",
  };
  const trashIconStyle = {
    backgroundColor: "#e74a3b",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "17px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    lineHeight: "38px",
    border: "none",
  };
  const btnpageStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "13%",
  };
  const uploadMyDemand = (item) => {
    localStorage.setItem("good", JSON.stringify(item));
  };

  const handleDelete = async (id) => {
    const taskDocRef = doc(db, "demand", id);
    try {
      await deleteDoc(taskDocRef);
      alert("已下架需求。")
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      {user.uid === uid && (
        <Card style={card}>
          <Card.Img
            style={goodsImgStyle}
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
          />
          <Card.Body style={contentStyle}>
            <Card.Title>
              物資名稱：<b>{name}</b>
            </Card.Title>
            <hr></hr>
            <Card.Text style={{ color: "#6C6C6C" }}>
              需求機構：{charity}
              <br />
              需求數量：{quantity}
              <br />
              需求說明：{description}
              <br />
              物資提供商家：
              {/* <a style={demandHrefStyle} href="#"> */}
              {store}
              {/* </a> */}
              <br />
              目前可領取／已領取數量：{availability}／{received}
              {/* <br /> */}
              {/* 目前數量：{received} */}
            </Card.Text>
          </Card.Body>
          <div style={btnpageStyle}>
            <Nav.Link
              style={editIconStyle}
              as={Link}
              to="/updateMyDemand"
              onClick={(e) =>
                uploadMyDemand({
                  id: id,
                  quantity: quantity,
                  description: description,
                  availability: availability,
                  charity: charity,
                  name: name,
                  photo: photo,
                  received: received,
                  state: state,
                  store: store,
                  uid: uid,
                })
              }
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Nav.Link>
            <Nav.Link style={trashIconStyle} onClick={() => handleDelete(id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Nav.Link>
          </div>
        </Card>
      )}
    </div>
  );
}

function MyProduct() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "demand"));
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div>
      {details.map((item) => (
        <Task
          id={item.id}
          key={item.id}
          availability={item.data.availability}
          charity={item.data.charity}
          description={item.data.description}
          name={item.data.name}
          photo={item.data.photo}
          quantity={item.data.quantity}
          received={item.data.received}
          state={item.data.state}
          store={item.data.store}
          uid={item.data.uid}
        />
      ))}
    </div>
  );
}

export default MyProduct;
