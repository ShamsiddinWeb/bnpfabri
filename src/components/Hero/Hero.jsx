import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/images/heroImg.png";

const Hero = (props) => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero__start">
          <img 
            className="hero__img" 
            src={heroImg} 
            alt="Hero section showing [describe image content here, e.g., brand visuals]" 
            width={1800}
            loading="lazy"
          />
          <div className="hero__card">
            <h1 id="hero-heading" className="hero__text1">
              {props.t("hero__text1")}
            </h1>
            <p className="hero__text2">{props.t("hero__text2")}</p>
            <p className="hero__text3">{props.t("hero__text3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
