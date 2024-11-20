import React, { useState } from "react";
import headerImg from "../../assets/icons/header__icon.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
import {  FaHeart } from "react-icons/fa";

function Header(props) {
  const wishlist = useSelector((state) => state.wishlist.value);
  const data = [
    { id: 1, link: "/", title: props.t("header__link1") },
    { id: 2, link: "/collection", title: props.t("header__link2") },
    { id: 3, link: "/about", title: props.t("header__link3") },
    { id: 4, link: "/contact", title: props.t("header__link4") },
  ];

  const [toggle, setToggle] = useState(false);

  const headerList = data.map((item) => (
    <li
      key={item.id}
      onClick={() => setToggle(!toggle)}
      className="header__list-item"
    >
      <NavLink
        className="header__list-link"
        to={item.link}
        aria-label={item.title}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <header
      className={`header ${toggle ? "open" : ""}`}
      aria-labelledby="header-navigation"
    >
      <div className="container">
        <div
          className="header__overlay dark_div"
          onClick={() => setToggle(!toggle)}
        ></div>
        <div className="header__start">
          <Link to="/" aria-label="Homepage">
            <img
              className="header__icon"
              src={headerImg}
              alt="Company Logo"
              width={180}
            />
          </Link>
          <div className="header__right">
            <nav aria-label="Primary Navigation" className="header__card">
              <ul className="header__list">{headerList}</ul>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className="header__list-link header__wishlist-link"
                to="/wishlist"
                aria-label="Wishlist"
              >
                < FaHeart className="header__list-sup-svg"  />
                <sup className="header__list-sup">{wishlist.length}</sup>
              </NavLink>
            </nav>
            <label htmlFor="language-select" className="visually-hidden">
              {props.t("header__language")}
            </label>
            <select
              id="language-select"
              className="header__select"
              onChange={props.handleChange}
              value={props.language}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="eng">ENG</option>
            </select>
            <button
              className="header__menu-toggle"
              aria-controls="header-navigation"
              aria-expanded={toggle}
              aria-label="Toggle menu"
              onClick={() => setToggle(!toggle)}
            >
              <span className="header__menu-bar"></span>
              <span className="header__menu-bar"></span>
              <span className="header__menu-bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
