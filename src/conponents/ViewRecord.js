import { Container, Pagination } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import Product from "../elements/product";
import TitleSec from "../elements/titleSec";
import PaginationList from "../elements/paginationList";
import Navbar from "../elements/navbar";

function UploadDemand() {
  const titleSecPage = {
    margin: "40px 0px 30px 0px", //上右下左
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="瀏覽紀錄" />
      <Container>
        <div style={titleSecPage}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </div>
          <PaginationList />
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
