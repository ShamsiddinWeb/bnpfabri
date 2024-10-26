import React from "react";
import "./About.scss";
import aboutImg from "../../assets/images/aboutImg.png";

const About = (props) => {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__start">
          <img
            className="about__img1"
            src={aboutImg}
            alt="About our product and team"
          />
          <div className="about__left">
            <h1 id="about-heading" className="about__title">
              {props.t("product__text")}
            </h1>
            <article className="about__content">
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
            </article>
          </div>
          <img
            className="about__img"
            src={aboutImg}
            alt="Detailed view of our product features"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
