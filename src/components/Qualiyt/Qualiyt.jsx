import React from "react";
import "./Qualiyt.scss";
import qualityImg from "../../assets/images/quality__img.png";

const Qualiyt = (props) => {
  return (
    <section className="qualiyt">
      <div className="container">
        <div className="qualiyt__start" style={{ backgroundColor: props.bgColor }}>
          <div className="qualiyt__left">
            <p className="qualiyt__left-title">100%</p>
            <div className="qualiyt__left-text">
              {props.t("qualiyt__text1")}
            </div>
          </div>
          <img className="qualiyt__img" src={props.img} alt="" width={800} />
          <div className="qualiyt__right">
            <p className="qualiyt__right-title">"{props.t("qualiyt__title")}"</p>
            <div className="qualiyt__right-text">
              {props.t("qualiyt__text2")}
            </div>
            <button className="qualiyt__right-btn">
              {props.t("qualiyt__btn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualiyt;
