import React, { useState ,useEffect } from "react";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import Card from "react-bootstrap/Card";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import { collection, query, onSnapshot, deleteDoc, doc} from "firebase/firestore"
import { db } from "../utils/firebase";
import { Link } from 'react-router-dom';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function Stores({id, name, phone, address, num}) {
  const uploadStoreData = (item) => {
    localStorage.setItem('store',JSON.stringify(item));
  }
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
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'stores', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
        alert(err)
    }
  }

  return (
    <>
      <tr>
        <td>{num}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>
            <Button
              style={editIconStyle}
              variant="primary"
              as={Link}
              to="/updateStores"
              onClick={e => uploadStoreData({"id": id, "name": name, "address": address, "phone": phone})}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Button style={trashIconStyle} variant="primary" type="submit" onClick={() => handleDelete(id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
        </td>
      </tr>
    </>
  );
}

function UploadGoods() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }
  const [details, setDetails] = useState([]);
  const cardStyle = {
    width: "100%",
    color: "black",
    left: "50%",
    marginTop: "35px",
    transform: `translate(${-50}%, ${-5}%)`,
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };

  useEffect(() => {
      const q = query(collection(db, 'stores'))
      onSnapshot(q, (querySnapshot) => {
          setDetails(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
      })
  },[])

  return (
    <div>
      <Navbar />
      <TitleSec name="合作店家一覽表" />
      <br />
      <Container>
        <Card style={cardStyle}>
          <Card.Body>
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>店家名稱</th>
                  <th>店家地址</th>
                  <th>店家電話</th>
                  <th>修改／刪除</th>
                </tr>
              </thead>
              <tbody>
                {details.map((item, index) => (
                  <Stores
                    key={index} 
                    id={item.id}
                    name={item.data.name}
                    phone={item.data.phone}
                    address={item.data.address}
                    num={index+1}
                  />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default UploadGoods;
