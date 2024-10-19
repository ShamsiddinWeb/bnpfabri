import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link
import empty from "../../assets/images/nn.png";
import "./Wishlist.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value || []);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wishlist">
      <div className="container">
        <div className="wishlist__start">
          {wishlist.length ? (
            wishlist.map((item) => (
              <div className="wishlist__card" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img
                    className="wishlist-img"
                    src={item.img}
                    alt={item.name}
                  />
                </Link>
                <p>{t(item.textKey)}</p>
                <button
                  className="wishlist__heart"
                  onClick={() => dispatch(toggleLike(item))}
                >
                  {item.liked ?  <FaRegHeart /> : <FaHeart /> }
                </button>
              </div>
            ))
          ) : (
            <div className="wishlist__empty1">
              <div className="wishlist__em2"></div>
              {/* <img className="wishlist__em2" src={empty} alt="Empty Wishlist" /> */}
              <img className="wishlist__em" src={empty} alt="Empty Wishlist" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
