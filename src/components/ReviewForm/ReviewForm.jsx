import React, { useState, useEffect } from "react";
import "./ReviewForm.scss";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAt_ID = "-1002028151929";

const ReviewForm = ({ productId, t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews_${productId}`);
    if (storedReviews) {
      try {
        const parsedReviews = JSON.parse(storedReviews);
        if (Array.isArray(parsedReviews)) {
          setReviews(parsedReviews);
        }
      } catch (error) {
        console.error("Sharhlarni olishda xato: ", error);
      }
    }
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();


    const newReview = {
      name,
      email,
      review,
      rating,
      date: new Date().toLocaleString(),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);


    localStorage.setItem(
      `reviews_${productId}`,
      JSON.stringify(updatedReviews)
    );


    let text = "";
    text += "Mijoz Habar Yubordi: %0A%0A";
    text += `Mijoz Ismi: ${name} %0A`;
    text += `Mijoz Emaili: ${email} %0A`;
    text += `Reyting: ${rating} %0A`;
    text += `Sharh: ${review} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${text}`;


    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setName("");
    setEmail("");
    setReview("");
    setRating(0);
  };

  return (
    <div className="reviewForm">
      <div className="reviewForm__start">
        <div className="reviewForm__left">
          <h3 className="reviewForm__left-title">{t("Review__text1")}</h3>
          {reviews.length > 0 ? (
            reviews.map((e, index) => (
              <div key={index} className="review-item">
                <p className="reviewForm__left-text">
                  <strong>{e.name}</strong> {e.date}
                </p>
                <p className="reviewForm__left-text2">
                  <b>{t("Review__text10")}</b> <span>{e.rating} / 5</span>
                </p>
                <br />
                <p className="reviewForm__left-text3">{e.review}</p>
              </div>
            ))
          ) : (
            <p>{t("Review__text8")}</p>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <h3 className="reviewForm__left-title">{t("Review__text2")}</h3>
          <label>
            {t("Review__text3")}
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "star selected" : "star"}
                  onClick={() => setRating(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </label>

          <label>
            {t("Review__text4")}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            {t("Review__text5")}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            {t("Review__text6")}
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </label>

          <button type="submit">{t("Review__text7")}</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
