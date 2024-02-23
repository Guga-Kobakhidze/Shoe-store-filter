import "../index.css";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
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
