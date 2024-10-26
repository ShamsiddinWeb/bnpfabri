import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { data } from "../../Data/ProductData";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";

const Product = (props) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  let productData = data?.slice(props.sum, props.sum2).map((e) => (
    <li key={e.id} className="product__list-item">
      <Link to={`/product/${e.id}`} aria-label={`View details of ${e.textKey}`}>
        <img
          className="product__list-img"
          src={e.img}
          alt={`${e.textKey} image`}
          width={250}
          height={250}
          loading="lazy"
        />
      </Link>
      <button
        className="product__heart"
        onClick={() => dispatch(toggleLike(e))}
        aria-label={`Add ${e.textKey} to wishlist`}
      >
        {wishlist?.some((el) => el.id === e.id) ? <FaHeart /> : <FaRegHeart />}
      </button>
      <p className="product__list-text">{props.t(e.textKey)}</p>
    </li>
  ));

  return (
    <section className="product" aria-labelledby="product-section-title">
      <div className="container">
        <div className="product__start">
          <h1 id="product-section-title" className="product__title">{props.text}</h1>
          <p className="product__description">{props.t("product__text")}</p>
          <ul className="product__list">{productData}</ul>
        </div>
      </div>
    </section>
  );
};

export default Product;
