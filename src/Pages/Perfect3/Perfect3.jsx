import React, { useEffect } from 'react';
import "../Perfect/Perfect.scss";
import newsImg3 from "../../assets/images/newsImg3.png";
import Connection from '../../components/Connection/Connection';

const Perfect3 = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className='perfect'>
      <div className="container">
        <header className="perfect__start">
          <img 
            className="perfect__img" 
            src={newsImg3} 
            alt={props.t("news__imageDescription")} 
          />
          <p className='perfect__span'>
            <span>10/05/2019</span> {props.t("news__text")}
          </p>
          <h2 className='perfect__title'>{props.t("news__title3")}</h2>
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

export default Perfect3;
