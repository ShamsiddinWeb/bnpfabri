import React from "react";
import "./Services.scss";
import servicesIcon1 from "../../assets/icons/servicesIcon.svg";
import servicesIcon2 from "../../assets/icons/servicesIcon2.svg";
import servicesIcon3 from "../../assets/icons/servicesIcon3.svg";
import servicesIcon4 from "../../assets/icons/servicesIcon4.svg";

const Services = (props) => {
  const data = [
    {
      id: 1,
      img: servicesIcon1,
      title: props.t("services__title1"),
      text: props.t("services__text1"),
    },
    {
      id: 2,
      img: servicesIcon2,
      title: props.t("services__title2"),
      text: props.t("services__text2"),
    },
    {
      id: 3,
      img: servicesIcon3,
      title: props.t("services__title3"),
      text: props.t("services__text3"),
    },
    {
      id: 4,
      img: servicesIcon4,
      title: props.t("services__title4"),
      text: props.t("services__text4"),
    },
  ];

  const servicesData = data.map((service) => (
    <li key={service.id} className="services__list-item" aria-labelledby={`service-title-${service.id}`}>
      <img src={service.img} alt={`${service.title} icon`} className="services__list-img" />
      <div className="services__list-card">
        <h3 id={`service-title-${service.id}`} className="services__list-title">
          {service.title}
        </h3>
        <p className="services__list-text">{service.text}</p>
      </div>
    </li>
  ));

  return (
    <section className="services">
      <div className="container">
        <div className="services__start">
          <h2 className="services__heading">{props.t("services__heading")}</h2>
          <ul className="services__list">{servicesData}</ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
