import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../Data/ProductData";
import { useTranslation } from "react-i18next";
import "./Single.scss";
import "../../components/Product/Product.scss";
import not from "../../assets/images/404.png";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";

const Single = (props) => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10));
    if (foundProduct) {
      setProduct(foundProduct);
      const relatedProducts = data.filter(
        (item) => item.category === foundProduct.category && item.id !== foundProduct.id
      );
      setRelated(relatedProducts);
    } else {
      console.error("Product not found");
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : product ? (
        <section className="single">
          <div className="container">
            <div className="single__start">
              <div
                className="single__card"
                onMouseMove={handleMouseMove}
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundPosition: backgroundPosition,
                  backgroundSize: "200%",
                  transition: "background-position 0.1s ease",
                }}
                aria-label={t(product.textKey)} // Adding ARIA label for screen readers
              >
                <img
                  className="single__img"
                  src={product.img}
                  alt={t(product.textKey)} // Ensure the alt text is descriptive
                />
                <div id="lens"></div>
              </div>

              <div className="single__left">
                <h2>{t(product.textKey)}</h2>
                <table className="single__left-table">
                  <tbody>
                    <tr>
                      <td className="single__left-td">{props.t("single__text1")}</td>
                      <td className="single__left-td">{props.t("single__text2")}</td>
                    </tr>
                    <tr>
                      <td className="single__left-td">{props.t("single__text3")}</td>
                      <td className="single__left-td">{props.t("single__text4")}</td>
                    </tr>
                    <tr>
                      <td className="single__left-td">{props.t("single__text5")}:</td>
                      <td className="single__left-td">{props.t("single__text6")}</td>
                    </tr>
                    <tr>
                      <td className="single__left-td">{props.t("single__text7")}</td>
                      <td className="single__left-td">{props.t("single__text8")}</td>
                    </tr>
                    <tr>
                      <td className="single__left-td">{props.t("single__text9")}</td>
                      <td className="single__left-td">{props.t("single__text10")}</td>
                    </tr>
                    <tr>
                      <td className="single__left-td">{props.t("single__text11")}:</td>
                      <td className="single__left-td">{props.t("single__text12")}</td>
                    </tr>
                    <tr>
                      <td className="single__left-td"></td>
                      <td className="single__left-td"></td>
                    </tr>
                  </tbody>
                </table>
                <p className="single__left-text">
                  {props.t("single__text13")}
                  {t(product.category)}
                </p>
              </div>
            </div>

            <ReviewForm t={props.t} productId={product.id} />

            <div className="single__related">
              <h3 className="single__related-title">{props.t("product__cate")}</h3>
              <ul className="product__list">
                {related.length > 0 ? (
                  related.slice(3, 8).map((item) => (
                    <li key={item.id} className="product__list-item">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <img onClick={handleRefresh}
                          className="product__list-img"
                          src={item.img}
                          alt={t(item.textKey)} // Ensure alt text is descriptive
                        />
                      </Link>
                      <button
                        className="product__heart"
                        onClick={() => dispatch(toggleLike(item))}
                        aria-label={wishlist?.some((el) => el.id === item.id) ? "Remove from wishlist" : "Add to wishlist"} // Add ARIA label for accessibility
                      >
                        {wishlist?.some((el) => el.id === item.id) ? (
                          <FaHeart />
                        ) : (
                          <FaRegHeart />
                        )}
                      </button>
                      <p className="product__list-text">{t(item.textKey)}</p>
                    </li>
                  ))
                ) : (
                  <p>{t("No related products found")}</p> // Use translation for consistency
                )}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <img className="single__not" src={not} alt="Product not found" />
      )}
    </div>
  );
};

export default Single;
