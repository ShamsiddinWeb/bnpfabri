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
        console.error("Error fetching reviews: ", error);
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

    localStorage.setItem(`reviews_${productId}`, JSON.stringify(updatedReviews));

    const message = `Mijoz Habar Yubordi:%0A%0AIsmi: ${name}%0AEmail: ${email}%0ARating: ${rating}%0ASharh: ${review}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${message}`;

    const api = new XMLHttpRequest();
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
        <section className="reviewForm__left">
          <h3 className="reviewForm__left-title">{t("Review__text1")}</h3>
          {reviews.length > 0 ? (
            reviews.map((e, index) => (
              <article key={index} className="review-item" aria-label="User review">
                <p className="reviewForm__left-text">
                  <strong>{e.name}</strong> — {e.date}
                </p>
                <p className="reviewForm__left-text2">
                  <b>{t("Review__text10")}</b> <span>{e.rating} / 5</span>
                </p>
                <p className="reviewForm__left-text3">{e.review}</p>
              </article>
            ))
          ) : (
            <p>{t("Review__text8")}</p>
          )}
        </section>

        <form onSubmit={handleSubmit} aria-labelledby="review-form-title">
          <h3 id="review-form-title" className="reviewForm__left-title">{t("Review__text2")}</h3>

          <label htmlFor="rating">{t("Review__text3")}</label>
          <div id="rating" className="rating" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                role="radio"
                aria-checked={star <= rating}
                className={star <= rating ? "star selected" : "star"}
                onClick={() => setRating(star)}
              >
                &#9733;
              </span>
            ))}
          </div>

          <label htmlFor="name">{t("Review__text4")}</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />

          <label htmlFor="email">{t("Review__text5")}</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />

          <label htmlFor="review">{t("Review__text6")}</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            aria-required="true"
          />

          <button type="submit" aria-label="Submit review">{t("Review__text7")}</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
