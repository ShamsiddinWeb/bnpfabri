import React, { useEffect } from "react";
import About from "../../components/About/About";

const Abouts = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <About t={props.t} />
    </>
  );
};

export default Abouts;
