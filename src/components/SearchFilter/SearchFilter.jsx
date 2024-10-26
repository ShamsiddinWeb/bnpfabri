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
              <label htmlFor="searchInput" className="visually-hidden">
                {props.t("search")}
              </label>
              <input
                id="searchInput"
                className="searchFilter__left-inp"
                type="text"
                placeholder={props.t("search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search products"
              />
              <IoSearch aria-hidden="true" />
            </div>
            <div className="searchFilter__left-category">
              <h2 className="searchFilter__left-title">
                {props.t("header__link2")}
              </h2>
              <button
                onClick={() => handleCategorySelect("")}
                className={selectedCategory === "" ? "active" : ""}
                aria-label="View all categories"
              >
                {props.t("Barcha kategoriyalar")}
              </button>
              {uniqueCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className={selectedCategory === category ? "active" : ""}
                  aria-label={`Filter by ${props.t(category)}`}
                >
                  {props.t(category)}
                </button>
              ))}
            </div>
          </div>
          <div className="searchFilter__right">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="product__list-item"
                  aria-labelledby={`product-title-${product.id}`}
                >
                  <Link to={`/product/${product.id}`} aria-label="View product details">
                    <img
                      className="product__list-img"
                      src={product.img}
                      alt={`Product ${product.id}`}
                    />
                  </Link>
                  <button
                    className="product__heart"
                    onClick={() => dispatch(toggleLike(product))}
                    aria-label={
                      wishlist?.some((el) => el.id === product.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    {wishlist?.some((el) => el.id === product.id) ? (
                      <FaHeart aria-hidden="true" />
                    ) : (
                      <FaRegHeart aria-hidden="true" />
                    )}
                  </button>
                  <p id={`product-title-${product.id}`} className="product__list-text">
                    {props.t(product.textKey)}
                  </p>
                </article>
              ))
            ) : (
              <div className="searchFilter__noResults">
                <img
                  className="searchFilter__right-noResults"
                  src={noResults}
                  alt="No results found"
                />
                <p>{props.t("noResultsMessage")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
