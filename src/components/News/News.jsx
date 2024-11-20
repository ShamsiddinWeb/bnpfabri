import React from "react";
import "./News.scss";
import newsImg1 from "../../assets/images/newsImg1.png";
import newsImg2 from "../../assets/images/newsImg2.png";
import newsImg3 from "../../assets/images/newsImg3.png";
import { Link } from "react-router-dom";

const News = (props) => {
  let data = [
    {
      id: 1,
      text: props.t("news__text1"),
      img: newsImg1,
      link: "perfect",
      altText: "Description of the first news image",
      title :  props.t("news__title1")
    },
    {
      id: 2,
      text: props.t("news__text2"),
      img: newsImg2,
      link: "perfect-2",
      altText: "Description of the second news image",
      title :  props.t("news__title2")
    },
    {
      id: 3,
      text: props.t("news__text3"),
      img: newsImg3,
      link: "perfect-3",
      altText: "Description of the third news image",
      title :  props.t("news__title3")
    },
  ];

  let newsData = data?.map((e) => (
    <li key={e.id} className="news__list-item">
      <Link to={e.link} aria-label={props.t("news__title1")}>
        <img className="news__list-img" src={e.img} alt={e.altText} loading="lazy" width="400" height="300" />
      </Link>
      <div className="news__list-card">
        <time className="news__list-card__date" dateTime="2024-05-10">10/05/2024</time>
        <p className="news__list-card__text">{props.t("news__text")}</p>
      </div>
      <h3 className="news__list-title">{e.title}</h3>
      <p className="news__list-text">{e.text}</p>
    </li>
  ));

  return (
    <section className="news" aria-labelledby="news-section-title">
      <div className="container">
        <div className="news__start">
          <h2 id="news-section-title" className="news__title">{props.t("news__title")}</h2>
          <p className="news__description">{props.t("qualiyt__title")}</p>
          <ul className="news__list">{newsData}</ul>
        </div>
      </div>
    </section>
  );
};

export default News;
