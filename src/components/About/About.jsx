import React from "react";
import "./About.scss";
import aboutImg from "../../assets/images/aboutImg.png";

const About = (props) => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__start">
          <img className="about__img1" src={aboutImg} alt="" />
          <div className="about__left">
            <h2 className="about__title">{props.t("product__text")}</h2>
            <p className="about__text">{props.t("about__text1")}</p>
            <p className="about__text">{props.t("about__text2")}</p>
            <p className="about__text">{props.t("about__text3")}</p>
            <p className="about__text">{props.t("about__text4")}</p>
            <p className="about__text">{props.t("about__text5")}</p>
            <p className="about__text">{props.t("about__text6")}</p>
            <p className="about__text">{props.t("about__text7")}</p>
            <p className="about__text">{props.t("about__text8")}</p>
            <p className="about__text">{props.t("about__text9")}</p>
            <p className="about__text">{props.t("about__text10")}</p>
            <p className="about__text">{props.t("about__text11")}</p>
          </div>
          <img className="about__img" src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
