import React from "react";
import "./MenuItems.css";

const MenuItems = ({ items }) => {
  return (
    <nav className="navegacion">
      <p>{items}</p>
    </nav>
  );
};

export default MenuItems;
