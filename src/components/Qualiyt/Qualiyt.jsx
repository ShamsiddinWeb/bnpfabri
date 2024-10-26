import React from "react";
import "./Qualiyt.scss";
import { Link } from "react-router-dom";

const Qualiyt = (props) => {
  return (
    <section className="qualiyt" aria-labelledby="qualiyt-section-title">
      <div className="container">
        <div
          className="qualiyt__start"
          style={{ backgroundColor: props.bgColor }}
        >
          <div className="qualiyt__left">
            <p className="qualiyt__left-title" aria-label="Quality Assurance">100%</p>
            <div className="qualiyt__left-text" aria-live="polite">
              {props.t("qualiyt__text1")}
            </div>
          </div>
          <img
            className="qualiyt__img"
            src={props.img}
            alt="High-quality product"
            width={800}
            loading="lazy"
          />
          <div className="qualiyt__right">
            <p id="qualiyt-section-title" className="qualiyt__right-title">
              "{props.t("qualiyt__title")}"
            </p>
            <div className="qualiyt__right-text" aria-live="polite">
              {props.t("qualiyt__text2")}
            </div>
            <Link to="/collection" className="qualiyt__right-btn-link">
              <button className="qualiyt__right-btn">
                {props.t("qualiyt__btn")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualiyt;
