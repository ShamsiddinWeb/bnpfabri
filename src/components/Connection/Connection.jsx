import React, { useEffect, useState } from "react";
import "./Connection.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineTextsms, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAT_ID = "-1002028151929";

const Connection = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    const message = `
      Mijoz Mahsulotni sharhladi: %0A%0A
      Mijoz Emaili: ${name} %0A
      Mijoz Telefon Raqami: ${tel} %0A
      Mijoz xabari: ${text} %0A
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
    fetch(url);
    setName("");
    setTel("");
    setText("");
    setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setTel(value);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section className="connection" id="link" aria-labelledby="connection-heading">
      <div className="container">
        <div className="connection__start">
          <form
            className="connection__form"
            onSubmit={handleSubmit}
            data-aos="fade-right"
            aria-describedby="form-description"
          >
            <h3 id="connection-heading" className="connection__form-title">
              {props.t("connection__title")}
            </h3>
            <input
              type="text"
              placeholder={props.t("connection__name")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="User Name"
            />
            <input
              type="tel"
              placeholder={props.t("connection__tel")}
              value={tel}
              onChange={handleChange}
              required
              aria-label="User Phone Number"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="feedback"
              name="feedback"
              rows="6"
              maxLength="200"
              placeholder={props.t("connection__n")}
              aria-label="User Message"
            ></textarea>
            <button type="submit" className="connection__form-btn">
              {props.t("connection__btn")}
            </button>
          </form>
          <iframe
            className="connection__map"
            src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            title="Location Map"
            aria-label="Location Map Coordinates 39.747452957301974, 64.45996439941372"
          ></iframe>
          {isModalOpen && (
            <div className="modal-overlay">
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
          <ul className="connection__list" aria-label="Contact Information">
            <li className="connection__list-item">
              <MdOutlineTextsms />
              <a href="mailto:info@bnpfabric.uz">Email: info@bnpfabric.uz</a>
            </li>
            <li className="connection__list-item">
              <MdOutlinePhoneInTalk />
              <a href="tel:998933837585">Тел: +998 93 383 75 85</a><br />
              <a href="tel:998939607800">+998 93 960 78 00</a>
            </li>
            <li className="connection__list-item">
              <IoLocationOutline />
              <span>{props.t("footer__contact1")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Connection;
