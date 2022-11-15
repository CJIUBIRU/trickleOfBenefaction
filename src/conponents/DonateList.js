import { Container } from "react-bootstrap";
import React, { Component } from "react";
// import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import FromSelect from "../elements/fromSelect";
import Search from "../elements/search";
import ProductStep1 from "../elements/productStep1";
import ButtonLink from "../elements/button";
import PaginationList from "../elements/paginationList";
import Navbar from "../elements/navbar";

const DonateList = () => {
  const donPageStyle = {
    marginTop: "70px",
  };
  const selectPageStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const goodsPageStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const paginationStyle = {
    marginLeft: "28%",
    marginRight: "62%",
    marginTop: "20px",
  };
  return (
    <div>
      <Navbar />
      <div style={donPageStyle}>
        <TitleSec name="捐贈物資列表" />
        <Container>
          <TitleStep name="STEP1&nbsp;-&nbsp;選擇捐贈物資" />
          <div style={selectPageStyle}>
            <div style={{ width: "50%" }}>
              <FromSelect />
            </div>
            &nbsp;
            <div style={{ width: "50%" }}>
              <Search />
            </div>
          </div>
          <div style={goodsPageStyle}>
            <ProductStep1 />
            <ProductStep1 />
            <ProductStep1 />
          </div>
          <div style={goodsPageStyle}>
            <ProductStep1 />
            <ProductStep1 />
            <ProductStep1 />
          </div>
          <PaginationList />
          <div
            style={{
              marginTop: "25px",
              marginBottom: "40px",
              marginLeft: "45%",
              marginRight: "55%",
            }}
          >
            <ButtonLink to="/donateStep2" name="下一步" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DonateList;
