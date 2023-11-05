import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentItem, setCurrentItem] = useState();

  const handleItemClick = (value) => {
    setCurrentItem(value);
  };

  return (
    <ul className="nav justify-content-center gap-5 bg-light py-3">
      <li className="nav-item">
        <Link to="/">
          <input
            type="button"
            value='Users'
            onClick={() => handleItemClick("Users")}
            className={`btn btn${
              currentItem === "Users" ? "-primary" : "-outline-primary"
            }`}
          />
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/addUser">
          <input
            type="button"
            value='Add User'
            onClick={() => handleItemClick("Add User")}
            className={`btn btn${
              currentItem === "Add User" ? "-primary" : "-outline-primary"
            }`}
          />
        </Link>
      </li>
    </ul>
  );
};

export default Header;
