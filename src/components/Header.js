import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onCategoryChange }) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [categorySelect, setCategorySelect] = useState('select category');

  const handleCategoryInputChange = (e) => {
    setCategoryInput(e.target.value);
    onCategoryChange(e.target.value);
  };

  const handleCategorySelectChange = (e) => {
    setCategorySelect(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Shopping</h2>
        <div className="d-flex">
          <div className="d-flex justify-content-between align-items-center px-3 rounded border bg-white text-dark">
            <input
              className="border-0 bg-transparent"
              type="text"
              placeholder="Search Product"
              value={categoryInput}
              onChange={handleCategoryInputChange}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
            <select
              className="form-select mx-md-1"
              aria-label="Default select example"
              value={categorySelect}
              onChange={handleCategorySelectChange}
            >
              <option value="">All Category</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
      </header>
    </div>
  );
};

export default Header;
