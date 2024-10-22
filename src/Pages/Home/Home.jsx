import React from "react";
import Services from "../../components/Services/Services";
import Qualiyt from "../../components/Qualiyt/Qualiyt";
import qualityImg from "../../assets/images/quality__img.png";
import qualityImg2 from "../../assets/images/q.png";
import qualityImg3 from "../../assets/images/quality__img3.png";
import Product from "../../components/Product/Product";
import News from "../../components/News/News";
import Hero from "../../components/Hero/Hero";

const Home = (props) => {

  return (
    <>
      <Hero t={props.t} />
      <Services t={props.t} />
      <Qualiyt t={props.t} img={qualityImg} bgColor="#464351" />
      <Product t={props.t} sum={0} sum2={10} text = {props.t("product__title")}/>
      <Qualiyt t={props.t} img={qualityImg2} bgColor="#7f54b3" />
      <Product t={props.t} sum={10} sum2={20} text = {props.t("product__title1")}/>
      <Qualiyt t={props.t} img={qualityImg3} bgColor="#236f48" />
      <Product t={props.t} sum={20} sum2={30} text = {props.t("product__title2")}/>
      <News t={props.t} />
    </>
  );
};

export default Home;
