import React, { useEffect } from 'react';
import "../Perfect/Perfect.scss";
import newsImg2 from "../../assets/images/newsImg2.png";
import Connection from '../../components/Connection/Connection';

const Perfect2 = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className='perfect'>
      <div className="container">
        <header className="perfect__start">
          <img 
            className="perfect__img" 
            src={newsImg2} 
            alt={props.t("news__imageDescription")} // Provide a descriptive alt text
          />
          <p className='perfect__span'>
            <span>10/05/2019</span> {props.t("news__text")}
          </p>
          <h2 className='perfect__title'>{props.t("news__title2")}</h2> 
          <p className='perfect__text'>{props.t("perfect__text1")}</p>
          <p className='perfect__text'>{props.t("perfect__text2")}</p>
          <p className='perfect__text'>{props.t("perfect__text3")}</p>
          <p className='perfect__text'>{props.t("perfect__text4")}</p>
          <Connection t={props.t} />
        </header>
      </div>
    </article>
  );
}

export default Perfect2;
