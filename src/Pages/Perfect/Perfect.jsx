import React, { useEffect } from 'react'
import "./Perfect.scss"
import newsImg1 from "../../assets/images/newsImg1.png";
import Connection from '../../components/Connection/Connection';

const Perfect = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className='perfect'>
      <div className="container">
        <div className="perfect__start">
          <img src={newsImg1} alt="" />
          <p className='perfect__span'><span>10/05/2019</span>{props.t("news__text")}</p>
          <p className='perfect__text'>{props.t("perfect__text1")}</p>
          <p className='perfect__text'>{props.t("perfect__text2")}</p>
          <p className='perfect__text'>{props.t("perfect__text3")}</p>
          <p className='perfect__text'>{props.t("perfect__text4")}</p>
          <Connection t={props.t} />
        </div>
      </div>
    </section>
  )
}

export default Perfect