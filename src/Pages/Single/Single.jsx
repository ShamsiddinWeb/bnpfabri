import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/ProductData"; 
import { useTranslation } from "react-i18next"; 
import "./Single.scss"; 
import not from "../../assets/images/404.png"

const Single = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const foundProduct = data?.find((item) => item.id === parseInt(id, 10));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.log("Product not found");
    }
  }, [id]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {product ? (
        <>
          <section className="single">
            <div className="container">
              <div className="single__start">
                <img
                  className="single__img"
                  src={product.img}
                  alt={product.textKey}
                />
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
                        <td className="single__left-td">
                        {props.t("single__text12")}
                        </td>
                      </tr>
                      <tr>
                        <td className="single__left-td"></td>
                        <td className="single__left-td">
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="single__left-text">{props.t("single__text13")}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <img className="single__not" src={not} alt="" />
      )}
    </div>
  );
};

export default Single;
