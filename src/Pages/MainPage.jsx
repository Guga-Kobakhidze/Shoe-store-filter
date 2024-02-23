import Navigation from "../navigation/Navigation";
import "../index.css";
import Products from "../products/Products";
import Recommended from "../recommended/Recommended";
import Sidebar from "../side-bar/Sidebar";

const MainPage = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
};

export default MainPage;
