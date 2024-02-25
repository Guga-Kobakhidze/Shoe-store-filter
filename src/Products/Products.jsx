import "./Products.css";
import React, { useState } from "react";
import Pagination from "@mui/material/pagination";
import Detailed from "../components/Card";

const Products = ({ result }) => {
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 12;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = result.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    setSelectedProduct(null);
  };

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <section>
      <div className="card-container">
        {currentPageItems.map((item) => (
          <div key={item.key} onClick={() => handleProductClick(item.key)}>
            {item}
          </div>
        ))}
      </div>
      <Pagination
        className="Pagination"
        count={Math.ceil(result.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
      {selectedProduct && (
        <>
          {result.map((product) => {
            if (product.key === selectedProduct) {
              return (
                <div className="detailed" key={product.key}>
                  <Detailed
                    id={product.key}
                    img={product.props.img}
                    title={product.props.title}
                    newPrice={product.props.newPrice}
                    prevPrice={product.props.prevPrice}
                    reviews={product.props.reviews}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                  />
                </div>
              );
            }
            return null;
          })}
        </>
      )}{" "}
      {selectedProduct && (
        <div className="overlay" onClick={() => setSelectedProduct(null)}></div>
      )}
    </section>
  );
};

export default Products;
