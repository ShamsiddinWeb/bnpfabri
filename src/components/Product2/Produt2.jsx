import React from "react";
import "../Product/Product.scss";
import { data } from "../../Data/ProductData";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";

const Product2 = (props) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  let productData = data?.slice(10, 20).map((e) => (
    <li key={e.id} className="product__list-item">
      <Link to={`/product/${e.id}`}>
        <img className="product__list-img" src={e.img} alt="" width={250} />
      </Link>
      <button
        className="product__heart"
        onClick={() => dispatch(toggleLike(e))}
      >
        {wishlist?.some((el) => el.id === e.id) ? <FaHeart /> : <FaRegHeart />}
      </button>
      <p className="product__list-text">{props.t(e.textKey)}</p>
    </li>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="product__start">
          <h1 className="product__title">{props.t("product__title1")}</h1>
          <p className="product__text">{props.t("product__text")}</p>
          <ul className="product__list">{productData}</ul>
        </div>
      </div>
    </section>
  );
};

export default Product2;
