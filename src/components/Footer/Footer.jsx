import React from "react";
import "./Footer.scss";
import headerImg from "../../assets/icons/header__icon.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const data = [
    { id: 1, link: "/", title: props.t("header__link1") },
    { id: 2, link: "/collection", title: props.t("header__link2") },
    { id: 3, link: "/about", title: props.t("header__link3") },
    { id: 4, link: "/contact", title: props.t("header__link4") },
  ];

  const headerList = data.map((e) => (
    <li key={e.id} className="footer__list-item">
      <Link to={e.link} className="footer__list-link" aria-label={e.title}>
        {e.title}
      </Link>
    </li>
  ));

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="container">
        <div className="footer__start">
          <div className="footer__left">
            <a href="#" aria-label="Company logo">
              <img src={headerImg} alt="Company Logo" width={300} />
            </a>
            <p className="footer__left-text">{props.t("footer__text")}</p>
          </div>

          <div className="footer__menu">
            <h2 id="footer-heading" className="footer__menu-title">
              {props.t("footer__menu")}
            </h2>
            <nav aria-label="Footer Navigation">
              <ul className="footer__list">{headerList}</ul>
            </nav>
          </div>

          <div className="footer__contact">
            <h3 className="footer__contact-title">
              {props.t("footer__contact")}
            </h3>
            <address className="footer__contact-info" aria-label="Contact Information">
              <p className="footer__contact-text">
                {props.t("footer__contact1")}
              </p>
              <p className="footer__contact-text">Email: sleepnest@gamil.com</p>
              <p className="footer__contact-text">Telegram: sleepnest</p>
              
              <a className="footer__contact-text" href="tel:+998940337212">
                +998 94 033 72 12
              </a>
            </address>
          </div>

          <div className="footer__right">
            <h4 className="footer__right-title">{props.t("footer__email1")}</h4>
            <form className="footer__right-form" aria-labelledby="email-subscription">
              <input
                id="email-subscription"
                className="footer__right-inp"
                type="email"
                placeholder={props.t("footer__email1")}
                required
                aria-label="Enter your email to subscribe"
              />
              <button type="submit" className="footer__right-btn">
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
