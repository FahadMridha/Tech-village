import React from "react";
import { useProductContext } from "../../../context/ProductContext";

const Header = () => {
  const { setSearchTerm } = useProductContext();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="header bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="search-bar">
          <input
            onInput={handleSearch}
            type="search"
            placeholder="Search for products..."
            className="p-2 rounded mr-2 text-black"
          />
          <select className="p-2 rounded mr-2 bg-white text-black">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
          <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
