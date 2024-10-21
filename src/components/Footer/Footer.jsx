import React from "react";
import "./Footer.scss";
import headerImg from "../../assets/icons/header__icon.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  let data = [
    {
      id: 1,
      link: "/",
      title: props.t("header__link1"),
    },
    {
      id: 2,
      link: "collection",
      title: props.t("header__link2"),
    },
    {
      id: 3,
      link: "about",
      title: props.t("header__link3"),
    },
    {
      id: 4,
      link: "contact",
      title: props.t("header__link4"),
    },
  ];
  const headerList = data?.map((e) => (
    <li key={e.id} className="footer__list-item">
      <Link to={e.link} className="footer__list-link">
        {e.title}
      </Link>
    </li>
  ));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__left">
            <a href="#">
              <img src={headerImg} alt="" width={300} />
            </a>
            <p className="footer__left-text">{props.t("footer__text")}</p>
          </div>
          <div className="footer__menu">
            <h4 className="footer__menu-title">{props.t("footer__menu")}</h4>
            <ul className="footer__list">{headerList}</ul>
          </div>
          <div className="footer__contact">
            <h4 className="footer__contact-title">
              {props.t("footer__contact")}
            </h4>
            <p className="footer__contact-text">
              {props.t("footer__contact1")}
            </p>
            <p className="footer__contact-text">Bnpuz@bk.ru</p>
            <p className="footer__contact-text">bnp_fabrik</p>
            <p className="footer__contact-text">info@bnpfabric.com</p>
            <a className="footer__contact-text" href="tel:+998933837585">
              +998 93 383 75 85
            </a>
            <p>
              {" "}
              <a className="footer__contact-text" href="tel:+998939607800">
                +998 93 960 78 00
              </a>
            </p>
          </div>
          <div className="footer__right">
            <h4 className="footer__right-title">{props.t("footer__email1")}</h4>
            <form className="footer__right-form">
              <input
                className="footer__right-inp"
                type="email"
                placeholder={props.t("footer__email1")}
                required
              />
              <button className="footer__right-btn">
                {props.t("footer__btn")}
              </button>
            </form>
            <p className="footer__right-text">{props.t("footer__email2")}</p>
          </div>
        </div>
      </div>
      <div className="footer__end">
        <div className="container">
          <p className="footer__end-text">{props.t("footer__end")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
