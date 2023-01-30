import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Navbar from "../elements/navbar";
import { useLocation } from "react-router";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";

//檔案上傳
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { useState } from "react";
import { storage } from "../utils/firebase";
import { db } from "../utils/firebase";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { doc, updateDoc } from "firebase/firestore";
import ProgressBar from "react-bootstrap/ProgressBar";
import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

function ApplicationUpload3() {
  const location = useLocation();
  const [urlID3, setUrlID3] = useState("");
  const { fromID, fromURL2 } = location.state;
  console.log("fromID: " + fromID);
  console.log("fromURL2: " + fromURL2);
  console.log("urlID3: " + urlID3);
  const [user] = useAuthState(auth);
  const taskDocRef = doc(db, "charity", fromID);
  const cardStyle = {
    width: "75%",
    color: "black",
    left: "50%",
    marginTop: "150px",
    transform: `translate(${-50}%, ${-20}%)`,
    paddingTop: "1%",
    paddingLeft: "5%",
    paddingRight: "5%",
    letterSpacing: "1px",
  };

  const btnStyle = {
    position: "absolute",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
  };
  const h4Style = {
    fontWeight: "bold",
    lineHeight: "80px",
  };
  const pStyle = {
    lineHeight: "25px",
  };

  const inputStyle = {
    marginLeft: "5%",
    marginRight: "5%",
  };
  const uploadBtn = {
    color: "#ffffff",
    backgroundColor: "#90AACB",
    borderRadius: "30px",
    lineHeight: "30px",
    fontSize: "16px",
    width: "110px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    border: "none",
  };

  //檔案上傳
  const [progress, setProgress] = useState(0);

  const formHandler = async (e) => {
    // preventDefault()阻止預設行為
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    try {
      //console.log("start");
      await updateDoc(taskDocRef, {
        "file.doc.affidavit": fromURL2,
      });
      //console.log('end');
      //navigate("/uploadGoodsSuccess");
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFiles = (file) => {
    if (!file) return;
    // ref路徑
    const storageRef = ref(storage, `/Registration/${file.name}`);
    // Resumable uploads work by sending multiple requests
    const UploadTask = uploadBytesResumable(storageRef, file);

    //snapshot是指快照，把資料庫裡面的值拍照起來，然後呈現出來
    UploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then((url) => {
          //let urlID = url;
          return setUrlID3(url);
        });
      }
    );
  };
  return (
    <div style={{ paddingBottom: "80px" }}>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSec name="公益團體申請資料上傳" />
      <Container>
        <Row style={{ fontSize: "35px", marginBottom: "30px" }}>
          <ProgressBar
            style={{
              position: "absolute",
              marginTop: "19px",
              zIndex: "1",
              width: "1130px",
              marginLeft: "100px",
            }}
            now={76}
          ></ProgressBar>
          <Col style={{ textAlign: "center", zIndex: "2" }}>
            <FontAwesomeIcon
              style={{
                color: "#26aa50",
                marginRight: "60px",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "60px" }}>開始</span>
          </Col>
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{
                color: "#26aa50",
                marginLeft: "80px",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "24px" }}>
              上傳勸募許可函一份
            </span>
          </Col>
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{
                color: "#26aa50",
                marginLeft: "110px",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "75px" }}>
              上傳切結書一份
            </span>
          </Col>
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{ color: "lightgray", marginLeft: "140px" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "90px" }}>
              上傳法人登記書一份
            </span>
          </Col>
          <Col style={{ zIndex: "2" }}>
            <FontAwesomeIcon
              style={{ color: "lightgray", marginLeft: "140px" }}
              icon={faCircleCheck}
            />
            <br />
            <span style={{ fontSize: "15px", marginLeft: "90px" }}>
              上傳公益團體基本資料
            </span>
          </Col>
        </Row>
      </Container>
      <TitleStep name="STEP3&nbsp;-&nbsp;上傳法人登記書一份" />
      <Card style={cardStyle}>
        <Card.Body>
          <h4 style={h4Style}>三、法人登記書一份</h4>
          <br></br>

          <div style={inputStyle}>
            <Form.Group controlId="formFile" className="mb-3">
              <div>
                <form onSubmit={formHandler}>
                  <span style={{ display: "inline-block", width: "100%" }}>
                    <Form.Control
                      type="file"
                      className="input"
                      accept=".jpg, .png, .jpeg"
                    />
                  </span>
                  <div style={{ marginTop: "25px", marginLeft: "43.5%" }}>
                    <button style={uploadBtn} type="submit">
                      上傳&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faCloudArrowUp} />
                    </button>
                  </div>
                </form>
                {/* <hr></hr>
                <h5 style={h5Style}>上傳進度：　{progress} %</h5> */}
                <ProgressBar
                  style={{ margin: "40px 0px 30px 0px", width: "100%" }}
                  now={progress}
                  label={`${progress}%`}
                />
              </div>
            </Form.Group>
          </div>
          <br></br>
          <ul>
            <p style={pStyle}>
              <li>
                檔案格式：以照片上傳，需保證照片清晰、色調正常，JPG檔、PNG檔均可。
              </li>
            </p>
            <p style={pStyle}>
              <li>
                注意事項：若顯示
                <span style={{ color: "#002B5B", fontWeight: "bold" }}>
                  {" "}
                  " 100 % "{" "}
                </span>
                ，代表上傳成功，請按"下一步"。
              </li>
            </p>
          </ul>
          <br></br>
        </Card.Body>
      </Card>
      <div style={btnStyle}>
        {progress === 100 && (
          <Link
            to="/ApplicationUpload4"
            state={{ fromID: fromID, fromURL3: urlID3 }}
          >
            <button
              style={{
                color: "#ffffff",
                backgroundColor: "#002B5B",
                borderRadius: "30px",
                lineHeight: "30px",
                fontSize: "16px",
                width: "120px",
                textAlign: "center",
                height: "35px",
                fontWeight: "bold",
                border: "none",
              }}
            >
              下一步
            </button>
          </Link>
        )}
        {progress !== 100 && (
          <button
            style={{
              color: "#ffffff",
              backgroundColor: "lightgray",
              borderRadius: "30px",
              lineHeight: "30px",
              fontSize: "16px",
              width: "120px",
              textAlign: "center",
              height: "35px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            下一步
          </button>
        )}
      </div>
    </div>
  );
}

export default ApplicationUpload3;
