import React, { useState } from "react";
import Pagination from "@mui/material/pagination";
import "./Products.css";

const Products = ({ result }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = result.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <section>
      <div className="card-container">
        {currentPageItems.map((item) => (
          <div key={item.id}>{item}</div>
        ))}
      </div>
      <Pagination
        className="Pagination"
        count={Math.ceil(result.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </section>
  );
};

export default Products;
