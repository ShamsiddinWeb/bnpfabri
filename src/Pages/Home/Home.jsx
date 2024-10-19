import React from "react";
import Services from "../../components/Services/Services";
import Qualiyt from "../../components/Qualiyt/Qualiyt";
import qualityImg from "../../assets/images/quality__img.png";
import qualityImg2 from "../../assets/images/q.png";
import qualityImg3 from "../../assets/images/quality__img3.png";
import Product from "../../components/Product/Product";
import Product2 from "../../components/Product2/Produt2";
import Product3 from "../../components/Product3/Product3";
import News from "../../components/News/News";
import Hero from "../../components/Hero/Hero";

const Home = (props) => {

  return (
    <>
      <Hero t={props.t} />
      <Services t={props.t} />
      <Qualiyt t={props.t} img={qualityImg} bgColor="#464351" />
      <Product t={props.t} />
      <Qualiyt t={props.t} img={qualityImg2} bgColor="#7f54b3" />
      <Product2 t={props.t} />
      <Qualiyt t={props.t} img={qualityImg3} bgColor="#236f48" />
      <Product3 t={props.t} />
      <News t={props.t} />
    </>
  );
};

export default Home;
