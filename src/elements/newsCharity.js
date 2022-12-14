import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import { collection, query, orderBy, onSnapshot, limit } from "firebase/firestore";
import { db } from "../utils/firebase";

function Task({ content, user, time }) {
  return (
    <div>
      <Table  bordered hover size="sm">
        <tbody>
          <tr>
            <td style={{ width: "60%", padding: "6px" }}>{content}</td>
            <td style={{ width: "15%", padding: "6px", color: "gray" }}>{user}</td>
            <td style={{ width: "25%", padding: "6px", textAlign: "center", color: "gray" }}>{time}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
function News() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "newsCharity"), orderBy("time", "desc"), limit("10"));
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
      {/* <Card style={{borderLeft: "3.5px solid #ffb085"}}> */}
      <Card style={{borderLeft: "3.5px solid #808080"}}>
        {/* <Card.Header style={{ color: "#ffb085", fontWeight: "bold", backgroundColor: "#fef1e6" }}> */}
        <Card.Header style={{ color: "#808080", fontWeight: "bold" }}>
          公告區&nbsp;
          <FontAwesomeIcon icon={faBullhorn} />
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
                user={item.data.user}
              />
            ))}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer></Card.Footer> */}
      </Card>
    </div>
  );
}

export default News;
