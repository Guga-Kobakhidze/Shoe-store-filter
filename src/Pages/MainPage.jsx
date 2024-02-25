import Navigation from "../navigation/Navigation";
import "../index.css";
import Products from "../products/Products";
import Recommended from "../recommended/Recommended";
import Sidebar from "../side-bar/Sidebar";
import { useState } from "react";
import products from "../database/data";
import Card from "../components/Card";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // input Filter

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Buttons Filter

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering Input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter items
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          newPrice == selected ||
          title == selected ||
          company === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice, id }) => (
        <Card
          key={id}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="main-container">
      <Sidebar handleChange={handleChange} />
      <Navigation handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default MainPage;
