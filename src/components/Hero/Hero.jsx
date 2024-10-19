import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/images/heroImg.png";
import { BsTelegram } from "react-icons/bs";

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__start">
          <img className="hero__img" src={heroImg} alt="" />
          <div className="hero__card">
            <p className="hero__text1">{props.t("hero__text1")}</p>
            <p className="hero__text2">{props.t("hero__text2")}</p>
            <p className="hero__text3">{props.t("hero__text3")}</p>
            <div className="telegram">
              <a href="https://telegram.me/Bukharanaturalproduct">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
