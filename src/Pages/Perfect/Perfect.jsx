import React, { useEffect } from "react";
import "./Perfect.scss";
import newsImg1 from "../../assets/images/newsImg1.png";
import Connection from "../../components/Connection/Connection";

const Perfect = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="perfect">
      <div className="container">
        <header className="perfect__start">
          <img
            className="perfect__img"
            src={newsImg1}
            alt={props.t("news__imageDescription")}
          />
          <div>
            <p className="perfect__span">
              <span>10/05/2019</span>
              {props.t("news__text")}
            </p>
            <h2 className="perfect__title">{props.t("news__title1")}</h2> 
            <p className="perfect__text">{props.t("perfect__text1")}</p>
            <p className="perfect__text">{props.t("perfect__text2")}</p>
            <p className="perfect__text">{props.t("perfect__text3")}</p>
            <p className="perfect__text">{props.t("perfect__text4")}</p>
          </div>
        </header>
        <Connection t={props.t} />
      </div>
    </article>
  );
};

export default Perfect;
