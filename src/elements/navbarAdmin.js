//打rcc+ENTER
import React from "react";
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
import { useNavigate } from "react-router-dom";

export default function NavbarComp() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
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
    if (!user){
      navigate("/loginin");
    }
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
    marginRight: "8px",
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
            to="/homeAdmin"
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
                <Nav.Link
                  as={Link}
                  to="/managerProve"
                  href="#action/3.2"
                  style={navitemStyle}
                >
                  申請資料審核
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/addMember"
                  href="#action/3.2"
                  style={navitemStyle}
                >
                  新增合作店家
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/allStores"
                  href="#action/3.2"
                  style={navitemStyle}
                >
                  合作店家一覽表
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/uploadGoods"
                  href="#action/3.2"
                  style={navitemStyle}
                >
                  上架物資
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/allGoods"
                  href="#action/3.2"
                  style={navitemStyle}
                >
                  物資一覽表
                </Nav.Link>

                {user && (
                  <NavDropdown
                    title="登出"
                    id="basic-nav-dropdown"
                    style={navdropStyle}
                  >
                    <div style={{ textAlign: "center" }}>
                      {user.photoURL && (
                        <img
                          src={user.photoURL}
                          alt="profilePhoto"
                          referrerPolicy="no-referrer"
                          style={profilePhotoStyle}
                        ></img>
                      )}
                      {!user.photoURL && (
                        <div style={profilePhotoSecStyle}>使用者</div>
                      )}
                      {!user.displayName && <h6>使用者，您好！</h6>}
                      {user.displayName && <h6>{user.displayName}，您好！</h6>}
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
                      style={navdropItemStyle}
                    >
                      捐贈進度追蹤
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/donateRecord"
                      href="#action/3.3"
                      style={navdropItemStyle}
                    >
                      捐贈紀錄
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/viewRecord"
                      href="#action/3.3"
                      style={navdropItemStyle}
                    >
                      瀏覽紀錄
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/profile"
                      href="#action/3.4"
                      style={navdropItemStyle}
                    >
                      個人檔案管理
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
                {!user && (
                  <Nav.Link as={Link} to="/loginIn" style={navitemStyle}>
                    註冊／登入
                  </Nav.Link>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ScrollToTop smooth />
    </div>
  );
}
