import React, { useEffect, useState } from "react";
import "./Connection.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAt_ID = "-1002028151929";
const USER_ID = "6386975284";

const Connection = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    let text = "";
    text += "Mijoz Mahsulotni sharhladi: %0A%0A";
    text += `Mijoz Emaili: ${name} %0A`;
    text += `Mijoz Telefon Raqami: ${tel} %0A`;
    text += `Mijoz xabari: ${tel} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setName(""), setTel(""), setText(""), setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTel(value);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="connection" id="link">
      <div className="container">
        <div className="connection__start">
          <form
            className="connection__form"
            onSubmit={handleSubmit}
            data-aos="fade-right"
          >
            <h3 className="connection__form-title">
              {props.t("connection__title")}
            </h3>
            <input
              type="email"
              placeholder={props.t("connection__name")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder={props.t("connection__tel")}
              value={tel}
              onChange={handleChange}
              required
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="feedback"
              name="feedback"
              rows="6"
              cols="60"
              maxlength="200"
              placeholder={props.t("connection__n")}
            ></textarea>
            <button className="connection__form-btn">
              {props.t("connection__btn")}
            </button>
          </form>
          <iframe
            className="connection__xarita"
            src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            title="39.747452957301974, 64.45996439941372"
            aria-label="39.747452957301974, 64.45996439941372"
          ></iframe>
          {isModalOpen && (
            <div>
              <div className="modal">
                <p className="modal__text">{props.t("modal__text")}</p>
                <button className="modal__btn" onClick={closeModal}>
                  {props.t("modal__btn")}
                </button>
              </div>
              <div className="modal__black"></div>
            </div>
          )}
        </div>
        <div className="connection__end">
          <ul className="connection__list">
            <li className="connection__list-item">
              <MdOutlineTextsms />
              <a href="tel:998933837585">Email:info@bnpfabric.uz</a>
            </li>
            <li className="connection__list-item">
              <MdOutlinePhoneInTalk />
              <a href="tel:998933837585">
                Тел:+998 93 383 75 85 <br />
                +998 93 960 78 00
              </a>
            </li>
            <li className="connection__list-item">
              <IoLocationOutline />
              <a href="tel:998933837585">
                {props.t("footer__contact1")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Connection;
