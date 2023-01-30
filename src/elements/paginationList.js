import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationList() {
  const paginationStyle = {
    marginLeft: "28%",
    marginRight: "62%",
    marginTop: "20px",
  };
  return (
    <div>
      <Pagination style={paginationStyle}>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default PaginationList;
