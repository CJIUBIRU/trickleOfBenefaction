import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { doc, addDoc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

function Task({ id, content }) {
  const handleDelete = async (id) => {
    const taskDocRef = doc(db, "notesAdmin", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <Table bordered hover size="sm">
        <tbody>
          <tr>
            <td style={{ width: "90%", padding: "6px" }}>{content}</td>
            <td style={{ width: "10%", textAlign: "center" }}>
              <button
                onClick={() => handleDelete(id)}
                style={{
                  backgroundColor: "#e74a3a",
                  border: "none",
                  borderRadius: "100%",
                }}
              >
                <FontAwesomeIcon style={{ color: "white" }} icon={faTrashCan} />
              </button>
            </td>
            {/* <td style={{ width: "20%", padding: "6px" }}>{time}</td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
function News() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "notesAdmin"));
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const [content, setContent] = useState("");
  const navigate = useNavigate("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "notesAdmin"), {
        content: content,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setContent("");
  };
  return (
    <div>
      <Card style={{ borderLeft: "3.5px solid #808080" }}>
        <Card.Header style={{ color: "#808080", fontWeight: "bold" }}>
          備忘錄&nbsp;
          <FontAwesomeIcon icon={faPaperclip} />
        </Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            {details.map((item) => (
              <Task
                id={item.id}
                key={item.id}
                content={item.data.content}
                time={item.data.time}
              />
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <form
            onSubmit={handleSubmit}
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Form.Control
              style={{ width: "65%" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            &nbsp;&nbsp;&nbsp;
            <Button
              type="submit"
              style={{
                backgroundColor: "gray",
                border: "none",
                width: "35%",
                borderRadius: "20px",
              }}
            >
              <b>
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;新增一筆
              </b>
            </Button>
          </form>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default News;
