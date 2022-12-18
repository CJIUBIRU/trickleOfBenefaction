//打rcc+ENTER
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navLink.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Button } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Task({ id, email, level, name }) {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Row style={{ textAlign: "center" }}>
        {email === user.email && level === "member" && (
          <Col style={{ padding: "0px", width: "250px" }}>
            <Nav.Link
              as={Link}
              to="/charity"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              合作機構一覽
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "member" && (
          <Col style={{ padding: "0px", paddingLeft: "10px" }}>
            <Nav.Link
              as={Link}
              to="/pointsActivity"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              點數兌換專區
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "member" && (
          <Col style={{ padding: "0px", paddingLeft: "10px" }}>
            <NavDropdown
              title="登出"
              id="basic-nav-dropdown"
              style={{ fontSize: "17px" }}
            >
              <div style={{ textAlign: "center" }}>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="profilePhoto"
                    referrerPolicy="no-referrer"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      marginBottom: "15px",
                      marginTop: "10px",
                    }}
                  ></img>
                )}
                {!user.photoURL && (
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      marginBottom: "15px",
                      marginTop: "10px",
                      backgroundColor: "#fef1e6",
                      textAlign: "center",
                      marginLeft: "34%",
                      fontSize: "13px",
                    }}
                  >
                    使用者
                  </div>
                )}
                {/* {!user.displayName && <h6>使用者，您好！</h6>} */}
                <h6>{name}，您好！</h6>
                <Button
                  onClick={() => auth.signOut()}
                  style={{
                    backgroundColor: "#002b5b",
                    border: "none",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                >
                  登出
                </Button>
              </div>

              <NavDropdown.Divider style={{ marginTop: "20px" }} />
              <NavDropdown.Item
                as={Link}
                to="/process"
                href="#action/3.1"
                style={{ fontWeight: "bold", color: "#002B5B" }}
              >
                捐贈進度追蹤
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/donateRecordPage"
                href="#action/3.3"
                style={{ fontWeight: "bold", color: "#002B5B" }}
              >
                捐贈紀錄
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/viewRecord"
                href="#action/3.3"
                style={{ fontWeight: "bold", color: "#002B5B" }}
              >
                瀏覽紀錄
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/profile"
                href="#action/3.4"
                style={{ fontWeight: "bold", color: "#002B5B" }}
              >
                個人檔案管理
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
        )}
        {email === user.email && level === "member" && (
          <Col style={{ padding: "0px", paddingLeft: "10px" }}>
            <Nav.Link
              as={Link}
              to="/donate"
              style={{
                color: "#ffffff",
                backgroundColor: "#002B5B",
                borderRadius: "30px",
                marginTop: "16px",
                marginBottom: "20px",
                // marginLeft: "10px",
                lineHeight: "16px",
                fontSize: "16px",
                width: "100px",
                textAlign: "center",
              }}
            >
              我要捐贈
            </Nav.Link>
          </Col>
        )}
        {/* {email === user.email && level === "member" && (
          <Col style={{ padding: "0px", paddingLeft: "10px" }}>
            <Nav.Link
              style={{
                color: "#ffffff",
                backgroundColor: "#002B5B",
                borderRadius: "30px",
                marginTop: "16px",
                marginBottom: "20px",
                // marginLeft: "10px",
                lineHeight: "16px",
                fontSize: "16px",
                width: "105px",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />&nbsp;捐贈箱
            </Nav.Link>
          </Col>
        )} */}
      </Row>
      <Row style={{ textAlign: "center" }}>
        {email === user.email && level === "charity" && (
          <Col style={{ padding: "0px", width: "220px" }}>
            <Nav.Link
              as={Link}
              to="/upload"
              href="#home"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              刊登物資需求
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "charity" && (
          <Col style={{ padding: "0px" }}>
            <Nav.Link
              as={Link}
              to="/myDemand"
              href="#home"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              我的需求
            </Nav.Link>
          </Col>
        )}
        {/* {email === user.email && level === "charity" && (
          <Col
            style={{ padding: "0px", textAlign: "left", paddingRight: "15px" }}
          >
            <Nav.Link
              as={Link}
              to="/setPassword"
              href="#home"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              初步設定密碼
            </Nav.Link>
          </Col>
        )} */}

        {email === user.email && level === "charity" && (
          <Col
            style={{ padding: "0px", textAlign: "left", paddingRight: "15px" }}
          >
            <NavDropdown
              title="登出"
              id="basic-nav-dropdown"
              style={{ fontSize: "17px" }}
            >
              <div style={{ textAlign: "center" }}>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="profilePhoto"
                    referrerPolicy="no-referrer"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      marginBottom: "15px",
                      marginTop: "10px",
                    }}
                  ></img>
                )}
                {!user.photoURL && (
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      marginBottom: "15px",
                      marginTop: "10px",
                      backgroundColor: "#fef1e6",
                      textAlign: "center",
                      marginLeft: "34%",
                      fontSize: "13px",
                    }}
                  >
                    使用者
                  </div>
                )}
                {/* {!user.displayName && <h6>使用者，您好！</h6>}
                {user.displayName && <h6>{user.displayName}，您好！</h6>} */}
                <h6>{name}，您好！</h6>
                <Button
                  onClick={() => auth.signOut()}
                  style={{
                    backgroundColor: "#002b5b",
                    border: "none",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                >
                  登出
                </Button>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                  href="#action/3.4"
                  style={{ fontWeight: "bold", color: "#002B5B" }}
                >
                  個人檔案管理
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Col>
        )}
      </Row>
      <Row style={{ textAlign: "center" }}>
        {email === user.email && level === "admin" && (
          <Col style={{ padding: "0px", width: "250px" }}>
            <Nav.Link
              as={Link}
              to="/managerProve"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              申請資料審核
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "admin" && (
          <Col style={{ padding: "0px" }}>
            <Nav.Link
              as={Link}
              to="/addStores"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              新增合作店家
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "admin" && (
          <Col style={{ padding: "0px" }}>
            <Nav.Link
              as={Link}
              to="/allStores"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              合作店家一覽
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "admin" && (
          <Col style={{ padding: "0px" }}>
            <Nav.Link
              as={Link}
              to="/uploadGoods"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              上架物資
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "admin" && (
          <Col style={{ padding: "0px", textAlign: "left" }}>
            <Nav.Link
              as={Link}
              to="/allGoods"
              href="#action/3.2"
              style={{ color: "#002B5B", fontSize: "17px" }}
            >
              物資一覽表
            </Nav.Link>
          </Col>
        )}
        {email === user.email && level === "admin" && (
          <Col
            style={{ padding: "0px", textAlign: "left", paddingRight: "15px" }}
          >
            <NavDropdown
              title="登出"
              id="basic-nav-dropdown"
              style={{ fontSize: "17px" }}
            >
              <div style={{ textAlign: "center" }}>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="profilePhoto"
                    referrerPolicy="no-referrer"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      marginBottom: "15px",
                      marginTop: "10px",
                    }}
                  ></img>
                )}
                {!user.photoURL && (
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      marginBottom: "15px",
                      marginTop: "10px",
                      backgroundColor: "#fef1e6",
                      textAlign: "center",
                      marginLeft: "34%",
                      fontSize: "13px",
                    }}
                  >
                    使用者
                  </div>
                )}
                {/* {!user.displayName && <h6>使用者，您好！</h6>}
                {user.displayName && <h6>{user.displayName}，您好！</h6>} */}
                <h6>{name}，您好！</h6>
                <Button
                  onClick={() => auth.signOut()}
                  style={{
                    backgroundColor: "#002b5b",
                    border: "none",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                >
                  登出
                </Button>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                  href="#action/3.4"
                  style={{ fontWeight: "bold", color: "#002B5B" }}
                >
                  個人檔案管理
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Col>
        )}
      </Row>
    </div>
  );
}
function NavbarComp() {
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
  const [user, loading] = useAuthState(auth);
  if (loading)
    return (
      <h3
        style={{
          textAlign: "center",
          color: "#002b5b",
          fontWeight: "bold",
          height: "0px",
          lineHeight: "65px",
        }}
      >
        網頁載入中...
      </h3>
    );
  const bodyStyle = {
    backgroundColor: "#ffffff",
  };
  const navbarStyle = {
    width: "100%",
    height: "70px",
    top: "0",
    position: "fixed",
    display: "flex",
    backgroundColor: "#ffffff",
    zIndex: "1",
    borderBottom: "3px solid #90aacb",
  };
  const navtitleStyle = {
    height: "70px",
    color: "#90AACB",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: "55px",
    // width: "36%",
  };
  const navpageStyle = {
    height: "70px",
    fontWeight: "bold",
    fontSize: "19px",
    lineHeight: "50px",
  };
  const navitemStyle = {
    marginRight: "8px",
    color: "#002B5B",
    fontSize: "17px",
  };
  const navDonateBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    marginTop: "16px",
    marginBottom: "20px",
    marginLeft: "10px",
    lineHeight: "16px",
    fontSize: "16px",
    width: "100px",
    textAlign: "center",
  };
  const navdropStyle = {
    fontSize: "17px",
  };
  const navdropItemStyle = {
    fontWeight: "bold",
    color: "#002B5B",
  };
  const navCartBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    marginTop: "16px",
    marginBottom: "20px",
    marginLeft: "10px",
    lineHeight: "16px",
    fontSize: "16px",
    width: "50px",
    textAlign: "center",
  };
  const navCartSecBtnStyle = {
    color: "#ffffff",
    backgroundColor: "lightgray",
    borderRadius: "30px",
    marginTop: "16px",
    marginBottom: "20px",
    marginLeft: "10px",
    lineHeight: "16px",
    fontSize: "16px",
    width: "50px",
    textAlign: "center",
  };
  const navBellBtnStyle = {
    color: "#002B5B",
    marginTop: "14.5px",
    marginBottom: "20px",
    lineHeight: "16px",
    fontSize: "20px",
    width: "50px",
    textAlign: "center",
    marginLeft: "5px",
  };
  const profilePhotoStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    marginBottom: "15px",
    marginTop: "10px",
  };
  const profilePhotoSecStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    marginBottom: "15px",
    marginTop: "10px",
    backgroundColor: "#fef1e6",
    textAlign: "center",
    marginLeft: "34%",
    fontSize: "13px",
  };
  return (
    <div style={bodyStyle}>
      <Navbar className="nav-bar" style={navbarStyle} expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="nav-title"
            style={navtitleStyle}
          >
            捐捐不息&nbsp;Trickle of Benefaction
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <div>
              <Nav className="me-auto" style={navpageStyle}>
                {details.map((item) => (
                  <Task
                    id={item.id}
                    key={item.id}
                    level={item.data.level}
                    email={item.data.email}
                    name={item.data.name}
                  />
                ))}

                {!user && (
                  <Nav.Link as={Link} to="/loginIn" style={navitemStyle}>
                    註冊／登入
                  </Nav.Link>
                )}
                {/* {user && (
                  <Nav.Link style={navBellBtnStyle}>
                    <FontAwesomeIcon icon={faBell} />
                    <sup style={{ fontSize: "14px" }}>1</sup>
                  </Nav.Link>
                )} */}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ScrollToTop smooth />
    </div>
  );
}
export default NavbarComp;
