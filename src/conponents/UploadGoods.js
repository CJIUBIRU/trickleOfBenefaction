import React, { useState } from "react";
import { db, storage } from "../utils/firebase";
import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";
import { Card, FormControl } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import TitleStep from "../elements/titleStep";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { Stepper } from "react-form-stepper";
import "../App.css";

//let uuid = uuidv4();
function UploadGoods() {
  const [uuid, setUuid] = useState(uuidv4());
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }

  const [progress, setProgress] = useState(0);
  const [urlID, setUrlID] = useState("");

  console.log(urlID);
  const formHandler = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    console.log(file.name);

    e.preventDefault();
    try {
      // await setDoc(doc(db, "goodsDemand", user.uid), {
      await setDoc(doc(db, "supply", uuid), {
        uid: uuid,
        name: "",
        store: "",
        price: "",
        pic: "",
      });
      //navigate("/uploadGoodsSuccess");
      //alert("物資上架成功。");
    } catch (err) {
      console.log(err);
    }
  };
  const uploadFiles = (file) => {
    if (!file) return;
    // setUuid(uuidv4());
    const storageRef = ref(storage, `/goods/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          //let urlID = url;
          return setUrlID(url);
        });
        console.log("progress: " + progress);
        //console.log("getDownloadURL.url: "+getDownloadURL.url);
      }
    );
  };

  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#90aacb",
    border: "1px #90aacb solid",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    marginLeft: "43%",
    marginBottom: "20px",
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar />
      <TitleSec name="上架物資" />
      <Container style={{ marginBottom: "15px" }}>
        <Stepper
          steps={[
            // { label: "開始" },
            { label: "上傳圖片" },
            { label: "填寫商品資訊" },
            { label: "完成" },
          ]}
          activeStep={0}
        />
      </Container>
      <TitleStep name="STEP1 - 上傳圖片" />
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "70%", marginLeft: "15%" }}>
              <form onSubmit={formHandler}>
                <FormControl
                  style={{ margin: "40px", width: "90%" }}
                  type="file"
                  accept=".jpg, .png, .jpeg"
                />
                <button style={stepBtnStyle} type="submit">
                  上傳&nbsp;
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
                <ProgressBar
                  style={{ margin: "20px 0px 30px 40px", width: "90%" }}
                  now={progress}
                  label={`${progress}%`}
                />
              </form>
              <div style={{ margin: "25px" }}>
                <ul>
                  <p style={{ lineHeight: "25px" }}>
                    <li>
                      檔案格式：以照片上傳，需保證照片清晰、色調正常，JPG檔、PNG檔均可。
                    </li>
                  </p>
                  <p style={{ lineHeight: "25px" }}>
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
              </div>
            </Card>
          </Col>
          <div>
            {/* {!progress && (
              <p
                style={{
                  width: "70%",
                  marginLeft: "15%",
                  border: "1px lightgray solid",
                  backgroundColor: "#F0F0F0",
                  color: "#adadad",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                尚未上傳
              </p>
            )}
            {progress && (
              <p
                style={{
                  width: "70%",
                  marginLeft: "15%",
                  border: "1px green solid",
                  backgroundColor: "#26aa99",
                  color: "white",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                Upload {progress} %
              </p>
            )} */}
          </div>
          <div
            style={{ marginLeft: "44.3%", marginTop: "80px", width: "auto" }}
          >
            {progress === 100 && (
              <Link
                to="/UploadGoodsSec"
                state={{ fromID: uuid, fromURL: urlID }}
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
              // <ButtonLink
              //   as={Link}
              //   to="/uploadGoodsSec"
              //   name="下一步"
              // ></ButtonLink>
            )}
            {/* {progress !== 100 && (
              <Link to="/UploadGoodsSec" state={{ fromID: uuid, fromURL: getDownloadURL.URL  }}>
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
              </Link>
            )} */}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default UploadGoods;
