import React, { useState } from "react";
import headerImg from "../../assets/icons/header__icon.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";

function Header(props) {
  let wishlist = useSelector((state) => state.wishlist.value);
  let data = [
    {
      id: 1,
      link: "/",
      title: props.t("header__link1"),
      span: "",
    },
    {
      id: 2,
      link: "collection",
      title: props.t("header__link2"),
      span: "",
    },
    {
      id: 3,
      link: "about",
      title: props.t("header__link3"),
      span: "",
    },
    {
      id: 4,
      link: "contact",
      title: props.t("header__link4"),
      span: "",
    },

  ];
  const headerList = data?.map((e) => (
    <li
      key={e.id}
      onClick={() => setToggle(!toogle)}
      className="header__list-item"
    >
      <NavLink className="header__list-link" to={e.link}>
        {e.title}
      </NavLink>
      
    </li>
  ));

  const [toogle, setToggle] = useState(false);
  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div
          class="header__active dark_div"
          onClick={() => setToggle(!toogle)}
        ></div>
        <div className="header__start">
          <Link to={"/"}>
            <img
              className="header__icon"
              src={headerImg}
              alt="This is the logo"
              width={180}
            />
          </Link>
          <div className="header__right">
            <div className="header__card">
              <ul className="header__list">{headerList}</ul>
              <NavLink  onClick={() => setToggle(!toogle)} className="header__list-link1" to={"wishlist"}>
                {props.t("header__link5")}
                <sup className="header__list-sup">{wishlist.length}</sup>
              </NavLink>
            </div>
            <select
              className="header__select"
              name="Lng"
              id="lng"
              onChange={props.handleChange}
              value={props.laungage}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="eng">ENG</option>
            </select>
            <div className="header__menu-burgers">
              <button
                className="header__menu"
                id="menu-burger"
                onClick={() => setToggle(!toogle)}
              >
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
