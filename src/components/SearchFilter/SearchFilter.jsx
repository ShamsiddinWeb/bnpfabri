import React, { useState } from "react";
import { data } from "../../Data/ProductData";
import "./SearchFilter.scss";
import { Link } from "react-router-dom";
import "../Product/Product.scss";
import { IoSearch } from "react-icons/io5";
import noResults from "../../assets/icons/no-results.webp";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";

const SearchFilter = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  const filteredProducts = data.filter((product) => {
    const matchesSearch =
      props
        .t(product.textKey)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      props
        .t(product.category)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = [
    ...new Set(data.map((product) => product.category)),
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="searchFilter">
      <div className="container">
        <div className="searchFilter__start">
          <div className="searchFilter__left">
            <div className="searchFilter__left-card">
              <input
                className="searchFilter__left-inp"
                type="text"
                placeholder={props.t("search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IoSearch />
            </div>
            <div className="searchFilter__left-category">
              <h2 className="searchFilter__left-title">
                {props.t("header__link2")}
              </h2>
              <p
                onClick={() => handleCategorySelect("")}
                className={selectedCategory === "" ? "active" : "p"}
              >
                {props.t("Barcha kategoriyalar")}
              </p>
              {uniqueCategories.map((category, index) => (
                <p
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className={selectedCategory === category ? "active" : "p"}
                >
                  {props.t(category)}
                </p>
              ))}
            </div>
          </div>
          <div className="searchFilter__right">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product__list-item n">
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="product__list-img"
                      src={product.img}
                      alt={`Product ${product.id}`}
                    />
                  </Link>
                  <button
                    className="product__heart"
                    onClick={() => dispatch(toggleLike(product))}
                  >
                    {wishlist?.some((el) => el.id === product.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                  <p className="product__list-text">
                    {props.t(product.textKey)}
                  </p>
                </div>
              ))
            ) : (
              <img
                className="searchFilter__right-noResults"
                src={noResults}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
