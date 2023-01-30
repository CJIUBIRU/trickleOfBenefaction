//打rcc+ENTER
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../navLink.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import ScrollToTop from "react-scroll-to-top";

function NavbarComp() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
  return (
    <div style={bodyStyle}>
      <Navbar className="nav-bar" style={navbarStyle} expand="lg">
        <Container>
          <Navbar.Brand className="nav-title" style={navtitleStyle}>
            捐捐不息&nbsp;Trickle of Benefaction
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          ></Navbar.Collapse>
        </Container>
      </Navbar>
      <ScrollToTop smooth />
    </div>
  );
}
export default NavbarComp;
