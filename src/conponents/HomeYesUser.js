//打rcc+ENTER
import React, { Component } from "react";
import "../navLink.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Product from "../elements/product";
import Navbar from "../elements/navbar";
import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import News from "../elements/newsAdmin";
import NewsCharity from "../elements/newsCharity";
import Notes from "../elements/notesAdmin";
import NotesCharity from "../elements/notesCharity";

function Task({ id, email, level }) {
  const [user] = useAuthState(auth);
  return (
    <div>
      {!user && (
        <Container>
          <div style={{ backgroundColor: "#ffffff" }}>
            <div style={{ height: "70px" }}></div>
            <div>
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                }}
              >
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播1
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播2
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播3
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播4
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播5
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播6
                  </h4>
                </div>
              </Slider>
            </div>

            <div style={{ margin: "40px 0px 30px 0px" }}>
              <h5 style={{ color: "#002B5B", fontWeight: "bold" }}>最新消息</h5>
              <Slider
                {...{
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                }}
              >
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息1
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息2
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息3
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息4
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息5
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息6
                  </h4>
                </div>
              </Slider>
            </div>

            <div style={{ margin: "40px 0px 30px 0px" }}>
              <h5 style={{ color: "#002B5B", fontWeight: "bold" }}>
                機構需求物資
              </h5>
              <Slider
                {...{
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                }}
              >
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
              </Slider>
            </div>

            <div style={{ margin: "40px 0px 30px 0px" }}>
              <h5 style={{ color: "#002B5B", fontWeight: "bold" }}>聯絡我們</h5>
              <div style={{ paddingTop: "5px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    backgroundColor: "#FEF1E6",
                    textAlign: "center",
                    lineHeight: "230px",
                    fontWeight: "bold",
                  }}
                >
                  基本資訊
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      {email === user.email && level === "member" && (
        <Container>
          <div style={{ backgroundColor: "#ffffff" }}>
            <div style={{ height: "70px" }}></div>
            <div>
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                }}
              >
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播1
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播2
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播3
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播4
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播5
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                    }}
                  >
                    推播6
                  </h4>
                </div>
              </Slider>
            </div>

            <div style={{ margin: "40px 0px 30px 0px" }}>
              <h5 style={{ color: "#002B5B", fontWeight: "bold" }}>最新消息</h5>
              <Slider
                {...{
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                }}
              >
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息1
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息2
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息3
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息4
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息5
                  </h4>
                </div>
                <div>
                  <h4
                    style={{
                      height: "300px",
                      textAlign: "center",
                      lineHeight: "280px",
                      backgroundColor: "#FEF1E6",
                      fontSize: "18px",
                      margin: "5px",
                    }}
                  >
                    消息6
                  </h4>
                </div>
              </Slider>
            </div>

            <div style={{ margin: "40px 0px 30px 0px" }}>
              <h5 style={{ color: "#002B5B", fontWeight: "bold" }}>
                機構需求物資
              </h5>
              <Slider
                {...{
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                }}
              >
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
                <div>
                  <Product />
                </div>
              </Slider>
            </div>

            <div style={{ margin: "40px 0px 30px 0px" }}>
              <h5 style={{ color: "#002B5B", fontWeight: "bold" }}>聯絡我們</h5>
              <div style={{ paddingTop: "5px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    backgroundColor: "#FEF1E6",
                    textAlign: "center",
                    lineHeight: "230px",
                    fontWeight: "bold",
                  }}
                >
                  基本資訊
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      {email === user.email && level === "admin" && (
        <Container style={{marginBottom: "50px"}}>
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{margin: "10px", width: "70%"}}>
              <News />
            </div>
            <div style={{margin: "10px", width: "30%"}}>
              <Notes />
            </div>
          </div>
        </Container>
      )}
      {email === user.email && level === "charity" && (
        <Container style={{marginBottom: "50px"}}>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{margin: "10px", width: "70%"}}>
            <NewsCharity />
          </div>
          <div style={{margin: "10px", width: "30%"}}>
            <NotesCharity />
          </div>
        </div>
      </Container>
      )}
    </div>
  );
}

function NavbarComp() {
  const [user] = useAuthState(auth);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"));
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
      {/* <h1 style={{textAlign: "center", marginTop: "350px"}}>首頁</h1> */}
      {details.map((item) => (
        <Task
          id={item.id}
          key={item.id}
          level={item.data.level}
          email={item.data.email}
        />
      ))}
    </div>
  );
}

export default NavbarComp;
