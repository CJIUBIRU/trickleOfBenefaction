import { Container } from "react-bootstrap";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TitleSec from "../elements/titleSec";
import ProductStep3 from "../elements/productStep3";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }
  const userTextStyle = {
    color: "#002b5b",
    fontWeight: "bold",
  };
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: "50px" }}>
        <TitleSec name="捐贈紀錄" />
        <Container>
          <div
            style={{
              boxShadow: "10px 10px 25px #e0e0e0",
              padding: "30px 0 50px 0",
            }}
          >
            <div
              style={{
                color: "white",
                // backgroundColor: "#61d2b4",
                // backgroundColor: "#a8dda8",
                // backgroundColor: "#1CC88A",
                backgroundColor: "#26aa99",
                // backgroundColor: "#4fd783",
                // backgroundColor: "#74b49d",
                // backgroundColor: "#76b39d",
                width: "140px",
                padding: "5px",
                fontWeight: "bold",
                fontSize: "18px",
                textAlign: "center",
                margin: "0 43.7% 30px 43.7%",
              }}
            >
              訂單已完成
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "70%",
                marginLeft: "15.1%",
              }}
            >
              <hr style={{ width: "45%" }} />
              &nbsp;
              <span
                style={{
                  color: "#002b5b",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                訂購資訊
              </span>
              &nbsp;
              <hr style={{ width: "45%" }} />
            </div>
            <div>
              <ProductStep3 />
            </div>
            <div>
              <ProductStep3 />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "73.2%",
                marginLeft: "15%",
              }}
            >
              <hr style={{ width: "45%" }} />
              &nbsp;
              <span style={{ color: "#002b5b", fontWeight: "bold" }}>小計</span>
              &nbsp;
              <hr style={{ width: "45%" }} />
            </div>
            <Card.Text
              style={{
                color: "#6C6C6C",
                textAlign: "right",
                width: "70%",
                lineHeight: "35px",
                marginLeft: "15%",
              }}
            >
              $2030
              <br />
              +&nbsp;&nbsp;$2030
              <br />
              <span
                style={{ borderTop: "1px solid #ced4da", paddingTop: "3px" }}
              >
                <span style={{ marginRight: "4%" }}>
                  共<span style={userTextStyle}>2</span>項物資{" "}
                </span>
                總計：
                <span style={userTextStyle}>$4060</span>
              </span>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "25px 0 10px 0",
                  }}
                >
                  <hr style={{ width: "20%" }} />
                  <span
                    style={{
                      color: "#002b5b",
                      fontWeight: "bold",
                      width: "10%",
                    }}
                  >
                    訂單資訊
                  </span>
                  <hr style={{ width: "19%", marginLeft: "2%" }} />
                  <div style={{ width: "1%" }}></div>
                  <hr style={{ width: "20%" }} />
                  <span
                    style={{
                      color: "#002b5b",
                      fontWeight: "bold",
                      width: "10%",
                    }}
                  >
                    運送資訊
                  </span>
                  <hr style={{ width: "20%", marginLeft: "2%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "38.6%",
                      textAlign: "left",
                      marginLeft: "11%",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    訂單編號：2208278H980GS&nbsp;
                    <a href="#" style={{ color: "#6c6c6c" }}>
                      <FontAwesomeIcon icon={faClipboard} />
                    </a>
                    <br />
                    付款人：丘會厭
                    <br />
                    付款人電話：0987654321
                    <br />
                    付款方式：超商代碼&nbsp;
                    <a href="#" style={{ color: "#6c6c6c" }}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                  </div>
                  <div
                    style={{
                      width: "40%",
                      textAlign: "left",
                      marginLeft: "10.3%",
                      lineHeight: "40px",
                      // borderLeft: "1px solid #6c6c6c"
                    }}
                  >
                    9月7日&nbsp;08:33
                    <span
                      style={{
                        color: "#26aa99",
                        fontSize: "16px",
                        margin: "0 10px 0 10px",
                      }}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    訂單完成
                    <br />
                    9月7日&nbsp;08:30
                    <span style={{ margin: "0 13px 0 12.5px" }}>●</span>
                    機構已取件成功
                    <br />
                    9月5日&nbsp;10:00
                    <span style={{ margin: "0 13px 0 12.5px" }}>●</span>
                    已發送超商取貨代碼
                    <br />
                    9月5日&nbsp;09:50
                    <span style={{ margin: "0 13px 0 12.5px" }}>●</span>
                    店家備貨完成
                    <br />
                    9月4日&nbsp;20:46
                    <span style={{ margin: "0 13px 0 12.5px" }}>●</span>確認付款
                    <br />
                    9月4日&nbsp;20:15
                    <span style={{ margin: "0 13px 0 12.5px" }}>●</span>
                    訂單已成立
                  </div>
                </div>
              </div>
            </Card.Text>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default UploadDemand;
