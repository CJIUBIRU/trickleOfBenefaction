//打rcc+ENTER
import React, { Component } from "react";
import "../navLink.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../elements/navbar";
import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import HomeYesUser from "./HomeYesUser";
import HomeNoUser from "./HomeNoUser";

function NavbarComp() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      {/* <h1 style={{textAlign: "center", marginTop: "350px"}}>首頁</h1> */}
      {user && <HomeYesUser />}
      {!user && <HomeNoUser />}
    </div>
  );
}

export default NavbarComp;
