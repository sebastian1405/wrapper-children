import Imagen from "./Imagen";
import MenuItems from "./MenuItems";
import img from "../../assets/images/logo-fares.svg";
import "./Header.css";

const Header = () => {
  const menus = ["Home", "About Us", "Contact Us"];
  return (
    <div className="bg-header">
      <div className="header-container">
        <Imagen img={img} type="logo" alt="FARES" />
        <MenuItems items={menus} direction="horizontal" />
      </div>
    </div>
  );
};

export default Header;
