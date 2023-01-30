import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import Navbar from "../elements/navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  doc,
  collection,
  query,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import Card from "react-bootstrap/Card";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import Button from "react-bootstrap/Button";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GoodsDetail({ id, name, price, store, pic }) {
  const cardStyle = {
    width: "280px",
    height: "450px",
  };
  const imgStyle = {
    width: "150px",
    height: "120px",
    margin: "30px",
    borderRadius: "10px",
  };
  const nameStyle = {
    fontWeight: "bold",
    color: "#002B5B",
    textAlign: "center",
    paddingBottom: "10px",
  };
  const dataStyle = {
    textAlign: "center",
    left: "50%",
  };
  const editIconStyle = {
    backgroundColor: "#f6c23e",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "16px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    border: "none",
    lineHeight: "25px",
  };
  const trashIconStyle = {
    backgroundColor: "#e74a3b",
    height: "40px",
    marginLeft: "10px",
    width: "40px",
    fontSize: "16px",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    border: "none",
  };
  const uploadGoodsData = (item) => {
    localStorage.setItem("good", JSON.stringify(item));
  };
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, "supply", id);
    try {
      alert("刪除成功");
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      <Card style={cardStyle}>
        <div style={{ textAlign: "center" }}>
          <Card.Img style={imgStyle} variant="top" src={pic} />
        </div>

        <Card.Body>
          <div style={{ height: "160px" }}>
            <Card.Title style={nameStyle}>{name}</Card.Title>
            <Card.Text style={dataStyle}>
              <p>
                <b>合作店家：</b>
                {store}
              </p>
              <p>
                <b>商品金額：</b>${price}
              </p>
            </Card.Text>
          </div>
          <div align="center">
            <Button
              style={editIconStyle}
              variant="primary"
              as={Link}
              to="/updateGoods"
              onClick={(e) =>
                uploadGoodsData({
                  id: id,
                  name: name,
                  price: price,
                  store: store,
                })
              }
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button
              style={trashIconStyle}
              variant="primary"
              type="submit"
              onClick={() => handleDelete(id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
function AllGoods() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");
  if (!user) {
    navigate("/signIn");
  }
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "supply"));
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
      <Navbar />
      <TitleSec name="物資一覽表" />
      <Container>
        {/* , display: "flex", flexDirection: "row" */}
        <div style={{ padding: "30px", textSpacing: "1px" }}>
          <div>
            {details.map((index) => (
              <GoodsDetail
                key={index}
                id={index.id}
                name={index.data.name}
                price={index.data.price}
                store={index.data.store}
                pic={index.data.pic}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllGoods;
